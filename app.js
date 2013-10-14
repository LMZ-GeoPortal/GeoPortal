/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

var mapOl;

Ext.application({
    name: 'geoportal',

    requires: [
        'Ext.MessageBox',
		'Ext.Map',
		'Ext.Panel'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        
		/*var attribution = new ol.Attribution({
					 html: 'Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/' +
				  		'rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
					});*/
				
		
		//open layers map
		 mapOl = new ol.Map({
				//target: 'map',
				layers: [
						new ol.layer.Tile({
							source: new ol.source.MapQuestOSM(),
							visible: false
								})
							,
						
						new ol.layer.Tile({
							visible: false,
							preload: Infinity,
							source: new ol.source.BingMaps({
								key: 'Ar33pRUvQOdESG8m_T15MUmNz__E1twPo42bFx9jvdDePhX0PNgAcEm44OVTS7tt',
								style: 'Road'
								})
							})
						/*new ol.layer.Tile({
							visible: true,
							preload: Infinity,
							source: new ol.source.XYZ({
										attributions: [attribution],
										url: 'http://server.arcgisonline.com/ArcGIS/rest/services/' +
											'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
									  })
							})*/
					],
				view: new ol.View2D({
						center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
						zoom: 4
						})
		  });
		  
		var temp = Ext.create('geoportal.view.Main');

		//temp.innerItems[1].add (mapOl); //Ext.getCmp("mappanel").getInnerHtmlElement()
		Ext.Viewport.add(temp);
		mapOl.setTarget('mapPanel');
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

