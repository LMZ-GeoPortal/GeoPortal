Ext.define('geoportal.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Map'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
				layout : 'hbox',
                styleHtmlContent: true,
                scrollable: true,

                items: [{
			docked: 'top',
			xtype: 'titlebar',
			title: 'Welcome to Geo Portal'
			},
			{
			xtype: 'panel',
			docked: 'left',
			html: 'Legend goes here',
			flex: 1,
			items:[
			       {
				id: 'tbx_start',
				xtype: 'textfield',
				label: 'Location'
				},
				
				{
				id: 'chk_gmap',
				xtype: 'checkboxfield',
				label: 'Google Map',
				checked: true,
				labelWidth:'70%',
				listeners:{
					check: function(){
						Ext.getCmp('chk_olmap').uncheck();
						mapOl.getLayers().a[0].setVisible(false);
						}
					}
				},
				{
				id: 'chk_olmap',
				xtype: 'checkboxfield',
				label: 'Open Street Map',
				checked: false,
				labelWidth:'70%',
				listeners:{
					check: function(){
						Ext.getCmp('chk_gmap').uncheck();
						mapOl.getLayers().a[0].setVisible(true);
						},
					uncheck: function (){mapOl.getLayers().a[0].setVisible(false);}
					}
				},
				{
				id: 'chk_bingmap',
				xtype: 'checkboxfield',
				label: 'Bing Map',
				checked: false,
				labelWidth:'70%',
				listeners:{
					check: function(){
						Ext.getCmp('chk_gmap').uncheck();
						mapOl.getLayers().a[1].setVisible(true);
						},
					uncheck: function (){mapOl.getLayers().a[1].setVisible(false);}
					}
				   }
				},
			{
			xtype: 'map',
			id: 'mapPanel',
			useCurrentLocation: false,
			flex: 2
			}
					
			]
			
            },
            {
                title: 'Route Search',
                iconCls: 'action',
				layout: 'hbox',
                items: [
                    
                    {
						flex: 1,
                       html: [
                        '<img src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>You're creating the Getting Started app. This demonstrates how ",
                        "to use tabs, lists, and forms to create a simple app</p>",
                        '<h2>Sencha Touch</h2>'
						].join("")
                    },
					{ 
						xtype :'panel',
						id : 'mappanel',
						flex :2,
						html: ['<div id ="olmappanel"></div>'].join("")
					}
			
			]
            }
        ]
    }
});

    
	
