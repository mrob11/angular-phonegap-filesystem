'use strict';

angular.module('mike360.phonegap.filesystem',
  ['btford.phonegap.ready'])
  .factory('filesystem', function ($rootScope, $window, phonegapReady) {
    return {
      requestFileSystem: phonegapReady(function(onSuccess, onError){
        $window.requestFileSystem(
          LocalFileSystem.PERSISTENT, 0,
          function () {
            var that = this,
              args = arguments;

            if (onSuccess) {
              $rootScope.$apply(function() {
                onSuccess.apply(that, args);
              });
            }
          },
          function () {
            var that = this,
              args = arguments;

            if (onError) {
              $rootScope.$apply(function () {
                onError.apply(that, args);
              });
            }
          }
        );
      })
    };
  });
