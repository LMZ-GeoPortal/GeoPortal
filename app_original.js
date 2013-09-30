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
        // Destroy the #appLoadingIndicator element
       // Ext.fly('appLoadingIndicator').destroy();
		
		// creating a google map
		var mapGoogle = Ext.create('Ext.Map', {
            mapOptions : {
                center : new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
                zoom : 12
                
               }
			});
					
		var mapPanel = Ext.create('Ext.Panel', {
            
            layout: 'fit',
			width :500,
			height : 500,
            style: 'background:red'
        });
		//open layers map
		/*var mapOl = new ol.Map({
			layers: [
				new ol.layer.TileLayer({
					source: new ol.source.OSM()
				})
			],
			//renderers: ol.RendererHints.createFromQueryData(),
			target: mapPanel.getEl(),
			view: new ol.View2D({
					center: [0, 0],
					zoom: 2
					})
		});	*/	
        // Initialize the main view
		 Ext.create('geoportal.view.Main');
		//temp.innerItems[0].add (mapGoogle);
		//temp.innerItems[0].add (mapPanel);
		//Ext.Viewport.add(temp);
		
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

