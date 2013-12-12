var app = angular.module('forbode', []);

app.controller("testController", function($scope, $http) {
	
});


app.directive('pwCheck', function () {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ctrl) {
			scope.$watch(attrs.pwCheck, function (confirmPassword) {
    			var isValid = ctrl.$viewValue === confirmPassword;
    			ctrl.$setValidity('pwmatch', isValid);
            });
		}
	}
});
