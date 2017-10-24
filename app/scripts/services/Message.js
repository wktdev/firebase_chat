(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            var array = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            return array;
        };

        Message.send = function(newMessage,roomId, user) {
            console.log("YES " + roomId );
            messages.$add({ content: newMessage, roomId: roomId, user: user})
        }


        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
