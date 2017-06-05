


(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomId) {
        var array = $firebaseArray(ref.orderByChild("roomId").equalTo(parseInt(roomId)));
        return array;
    };
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

// (function() {
//   function Message($firebaseArray) {
//     var Message = {};
//     var ref = firebase.database().ref().child("messages");
//     var messages = $firebaseArray(ref);

//     Message.getByRoomId = function(roomId) {
//         // Filter the messages by their room ID.
//     };

//     return Message;
//     };
//   }

//   angular
//     .module('blocChat')
//     .factory('Message', ['$firebaseArray', Message]);
// })();
