Ext.define('Chat.view.Main', {
    extend: 'Ext.navigation.View',

    xtype: 'main',

    requires: [
        'Ext.TitleBar',
        'Chat.view.Login',
        'Chat.view.ChatView'
    ],

    config: {
        layout: {
            type: 'card',
            align: 'center',
            pack: 'center'
        },
        items: [{
            xtype: 'login'
        }]
    }
});