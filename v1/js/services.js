angular.module('app.services', [])

.service('Transactions', ['$q', '$http', function($q, $http){
   
    var api_url = 'https://www.execsecure.com/console/controllers/holiday.cfc';
    var getUseritems = api_url + '?method=getUseritems';
    var addTransaction = api_url + '?method=addTransaction';
    var singleUser = api_url + '?method=singleUser';
    var singleTransaction = api_url + '?method=singleTransaction';
    
    var ret = {
        all: function(){
            var deferred = $q.defer();
            
            $http.get(getUseritems).then(function(resp){
                deferred.resolve(resp.data);
            });
            
            return deferred.promise;
        },
        add: function(data){
            var deferred = $q.defer();
            
            $http.post(addTransaction, data).then(function(resp){
                deferred.resolve(resp.data);
            });
            
            return deferred.promise;
        },
        singleUser: function(data){
            var deferred = $q.defer();
            
            $http.post(singleUser, data).then(function(resp){
                deferred.resolve(resp.data);
            });
            
            return deferred.promise;
        },
        singleTransaction: function(data){
            var deferred = $q.defer();
            
            $http.post(singleTransaction, data).then(function(resp){
                deferred.resolve(resp.data);
            });
            
            return deferred.promise;
        }
    };
    
    return ret;
    
}]);