var app = angular.module("VitaminApp", ["ngAnimate"]); // module init


app.controller("VitaminController", function($scope, $http, $window) {

    $scope.vitamins = [];
    $scope.vitaminsOriginal = [];
    $scope.waterSoluable = [];
    $scope.tempFilter = [];
    $scope.fatSoluable = [];
    $scope.randomSamples = [];
    $scope.detailVitamin = {};
    $scope.sortByItem = "";
    $scope.showTable = false;
    $scope.showDetails = true;
    $scope.notLoading = false;

    $http.get("docs/vitamins.json").then(function(response) {

        $scope.vitamins = response.data;
        $scope.vitaminsOriginal = response.data;

        console.log(response.data);
    }, function(response) {
        //Second function handles error
        alert('Data Error: ' + response);
    });


    $scope.sorter = function (name) {

        $scope.sortByItem = name;
        $scope.sortReverse = !$scope.sortReverse;

    };

    $scope.detailPage = function(vitamin) {

        $('#loader2').fadeIn(500).fadeOut(1000);
        console.log(vitamin);
        $scope.detailVitamin = vitamin;

        $window.scrollTo(0, 0);

        if (vitamin.Solubility == "Water")
        {
            $scope.waterSoluable = _.where($scope.vitamins, {Solubility: "Water"});
            console.log("water", $scope.waterSoluable);
        }
        else if (vitamin.Solubility == "Fat")
        {
            $scope.fatSoluable = _.shuffle(_.where($scope.vitamins, {Solubility: "Fat"}));
            console.log("fats", $scope.fatSoluable);
        }

        $scope.randomSamples = _.sample($scope.vitamins, 4);
        console.log("samples", $scope.randomSamples);

        $scope.showTable = true;
        $scope.showDetails = false;
    };

    $scope.showList = function () {
        $scope.showTable = false;
        $scope.showDetails = true;
    };


    $scope.solubility = function (term) {
        if ($scope.fatCheck === true) {
            if (term == "Fat") {
                $scope.vitamins = _.where($scope.vitaminsOriginal, {Solubility: term});
            }
        }
        else if ($scope.waterCheck === true) {
            if (term == "Water") {
                $scope.vitamins = _.where($scope.vitaminsOriginal, {Solubility: term});
            }
        } else {
            $scope.vitamins = $scope.vitaminsOriginal;
        }

    };

});