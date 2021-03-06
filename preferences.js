(function(){
    var root = this;
    var Preferences = {};

    Preferences.default = function() {
        return {
            playAudio: false,
            animateWhenScrolling: true,
            displayBookmarkToggleNotification: true,
            displayBookmarkNavigateNotification: true,

            zoomToFitExpansion: 20
        };
    };

    Preferences.get = function() {
        return this.default();
    };

    Preferences.show = function() {

        UI.showAlert({
            title: "Bookmarker Preferences",
            description: "Setup global settings and options that are document independent.",
            icon: fs.resolveImageAsset("./icons/preferences.png"),
            fields: {
                playAudio: {
                    label: "Play Sounds:",
                    type: UI.AlertFieldType.Boolean,
                    value: true
                },
                animateWhenScrolling: {
                    label: "Animate while scrolling:",
                    type: UI.AlertFieldType.Boolean,
                    value: true
                },
                displayBookmarkToggleNotification: {
                    label: "Display bookmark toggle notification:",
                    type: UI.AlertFieldType.Boolean,
                    value: true
                },
                displayBookmarkNavigateNotification: {
                    label: "Display bookmark navigation notification:",
                    type: UI.AlertFieldType.Boolean,
                    value: true
                },

                zoomToFitExpansion: {
                    label: "Zoom To Fit expansion:",
                    type: UI.AlertFieldType.String,
                    value: "20"
                }

            },
            buttons: [
                {
                    title: "OK"
                },
                {
                    title: "Cancel"
                }
            ]
        });

    };

    root.Preferences = Preferences;
}).call(this);