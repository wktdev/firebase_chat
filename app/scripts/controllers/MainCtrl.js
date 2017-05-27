(function() {
    function MainCtrl(Room, Message, $uibModal) {

        main = this;
        main.chatRoomArray = Room.all;

        main.openNewRoomModal = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/new_room_modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };

        main.setCurrentRoom = function(name, id){
            console.log("get room messages here!");
            main.currentRoomTitle = name;
            console.log("Current room id:" + id);
            main.messageArray = Message.getByRoomId(id);
        }



    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);

})();
