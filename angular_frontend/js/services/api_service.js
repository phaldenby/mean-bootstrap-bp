var frontEndApp = angular.module('FrontEnd');

frontEndApp.service('ApiService', ['$http', '$q', function ($http, $q) {
    var urlBase = 'http://localhost:3003';

    var dataFactory = {};

    dataFactory.postTestData = function (testData) {
        return $http({
            method: 'POST',
            url: urlBase + '/test',
            data: testData
        });
    };

    dataFactory.getTestData = function () {
        return $http({
            method: 'GET',
            url: urlBase + '/test'
        });
    };

    return dataFactory;
}])

;
