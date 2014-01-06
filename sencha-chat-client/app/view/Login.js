Ext.define('Chat.view.Login', {
    extend: 'Ext.form.Panel',

    xtype: 'login',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Email'
    ],

    config: {
        title: 'Login',
        layout: {
            type: 'vbox'
        },
        disableSelection: true,
        items: [
            {
                xtype: 'fieldset',
                title: 'User',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'nickname',
                        label: 'Nickname'
                    },
                    {
                        xtype: 'textfield',
                        name: 'server',
                        label: 'Server',
                        value: 'http://localhost:8080' // ho ho ho, this is hardcoded
                    }
                ]
            },
            {
                items: {
                    xtype: 'button',
                    centered: true,
                    ui: 'confirm',
                    text: 'Connect',
                    itemId: 'connectbtn',
                    width: '30%'
                }
            }
        ]
    }
});