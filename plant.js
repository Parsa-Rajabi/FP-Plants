/**
 * BCLearningNetwork.com
 * FT Plants   
 * @author Parsa Rajabi - ParsaRajabiPR@gmail.com
 * Date September 2018
 */



//// VARIABLES ////

var mute = false;
var FPS = 20;
var STAGE_WIDTH, STAGE_HEIGHT;
var gameStarted = false;
var clicked = false;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

/*
 * Initialize the stage and some createJS settings
 */
function init() {
    STAGE_WIDTH = parseInt(document.getElementById("gameCanvas").getAttribute("width"));
    STAGE_HEIGHT = parseInt(document.getElementById("gameCanvas").getAttribute("height"));

    // init state object
    stage = new createjs.Stage("gameCanvas"); // canvas id is gameCanvas
    stage.mouseEventsEnabled = true;
    stage.enableMouseOver(50); // Default, checks the mouse 20 times/second for hovering cursor changes

    setupManifest(); // preloadJS
    startPreload();

    stage.update();
}
/*
 * Main update loop.
 */


function update(event) {
    if (gameStarted) {
            stage.enableMouseOver(50); // Default, checks the mouse 20 times/second for hovering cursor changes

        if (okButton.visible == false) {
            clicked = true;
        }
        initListeners();
    }

    stage.update(event);
}

/*
 * Ends the game.
 */
function endGame() {
    gameStarted = false;
}



/*
 * Place graphics and add them to the stage.
 */
function initGraphics() {

    okButton.x = okButtonPressed.x = 350;
    okButton.y = okButtonPressed.y = 550;

    willowIcon.x = willowIconHover.x = 14.25;
    willowIcon.y = willowIconHover.y = 20;

    whiteIcon.x = whiteIconHover.x = 150;
    whiteIcon.y = whiteIconHover.y = 20;

    westernIcon.x = westernIconHover.x = 295;
    westernIcon.y = westernIconHover.y = 20;

    blackIcon.x = blackIconHover.x = 432;
    blackIcon.y = blackIconHover.y = 20;

    cascaraIcon.x = cascaraIconHover.x = 557;
    cascaraIcon.y = cascaraIconHover.y = 20;

    tremplingIcon.x = tremplingIconHover.x = 700;
    tremplingIcon.y = tremplingIconHover.y = 20;



    stage.addChild(willow);
    stage.addChild(willowIcon, whiteIcon, westernIcon, blackIcon, cascaraIcon, tremplingIcon);

    stage.addChild(warning);
    stage.addChild(okButton);
    initMuteUnMuteButtons();
    initListeners();
    // start the game
    gameStarted = true;
    stage.update();
}


/*
 * Adds the mute and unmute buttons to the stage and defines listeners
 */
function initMuteUnMuteButtons() {
    var hitArea = new createjs.Shape();
    hitArea.graphics.beginFill("#000").drawRect(0, 0, muteButton.image.width, muteButton.image.height);
    muteButton.hitArea = unmuteButton.hitArea = hitArea;

    muteButton.x = unmuteButton.x = 5;
    muteButton.y = unmuteButton.y = 5;

    muteButton.cursor = "pointer";
    unmuteButton.cursor = "pointer";

    muteButton.on("click", toggleMute);
    unmuteButton.on("click", toggleMute);

//    stage.addChild(unmuteButton);
}

/*
 * Add listeners to objects.
 */
