/**
 * Proyecto: Calculadora WEB
 * Modulo: JavaScript
 * Alumno: Felipe Montoya R <femonres@gmail.com>
 */

var calculadora = (function () {

    var keyCodes = { 48 : "0", 49 : "1", 50 : "2", 51 : "3", 52 : "4", 53 : "5", 54 : "6", 55 : "7", 56 : "8", 57 : "9",
        96 : "0", 97 : "1", 98 : "2", 99 : "3", 100 : "4", 101 : "5", 102 : "6", 103 : "7", 104 : "8", 105 : "9",
        106 : "por", 107 : "mas", 109 : "menos", 110 : ".", 111 : "dividido", 187 : "igual" };

    var reduceKeySize = function (event) {
        var key = event.which || event.keyCode;
        console.log("Reducir tamaño de la tecla", keyCodes[key]);
        
        if (key in keyCodes) {
            document.getElementById(keyCodes[key]).className = "presionada";
        }
    };

    var resetKeySize = function (event) {
        var key = event.which || event.keyCode;
        console.log("Restablecer tamaño de la tecla", keyCodes[key]);

        if (key in keyCodes) {
            document.getElementById(keyCodes[key]).className = "tecla";
        }
    }

    var showKeyPress = function (event) {
        var key = event.which || event.keyCode;
        console.log("La tecla presionada fue: ", String.fromCharCode(key));
    }

    var setListeners = function () {
        document.onkeyup = resetKeySize;
        document.onkeydown = reduceKeySize;
        document.onkeypress = showKeyPress;
    }

    return {
        init: function () {
            console.log("Iniciando App Calculadora .....");

            setListeners();
        }
    };
})();

calculadora.init();