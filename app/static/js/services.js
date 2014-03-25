'use strict';

angular.module('duinoflask', ['ngResource'])
    .factory('Pins', function($resource) {
        return $resource('/pins', {}, {
            query: {
                method: 'GET',
                params: { }
            }
        });
    });