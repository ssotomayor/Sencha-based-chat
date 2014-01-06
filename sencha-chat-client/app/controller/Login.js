Ext.define('Chat.controller.Login', {
    extend: 'Ext.app.Controller',

    requires: [],

    config: {
        refs: {
            main: 'main',
            loginForm: 'login',
            nicknameField: 'textfield[name=nickname]'
        },

        control: {
            'login': {
                scope: this,

                show: function () {
                    this.getNicknameField().setValue("John Doe");
                }
            },

            'login #connectbtn': {
                tap: 'connectChat'
            }
        }
    },

    connectChat: function () {
        var config = Ext.getStore('Config');

        if (config.getAllCount() === 0) {
            config.add(this.getLoginForm().getValues());
        } else {
            config.getAt(0).setData(this.getLoginForm().getValues());
        }

        this.getMain().push(Ext.create('Chat.view.ChatView'));
        this.getApplication().getController('ChatView').initSocketConnection();
    }
});