(function() {
    function MainCtrl(Room, Message, $uibModal) {
        var main = this;
        main.chatRoomArray = Room.all;

    

        main.openNewRoomModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/new_room_modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };

        main.currentRoomId = undefined;

        main.setCurrentRoom = function(room) {
            main.messageArray = Message.getByRoomId(room.$id);
            console.log(room.$id);
            main.currentRoomId = room.$id;

        };



    
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);

})();
