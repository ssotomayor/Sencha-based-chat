Ext.define('Chat.controller.ChatView', {
    extend: 'Ext.app.Controller',

    requires: [
    ],

    config: {
        socket: null,
        config: null,
        scroller: null,
        maxPosition: 0,

        models: [
            'Config',
            'Message'
        ],

        stores: [
            'Config',
            'Messages'
        ],

        views: [
            'ChatView'
        ],

        refs: {
            'message': 'input[name=message]'
        },

        control: {
            'messagelist': {
                initialize: function (list) {
                    var me = this,
                        scroller = list.getScrollable().getScroller();

                    scroller.on('maxpositionchange', function (scroller, maxPos, opts) {
                        me.setMaxPosition(maxPos.y);
                    });

                    me.setScroller(scroller);
                }
            },

            'textfield#message': {
                action: 'sendMessage'
            },

            'button#send': {
                tap: 'sendMessage'
            }
        }
    },

    initSocketConnection: function () {
        var thiz = this,
            config = Ext.getStore('Config').getAt(0);

        Ext.getStore('Messages').removeAll();
        thiz.setConfig(config);

        if (!thiz.getSocket()) {
            var socket = io.connect(config.get('server'));
            thiz.setSocket(socket);
            socket.on('connection', Ext.Function.bind(thiz.registerUser, thiz));
            socket.on('msg', Ext.Function.bind(thiz.addMessage, thiz));
        } else {
            thiz.registerUser();
        }
    },

    prepareMessage: function () {
        return {
            nickname: this.getConfig().get('nickname'),
            message: this.getMessage().getValue()
        }
    },

    registerUser: function () {
        this.getSocket().emit('register', {
            nickname: this.getConfig().get('nickname')
        });
    },

    sendMessage: function () {
        var message = this.prepareMessage();
        this.getSocket().emit('msg', message);
        this.addMessage(Ext.apply({local: true}, message));
    },

    addMessage: function (message) {
        Ext.getStore('Messages').add(message);

        if (this.getMaxPosition()) {
            this.getScroller().scrollToEnd(true);
        }
    }

});