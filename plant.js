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
    stage.enableMouseOver(); // Default, checks the mouse 20 times/second for hovering cursor changes

    setupManifest(); // preloadJS
    startPreload();

    stage.update();
}
/*
 * Main update loop.
 */


function update(event) {
    if (gameStarted) {}

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

    //    stage.addChild(willow);
    stage.addChild(warning);
    okButton.x = okButtonPressed.x = 350;
    okButton.y = okButtonPressed.y = 550;
    
    if(!clicked){
        stage.addChild(okButton);
    }else if (clicked){
        stage.removeChild(okButton);
        stage.addChild(willow);
    }
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

    stage.addChild(unmuteButton);
}

/*
 * Add listeners to objects.
 */
function initListeners() {

    okButton.on("mouseover", function () {
        stage.addChild(okButtonPressed);
        stage.removeChild(okButton);
        console.log("mouseover");
//        playSound("click");
    });
    okButtonPressed.on("mouseout", function () {
        stage.addChild(okButton);
        stage.removeChild(okButtonPressed);
        console.log("mouseout");
    });
    //once pressed, the fire function will be called 
    okButtonPressed.on("click", ok);
}

function ok() {
    clicked = true;
    stage.removeChild(okButton);
//    stage.removeChild(okButtonPressed);
    stage.removeChild(warning);
    stage.addChild(willow);
}

//////////////////////// PRELOADJS FUNCTIONS

// bitmap variables
var muteButton, unmuteButton;
var willow, white, western, trembling, cascara, black;
var willowIcon, whiteIcon, westernIcon, tremplingIcon, cascaraIcon, blackIcon;
var warning, okButton, okButtonPressed;
/*
 * Add files to be loaded here.
 */
function setupManifest() {
    manifest = [
 
        {
            src: "images/willowIcon.png",
            id: "willowIcon"
        },
        {
            src: "images/whiteIcon.png",
            id: "whiteIcon"
        },
        {
            src: "images/westernIcon.png",
            id: "westernIcon"
        },
        {
            src: "images/cascaraIcon.png",
            id: "cascaraIcon"
        },
        {
            src: "images/tremplingIcon.png",
            id: "tremplingIcon"
        },{
            src: "images/blackIcon.png",
            id: "blackIcon"
        },
        
        
        {
            src: "images/willow.png",
            id: "willow"
        },
        {
            src: "images/white.png",
            id: "white"
        },
        {
            src: "images/western.png",
            id: "western"
        },
        {
            src: "images/trembling.png",
            id: "trembling"
        },
        {
            src: "images/cascara.png",
            id: "cascara"
        },
        {
            src: "images/black.png",
            id: "black"
        },
        {
            src: "images/warning.png",
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
