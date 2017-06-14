(function() {
    function MainCtrl(Room, Message, $uibModal) {
        var main = this;
        main.chatRoomArray = Room.all;

        main.openNewRoomModal = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/new_room_modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };

        main.setCurrentRoom = function(room) {
            main.messageArray = Message.getByRoomId(room.$id);
        };


        main.sendMessage = function() {
          var currentTime = "1:00pm";
          console.log(main.message);
          Message.send(main.message);
          main.message = "";
        }
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);

})();
