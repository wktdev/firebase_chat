(function() {
    function MainCtrl(Room, $uibModal) {
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
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);

})();
