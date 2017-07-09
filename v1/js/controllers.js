angular.module('app.controllers', [])
  
.controller('shortcutsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('peopleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('InformationItemNameCtrl', ['$scope', 'uiGmapGoogleMapApi', '$stateParams', 'Information', function($scope, uiGmapGoogleMapApi, $stateParams, Information) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
    
    $scope.informationItem = Information.keys[$stateParams.itemkey];
    
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps){
        // Configuration needed to display the road-map with traffic
        // Displaying Ile-de-france (Paris neighbourhood)
        $scope.map = {
            center: {
              latitude: 28.4655,
              longitude: 81.4737
            },
            zoom: 12,
            options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP, // This is an example of a variable that cannot be placed outside of uiGmapGooogleMapApi without forcing of calling the google.map helper outside of the function
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                zoomControl: false
            }, 
            showTraficLayer:true
        };
    });
}])
      
.controller('informationCtrl', ['$scope', '$stateParams', 'Information', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Information) {

    $scope.narrowed_information = Information.list;
    $scope.data = {
        search: ""
    }
    
    $scope.search = function(){
        
        var s = $scope.data.search.toLowerCase();
        
        if(s==''){
            $scope.narrowed.information = Information.list;
            return;
        }
        
        $scope.narrowed_information = Information.list.filter(function(information){
            if (information.name.toLowerCase().indexOf(s) > -1 || information.description.toLowerCase().indexOf(s) > -1 || information.keywords.toLowerCase().indexOf(s) > -1){
                return true;
            } 
            return false;
        })
        
    }

}])
   
.controller('detailsCtrl', ['$scope', '$stateParams', 'Information', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Information) {

    $scope.informationItem = Information.keys[$stateParams.itemkey];

}])
   
.controller('addItemCtrl', ['$scope', '$stateParams', 'Transactions', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Transactions, $ionicPopup) {

   $scope.data = {
       userid: "James",
       title: '',
       description: '',
       price: ''
   };
   
   $scope.submitting = false;
   
   $scope.submit = function(){
       $scope.submitting = true;
      
      $ionicPopup.alert({
               title: 'Thank you!',
               template: 'The transaction has been recorded.'
           });
      
        Transactions.add($scope.data).then(function(){
            $scope.data = {
               userid: "James",
               title: '',
               description: '',
               price: ''
           };
           
           $scope.submitting = false;
           
           $ionicPopup.alert({
               title: 'Thank you!',
               template: 'The transaction has been recorded.'
           });
           
       });
   };
    
}])
   
.controller('transactionsCtrl', ['$scope', '$stateParams', 'Transactions', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Transactions) {
    
    $stateParams.username;
    $scope.transactionArray = [];
    $scope.username = '';
    $scope.budget = '';
    $scope.budgetSpent = '';
    $scope.budgetLeft = '';
    
    $scope.data = {
       username: $stateParams.username
    };
    
    $scope.loadData = function(){
        Transactions.singleUser($scope.data).then(function(userData){
            console.log(userData);
            $scope.transactionArray = userData.TRANSACTIONS; 
            $scope.username = userData.NAME;
            $scope.budget = userData.BUDGET;
            $scope.budgetSpent = userData.BUDGETSPENT;
            $scope.budgetLeft = userData.BUDGETLEFT;
            
        });
    };
    
    $scope.loadData();
    
}])
   
.controller('transactionDetailsCtrl', ['$scope', '$stateParams', 'Transactions', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Transactions) {

    $stateParams.itemId;
    console.log($stateParams.itemId);
    $scope.title = '';
    $scope.itemDescription = '';
    $scope.dateCreated = '';
    $scope.price = '';
    
    $scope.data = {
       itemId: $stateParams.itemId
    };
    
    $scope.loadData = function(){
        Transactions.singleTransaction($scope.data).then(function(itemData){
            console.log(itemData);
            $scope.title = itemData.TITLE;
            $scope.itemDescription = itemData.DESCRIPTION;
            $scope.dateCreated = itemData.DATECREATED;
            $scope.price = itemData.PRICE;
            
        });
    };
    
    $scope.loadData();
    
    
}])
 