function initListeners() {

    okButton.on("mouseover", function () {
        stage.addChild(okButtonPressed);
        stage.removeChild(okButton);

        //        playSound("click");
    });
    okButtonPressed.on("mouseout", function () {
        stage.addChild(okButton);
        stage.removeChild(okButtonPressed);

    });
    //once pressed, the fire function will be called 
    okButtonPressed.on("click", ok);



    willowIcon.on("mouseover", function () {
        if (clicked) {
            stage.addChild(willowIconHover);
            stage.removeChild(willowIcon);
        }
    });
    willowIconHover.on("mouseout", function () {
        stage.addChild(willowIcon);
        stage.removeChild(willowIconHover);

    });
    //once pressed, the fire function will be called 
    willowIconHover.on("click", willowPage);



    whiteIcon.on("mouseover", function () {
        if (clicked) {
            stage.addChild(whiteIconHover);
            stage.removeChild(whiteIcon);
        }

    });
    whiteIconHover.on("mouseout", function () {

        stage.addChild(whiteIcon);
        stage.removeChild(whiteIconHover);

    });
    //once pressed, the fire function will be called 
    whiteIconHover.on("click", whitePage);


    westernIcon.on("mouseover", function () {
        if (clicked) {
            stage.addChild(westernIconHover);
            stage.removeChild(westernIcon);
        }

    });
    westernIconHover.on("mouseout", function () {
        stage.addChild(westernIcon);
        stage.removeChild(westernIconHover);

    });
    //once pressed, the fire function will be called 
    westernIconHover.on("click", westernPage);



    blackIcon.on("mouseover", function () {
        if (clicked) {
            stage.addChild(blackIconHover);
            stage.removeChild(blackIcon);
        }
    });
    blackIconHover.on("mouseout", function () {
        stage.addChild(blackIcon);
        stage.removeChild(blackIconHover);

    });
    //once pressed, the fire function will be called 
    blackIconHover.on("click", blackPage);


    cascaraIcon.on("mouseover", function () {
        if (clicked) {
            stage.addChild(cascaraIconHover);
            stage.removeChild(cascaraIcon);
        }


    });
    cascaraIconHover.on("mouseout", function () {
        stage.addChild(cascaraIcon);
        stage.removeChild(cascaraIconHover);

    });
    //once pressed, the fire function will be called 
    cascaraIconHover.on("click", cascaraPage);

    tremplingIcon.on("mouseover", function () {
        if (clicked) {
            stage.addChild(tremplingIconHover);
            stage.removeChild(tremplingIcon);
        }


    });
    tremplingIconHover.on("mouseout", function () {
        stage.addChild(tremplingIcon);
        stage.removeChild(tremplingIconHover);

    });
    //once pressed, the fire function will be called 
    tremplingIconHover.on("click", tremplingPage);
}

function willowPage() {
    //    stage.removeChild(willow);
    //    stage.removeChild(white);
    //    stage.removeChild(western);
    //    stage.removeChild(trembling);
    //    stage.removeChild(cascara);
    //    stage.removeChild(black);

    //     stage.removeChild(willow);
    stage.removeChild(white);
    stage.removeChild(western);
    stage.removeChild(trembling);
    stage.removeChild(cascara);
    stage.removeChild(black);
    stage.addChild(willow);

    addIcons();
}

function whitePage() {

    stage.removeChild(willow);
    //    stage.removeChild(white);
    stage.removeChild(western);
    stage.removeChild(trembling);
    stage.removeChild(cascara);
    stage.removeChild(black);
    stage.addChild(white);

    addIcons();
}

function westernPage() {
    stage.removeChild(willow);
    stage.removeChild(white);
    //    stage.removeChild(western);
    stage.removeChild(trembling);
    stage.removeChild(cascara);
    stage.removeChild(black);
    stage.addChild(western);

    addIcons();
}

function blackPage() {
    stage.removeChild(willow);
    stage.removeChild(white);
    stage.removeChild(western);
    stage.removeChild(trembling);
    stage.removeChild(cascara);
    //    stage.removeChild(black);
    stage.addChild(black);

    addIcons();
}

function cascaraPage() {
    stage.removeChild(willow);
    stage.removeChild(white);
    stage.removeChild(western);
    stage.removeChild(trembling);
    //    stage.removeChild(cascara);
    stage.removeChild(black);
    stage.addChild(cascara);

    addIcons();
}

function tremplingPage() {
    stage.removeChild(willow);
    stage.removeChild(white);
    stage.removeChild(western);
    //    stage.removeChild(trembling);
    stage.removeChild(cascara);
    stage.removeChild(black);
    stage.addChild(trembling);

    addIcons();
}

function addIcons() {
    stage.addChild(willowIcon, whiteIcon, westernIcon, tremplingIcon, cascaraIcon, blackIcon);
}

function ok() {

    okButton.visible = false;
    okButtonPressed.visible = false;
    warning.visible = false;
}

//////////////////////// PRELOADJS FUNCTIONS

// bitmap variables
var muteButton, unmuteButton;
var willow, white, western, trembling, cascara, black;
var willowIcon, whiteIcon, westernIcon, tremplingIcon, cascaraIcon, blackIcon;
var willowIconHover, whiteIconHover, westernIconHover, tremplingIconHover, cascaraIconHover, blackIconHover;
var warning, okButton, okButtonPressed;
/*
 * Add files to be loaded here.
 */
