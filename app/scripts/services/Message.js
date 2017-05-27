


(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomId) {


        //___BEGIN____The roomId is not being passed in to equalTo()

        var array = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));

        //____END  


        /*___BEGIN____if roomId is hardcoded, it works!    -->          equalTo(1)

        EXAMPLE:  var array = $firebaseArray(ref.orderByChild("roomId").equalTo(1));

        //___END____*/

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

