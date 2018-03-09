/**
 * Proyecto: Calculadora WEB
 * Modulo: JavaScript
 * Alumno: Felipe Montoya R <femonres@gmail.com>
 */

var calculadora = (function () {

    var keyCodes = { 48 : "0", 49 : "1", 50 : "2", 51 : "3", 52 : "4", 53 : "5", 54 : "6", 55 : "7", 56 : "8", 57 : "9",
        96 : "0", 97 : "1", 98 : "2", 99 : "3", 100 : "4", 101 : "5", 102 : "6", 103 : "7", 104 : "8", 105 : "9",
        106 : "por", 107 : "mas", 109 : "menos", 110 : "punto", 111 : "dividido", 187 : "igual" };

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
			console.log("La tecla presionada fue: ", event.key);
			showInDisplayKey(key);
        }
	}

    var sendKeyOnClic = function (event) {
		console.log("La tecla presionada fue: ", event.target.id);
		showInDisplayKey(event.target.id);
	}
	
	var showInDisplayKey = function (key) {
		document.querySelector(".pantalla #display").innerHTML = key
	}

    var setListeners = function () {
        document.onkeyup = resetKeySize;
        document.onkeydown = reduceKeySize;
		document.onkeypress = sendKeyPress;

		for (const keyItem in keyCodes) {
			if (keyCodes.hasOwnProperty(keyItem)) {
				document.getElementById(keyCodes[keyItem]).addEventListener("click", sendKeyOnClic);
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