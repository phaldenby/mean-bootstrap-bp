var frontEndApp = angular.module('FrontEnd');

frontEndApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'page_templates/home.html',
            controller: 'homeController'
        });
});
