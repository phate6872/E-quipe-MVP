angular.module('demo', ['ngRoute']).config(function ($routeProvider) { console.log('configuring')
  $routeProvider

    .when('/board', {
      controller: 'BoardPageCtrl', templateUrl: '/app/views/board_page.html'
    });
  })
