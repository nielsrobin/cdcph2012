
var chat = $.connection.ChatHub;

chat.addMessage = function (user, message) {
    $("#chat").append("<p><b>" + user + "</b>: " + message + "</p>");
}

$("#post").click(function () {
    chat.distribute($("#user").val(), $("#msg").val());
});

$.connection.hub.start();