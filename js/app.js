/**
 * Proyecto: Calculadora WEB
 * Modulo: JavaScript
 * Alumno: Felipe Montoya R <femonres@gmail.com>
 */

var calculadora = (function () {

    var keyCodes = { 48 : "0", 49 : "1", 50 : "2", 51 : "3", 52 : "4", 53 : "5", 54 : "6", 55 : "7", 56 : "8", 57 : "9",
        96 : "0", 97 : "1", 98 : "2", 99 : "3", 100 : "4", 101 : "5", 102 : "6", 103 : "7", 104 : "8", 105 : "9",
        106 : "por", 107 : "mas", 109 : "menos", 110 : "punto", 111 : "dividido", 187 : "igual", 13 : "on", 0 : "sign" };

    var reduceKeySize = function (event) {
        var key = event.which || event.keyCode;
        
        if (key in keyCodes) {
            document.getElementById(keyCodes[key]).style = "transform: scale(0.9);";
        }
    };

    var resetKeySize = function (event) {
        var key = event.which || event.keyCode;

        if (key in keyCodes) {
            document.getElementById(keyCodes[key]).style = "transform: scale(1);";
        }
	}
	
	var sendKeyPress = function (event) {
		var key = event.which || event.keyCode;
		
		if (key in keyCodes) {
            //console.log("La tecla presionada fue: ", keyCodes[key]);
            if (/^([0-9])*$/.test(keyCodes[key])) {
                addKeyInDisplay(keyCodes[key]);
            } else if (key == 110) { // Tecla punto
                addSpotInDisplay();
            } else if (key == 13) {// Utilizar la Tecla Intro como ON/C
                clearDisplay();
            }
        }
	}

    var sendKeyOnClic = function (event) {
        //console.log("La tecla de la calculadora seleccionada fue: ", event);
        if (/^([0-9])*$/.test(event.target.id)) {
            addKeyInDisplay(event.target.id);
        } else if (event.target.id == "punto") {
            addSpotInDisplay();
        } else if (event.target.id == "sign") {
            changeSignInDisplay();
        } else if (event.target.id == "on") {
            clearDisplay();
        }
    }
    
	var addKeyInDisplay = function (key) {
        var display = document.querySelector(".pantalla #display");

        if (!(display.innerHTML == "0" && key == "0")) {
            if (display.innerHTML.length < 8) {
                if (display.innerHTML == "0") display.innerHTML = "";
                
                display.innerHTML = (display.innerHTML + key);
            }
        }
    }

    var addSpotInDisplay = function () {
        if (display.innerHTML == "0") {
            display.innerHTML = "0.";
        } else {
            if (!/\./.test(display.innerHTML)) {
                display.innerHTML = (display.innerHTML + ".");
            }
        }
    }

    var changeSignInDisplay = function () {
        if (display.innerHTML != "0") {
            if (/\-/.test(display.innerHTML)) {
                display.innerHTML = display.innerHTML.slice(1);
            } else {
                display.innerHTML = ("-" + display.innerHTML)
            }
        }
    }
    
    var clearDisplay = function () {
        document.querySelector(".pantalla #display").innerHTML = "0";
    }

    var setListeners = function () {
        document.onkeyup = resetKeySize;
        document.onkeydown = reduceKeySize;
        document.onkeypress = sendKeyPress;
        

        document.getElementById("1").addEventListener("mousedown", function() {
            document.getElementById("1").style = "transform: scale(0.9);";
        });
        document.getElementById("1").addEventListener("mouseup", function() {
            document.getElementById("1").style = "transform: scale(1);";
        });

		for (const keyItem in keyCodes) {
			if (keyCodes.hasOwnProperty(keyItem)) {
                document.getElementById(keyCodes[keyItem]).addEventListener("click", sendKeyOnClic);
                document.getElementById(keyCodes[keyItem]).addEventListener("mousedown", function() {
                    document.getElementById(keyCodes[keyItem]).style = "transform: scale(0.9);";
                });
                document.getElementById(keyCodes[keyItem]).addEventListener("mouseup", function() {
                    document.getElementById(keyCodes[keyItem]).style = "transform: scale(1);";
                });
			}
		}
    }

    return {
        init: function () {
            console.log("Iniciando App Calculadora .....");

            setListeners();
        }
    };
})();

calculadora.init();