'use strict';

var controller = require('./_controller');

module.exports = angular.module('Guatuneed.search',[])
				.controller('SearchCtrl',['$rootScope','$scope','API',controller]);