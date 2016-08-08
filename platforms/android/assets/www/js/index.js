angular.module('app', ['ui.router', 'ngNativeTransitions','angular-gestures'])
.controller('appCtrl', ['$scope', '$nativeTransitions', function($scope, $nativeTransitions){
    var _fn = function(info){
        console.log(info);
    }
    $scope.swipeLeft = function(){
        let options = {
            direction:'left',
            duration:300,
            href:'#right'
        };
        $nativeTransitions.slide(options, _fn, _fn);
    }
    $scope.swipeRight = function(){
        let options = {
            direction:'right',
            duration:300,
            href:'#left'
        };
        $nativeTransitions.slide(options, _fn, _fn);
    }
    $scope.swipeUp = function(){
        let options = {
            direction:'up',
            duration:300,
            href:'#down'
        };
        $nativeTransitions.slide(options, _fn, _fn);
    }
    $scope.swipeDown = function(){
        let options = {
            direction:'down',
            duration:300,
            href:'#up'
        };
        $nativeTransitions.slide(options, _fn, _fn);
    }
    $scope.tap = function(){
        let options = {
            href:'#tap',
            direction:'left',
            duration:300
        };
        $nativeTransitions.flip(options, _fn, _fn);
    }
    $scope.pinchIn = function(){
        let options = {
            href:'#pinch-in',
            duration:300
        };
        $nativeTransitions.fade(options, _fn, _fn);
    }
    $scope.pinchOut = function(){
        let options = {
            href:'#pinch-out',
            duration:300
        };
        $nativeTransitions.fade(options, _fn, _fn);
    }
}])
.controller('childCtrl', ['$scope','$nativeTransitions',function($scope, $nativeTransitions){
    var _fn = function(info){
        console.log(info);
    }
    $scope.lth = function(){
        let options = {
            direction:'left',
            duration:300,
            href:'#home'
        };
        $nativeTransitions.slide(options, _fn, _fn);
    };
    $scope.rth = function(){
        let options = {
            direction:'right',
            duration:300,
            href:'#home'
        };
        $nativeTransitions.slide(options, _fn, _fn);
    };
    $scope.uth = function(){
        let options = {
            direction:'up',
            duration:300,
            href:'#home'
        };
        $nativeTransitions.slide(options, _fn, _fn);
    };
    $scope.dth = function(){
        let options = {
            direction:'down',
            duration:300,
            href:'#home'
        };
        $nativeTransitions.slide(options, _fn, _fn);
    };
    $scope.tth = function(){
        let options = {
            href:'#home',
            direction:'right',
            duration:300
        };
        $nativeTransitions.flip(options, _fn, _fn);
    }
    $scope.pinchtohome = function(){
        let options = {
            href:'#home',
            duration:300
        };
        $nativeTransitions.fade(options, _fn, _fn);
    }
}])
.config(['$stateProvider','$urlRouterProvider','hammerDefaultOptsProvider',function($stateProvider, $urlRouterProvider,hammerDefaultOptsProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl:'templates/home.html',
            controller:'appCtrl'
        }) 
        .state('left', {
            url:'/left',
            templateUrl:'templates/left.html',
            controller:'childCtrl'
        }) 
        .state('right', {
            url:'/right',
            templateUrl:'templates/right.html',
            controller:'childCtrl'
        }) 
        .state('up', {
            url:'/up',
            templateUrl:'templates/up.html',
            controller:'childCtrl'
        }) 
        .state('down', {
            url:'/down',
            templateUrl:'templates/down.html',
            controller:'childCtrl'
        })
        .state('tap', {
            url:'/tap',
            templateUrl:'templates/tap.html',
            controller:'childCtrl'
        })
        .state('pinchIn', {
            url:'/pinch-in',
            templateUrl:'templates/pinchIn.html',
            controller:'childCtrl'
        })
        .state('pinchOut', {
            url:'/pinch-out',
            templateUrl:'templates/pinchOut.html',
            controller:'childCtrl'
        })
    hammerDefaultOptsProvider.set({
        recognizers: [
            [Hammer.Tap, {time: 250, event:'tap'}],
            [Hammer.Tap, {enable: true, event: 'doubletap', taps: 2 }, ['tap']],
            [Hammer.Press, {enable:true}],
            [Hammer.Pan, {enable:true}],
            [Hammer.Pinch, {enable:true}],
            [Hammer.Swipe, {enable:true}]
        ]
    });
}]);