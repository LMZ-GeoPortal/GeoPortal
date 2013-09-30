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
								name : 'name',
								label: 'Location'
							},
							{
								id: 'tbx_radius',
								xtype: 'textfield',
								name : 'name',
								label: 'Radius'
							},
							{
								id: 'btn_search',
								xtype: 'button',
								name : 'name',
								text: 'Search'
								
							}
						]
					},
					{
						xtype: 'map',
						useCurrentLocation: false,
						flex: 2
					}
					//html:"hello"}
				]
				/*, 	

               html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")*/
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

    
	