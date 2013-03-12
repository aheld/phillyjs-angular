    function addCtrl($scope){
        $scope.sum = "Unknown, because you have not entered anything!";
        $scope.add = function(){
            $scope.sum = Add($scope.numbers);
        }

        $scope.$watch("numbers", function(newNum){
           if (!newNum) newNum = "";
           var tmp = returnDelimAndNumbers(newNum);
           $scope.sum =  AddSimple(tmp.numbers,tmp.delimeter);
        });

       
    }