
Ext.require ('GXM.Map');
var toolbar = Ext.create (Ext.Toolbar, {
				docked:'bottom',
				ui: 'light',
				items : [
					{
						xtype:'button',
						id:'bt_sch',
						iconCls: "search",
						text: 'Search',
						listeners:
							{
								tap: function(){overlay_search.showBy(Ext.getCmp("bt_sch"),"bl-tl");}
							}
					},
					{
						xtype:'button',
						id:'bt_layers',
						iconCls: "bookmarks",
						text: 'Layers',
						listeners:
							{
								tap: function(){
									Ext.getCmp('p_layers').showBy(Ext.getCmp("bt_layers"),"bl-tl");
									}
							}
					}
				]
				});
				
var data = {
    "items" : [{
          "text" : "Today",
          "items" : [{
                      "text" : "Eat",
                      "leaf" : true
                  }, {
                      "text" : "Sleep",
                      "leaf" : true
                  }, {
                      "text" : "Drinking",
                      "leaf" : true
                  }]
      }, {
          "text" : "Tomorrow",
          "items" : [{
                      "text" : "Watch TV",
                      "leaf" : true
                  }, {
                      "text" : "Watch Video",
                      "leaf" : true
                  }]
      }, {
          "text" : "This week",
          "items" : [{
                      "text" : "Shopping",
                      "leaf" : true
                  }]
      }, {
          "text" : "Later",
          "items" : [{
                      "text" : "Eat",
                      "leaf" : true
                  }, {
                      "text" : "Sleep",
                      "leaf" : true
                  }, {
                      "text" : "Drinking",
                      "leaf" : true
                  }]
      }]
 };

 Ext.define('Task', {
     extend: 'Ext.data.Model',
     config: {
         fields: [{
             name: 'text',
             type: 'string'
         }]
     }
 });

 var store = Ext.create('Ext.data.TreeStore', {
     model: 'Task',
     defaultRootProperty: 'items',
     root: data
 });
var overlay_search = Ext.create('Ext.Panel',{

            // We give it a left and top property to make it floating by default
            left: 0,
			top:0,
			padding:5,
            height: 200,
			width:400,
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            layout: 'vbox',
			//centered: true,
			hideOnMaskTap:true,
            hidden: true,
            scrollable: true,
			style:{'background':'rgba(100,0,100,0.5)'},
			items: [
					
					{
						id: 'tbx_start',
						xtype: 'textfield',
						label: 'Location'
											
					},
					{
						id: 'tbx_end',
						xtype: 'textfield',
						label: 'Destination',
						labelStyle: 'background-color:none'
					},
					{
						id: 'bt_search',
						xtype: 'button',
						text: 'Show route',
						style:{'background':'red'},
						listeners: {
							tap: function(){
								var temp = geocode (Ext.getCmp('tbx_start').getValue(),Ext.getCmp('tbx_end').getValue());
								console.log  (temp);
								}
						}
					}//,					listob
					
            ]
        });
var searchResultLayer = new OpenLayers.Layer.Vector("Results", { 
            strategies: [new OpenLayers.Strategy.BBOX(),new OpenLayers.Strategy.Refresh()], 
            projection: new OpenLayers.Projection("EPSG:4326"), 
            protocol: new OpenLayers.Protocol.HTTP({ 
                url: "resources/php/search.php", 
                method: "GET", 
                format: new OpenLayers.Format.GeoJSON() 
            }), 
            styleMap: new OpenLayers.Style({ 
                externalGraphic: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFF0000", 
                graphicYOffset: -25, 
                graphicHeight: 25 
               }), 
               eventListeners: { 
                'featureselected': function(feature) { 
                            console.log("Hello"); 
                             
                            } 
                        } 
        });	
var mapOl= 	new OpenLayers.Map({
									projection: new OpenLayers.Projection("EPSG:3857"),
									controls: [
										new OpenLayers.Control.Navigation()
										],
									layers:[new OpenLayers.Layer.Google(
												"Google Hybrid-Karte",
												{type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20, background: true}
												),
											searchResultLayer],
							 mapCenter: [8, 51],
							 mapZoom: 11,
							 height: 500,
							 width: 500
								});	
 Map =Ext.create('GXM.Map',{
							// fullscreen: true,
							 map: mapOl
						 });	
	
var selectCtrl = new OpenLayers.Control.SelectFeature(searchResultLayer);
mapOl.addControl(selectCtrl);
selectCtrl.activate();

Ext.define('geoportal.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Map',
		'Ext.Ajax',
		'GXM.Map',
		'Ext.ux.AccordionList'
	  ],
    config: {
             
				layout:'fit',
                items: [ Map,
						/*{
							xtype: 'panel',
							//flex:1,
							html: '<div class="cf-header-logo"><img src="resources/img/lmz-logo-big.png" width="137"  align="left"></div>'
						},*/
						{
						xtype: 'panel',
						id: 'p_layers',
						hidden: true,
						modal: true,
						hideOnMaskTap: true,
						width: 400,
						height: 250,
						left:0,
						scrollable: true,
						items: [
								{
								docked: 'top',
								xtype: 'titlebar',
								title: 'Menu'
								}, 
								{
								xtype: 'accordionlist',
								id:'list_acc',
								height: 200,
								store: store
								}
								
							]
						},							
												 
						toolbar
														
					]
			}
            
            
});
function geocode (start, end){
		Ext.Ajax.cors = true;
        Ext.Ajax.useDefaultXhrHeader = false;
		Ext.Ajax.request({
		url: 'http://open.mapquestapi.com/directions/v2/route',
		method:'GET',
		params: {
				key: 'Fmjtd%7Cluubnu0bng%2Cbl%3Do5-9u10lz',
				ambiguities:'ignore',
				from:'Lancaster,PA',
				to:'York,PA',
				callback: dummy,
		},
		callback: function(options, success, response) {
			console.log(response.responseText);
		}	
	});
 return start+end;
 }
   
function dummy (options, success, response){console.log(response.responseText);}   
	
