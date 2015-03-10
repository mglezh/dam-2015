$(function () {
    "use strict";

    // Obtener los elementos del DOM
    var enviar = document.getElementById("enviar");
    var status = document.getElementById("status");
    var inputText  = document.getElementById("input"); 
    var content = $("#content");

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');
    // 1. Al abrir la conexión, solicitar el nick.

    socket.addEventListener('open', function(e){ 
        status.innerHTML = "Conected";
        myName = "mglezh";
        socket.send("mglezh");
        inputText.disabled = false;
    }, false);

    socket.addEventListener('close', function(e){ 
        status.innerHTML = "Unconected";
    }, false);

    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author
             + '</span> @ ' 
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }

    socket.addEventListener('message', function(event) {
        var json = JSON.parse(event.data);
        try {
            switch (json.type) {
                case 'color':   
                    myColor = json.data; 
                    status.style.color = myColor;
                    break;
                case 'history': 
                    for (var i = 0; i < json.data.length; i++) {
                        addMessage(
                            json.data[i].author,
                            json.data[i].text,
                            json.data[i].color,
                            new Date(json.data[i].time)
                        );
                    }
                    break;
                case 'message': 
                    addMessage(
                        json.data.author,
                        json.data.text,
                        json.data.color,
                        new Date(json.data.time));
                    break;
            } 
        } catch (ex){
            console.log('Error with JSON message.',  e.data);
        }
    }, false);

    inputText.addEventListener('keypress', function(e){
        if (e.keyCode === 13) {
            console.log(e);
            socket.send(inputText.value);
        }
   }, false);
});