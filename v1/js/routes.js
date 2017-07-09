angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.people', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/people.html',
        controller: 'peopleCtrl'
      }
    }
  })

  .state('tabsController.InformationItemName', {
    url: '/page4',
	params: {
		itemkey: ""		
},
    views: {
      'tab4': {
        templateUrl: 'templates/InformationItemName.html',
        controller: 'InformationItemNameCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.information', {
    url: '/page11',
    views: {
      'tab4': {
        templateUrl: 'templates/information.html',
        controller: 'informationCtrl'
      }
    }
  })

  .state('tabsController.details', {
    url: '/page13',
	params: {
		itemkey: ""		
},
    views: {
      'tab4': {
        templateUrl: 'templates/details.html',
        controller: 'detailsCtrl'
      }
    }
  })

  .state('tabsController.addItem', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/addItem.html',
        controller: 'addItemCtrl'
      }
    }
  })

  .state('tabsController.transactions', {
    url: '/page15',
	params: {
		username: "James"		
},
    views: {
      'tab1': {
        templateUrl: 'templates/transactions.html',
        controller: 'transactionsCtrl'
      }
    }
  })

  .state('tabsController.transactionDetails', {
    url: '/page5',
	params: {
		itemId: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/transactionDetails.html',
        controller: 'transactionDetailsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('//page4')


});