function setupManifest() {
    manifest = [

        {
            src: "images/icons/willowIcon.png",
            id: "willowIcon"
        },
        {
            src: "images/hover/willowIconHover.png",
            id: "willowIconHover"
        },
        {
            src: "images/icons/whiteIcon.png",
            id: "whiteIcon"
        },
        {
            src: "images/hover/whiteIconHover.png",
            id: "whiteIconHover"
        },
        {
            src: "images/icons/westernIcon.png",
            id: "westernIcon"
        },
        {
            src: "images/hover/westernIconHover.png",
            id: "westernIconHover"
        },
        {
            src: "images/icons/cascaraIcon.png",
            id: "cascaraIcon"
        }, {
            src: "images/hover/cascaraIconHover.png",
            id: "cascaraIconHover"
        },
        {
            src: "images/icons/tremplingIcon.png",
            id: "tremplingIcon"
        }, {
            src: "images/hover/tremplingIconHover.png",
            id: "tremplingIconHover"
        }, {
            src: "images/icons/blackIcon.png",
            id: "blackIcon"
        },
        {
            src: "images/hover/blackIconHover.png",
            id: "blackIconHover"
        },
        {
            src: "images/pages/willow.png",
            id: "willow"
        },
        {
            src: "images/pages/white.png",
            id: "white"
        },
        {
            src: "images/pages/western.png",
            id: "western"
        },
        {
            src: "images/pages/trembling.png",
            id: "trembling"
        },
        {
            src: "images/pages/cascara.png",
            id: "cascara"
        },
        {
            src: "images/pages/black.png",
            id: "black"
        },
        {
            src: "images/pages/warning.png",
            id: "warning"
        },
        {
            src: "images/ok.png",
            id: "okButton"
        },
        {
            src: "images/okPressed.png",
            id: "okButtonPressed"
        },
        {
            src: "images/mute.png",
            id: "mute"
        },
        {
            src: "images/unmute.png",
            id: "unmute"
        }
 	];
}


function startPreload() {
    preload = new createjs.LoadQueue(true);
    preload.installPlugin(createjs.Sound);
    preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);
}

/*
 * Specify how to load each file.
 */
function handleFileLoad(event) {
    console.log("A file has loaded of type: " + event.item.type);
    // create bitmaps of images
    if (event.item.id == "mute") {
        muteButton = new createjs.Bitmap(event.result);
    } else if (event.item.id == "unmute") {
        unmuteButton = new createjs.Bitmap(event.result);
    } else if (event.item.id == "willow") {
        willow = new createjs.Bitmap(event.result);
    } else if (event.item.id == "white") {
        white = new createjs.Bitmap(event.result);
    } else if (event.item.id == "western") {
        western = new createjs.Bitmap(event.result);
    } else if (event.item.id == "trembling") {
        trembling = new createjs.Bitmap(event.result);
    } else if (event.item.id == "cascara") {
        cascara = new createjs.Bitmap(event.result);
    } else if (event.item.id == "black") {
        black = new createjs.Bitmap(event.result);
    } else if (event.item.id == "warning") {
        warning = new createjs.Bitmap(event.result);
    } else if (event.item.id == "okButton") {
        okButton = new createjs.Bitmap(event.result);
    } else if (event.item.id == "okButtonPressed") {
        okButtonPressed = new createjs.Bitmap(event.result);
        //icons
    } else if (event.item.id == "willowIcon") {
        willowIcon = new createjs.Bitmap(event.result);
    } else if (event.item.id == "whiteIcon") {
        whiteIcon = new createjs.Bitmap(event.result);
    } else if (event.item.id == "westernIcon") {
        westernIcon = new createjs.Bitmap(event.result);
    } else if (event.item.id == "tremplingIcon") {
        tremplingIcon = new createjs.Bitmap(event.result);
    } else if (event.item.id == "cascaraIcon") {
        cascaraIcon = new createjs.Bitmap(event.result);
    } else if (event.item.id == "blackIcon") {
        blackIcon = new createjs.Bitmap(event.result);
    }

    //hover 
    else if (event.item.id == "willowIconHover") {
        willowIconHover = new createjs.Bitmap(event.result);
    } else if (event.item.id == "whiteIconHover") {
        whiteIconHover = new createjs.Bitmap(event.result);
    } else if (event.item.id == "westernIconHover") {
        westernIconHover = new createjs.Bitmap(event.result);
    } else if (event.item.id == "tremplingIconHover") {
        tremplingIconHover = new createjs.Bitmap(event.result);
    } else if (event.item.id == "cascaraIconHover") {
        cascaraIconHover = new createjs.Bitmap(event.result);
    } else if (event.item.id == "blackIconHover") {
        blackIconHover = new createjs.Bitmap(event.result);
    }
}

function loadError(evt) {
    console.log("Error!", evt.text);
}

// not currently used as load time is short
function handleFileProgress(event) {

}

/*
 * Displays the start screen.
 */
function loadComplete(event) {
    console.log("Finished Loading Assets");

    // ticker calls update function, set the FPS
    createjs.Ticker.setFPS(FPS);
    createjs.Ticker.addEventListener("tick", update); // call update function

    //    stage.addChild(background);
    stage.update();
    initGraphics();
}

///////////////////////////////////// END PRELOADJS FUNCTIONS
