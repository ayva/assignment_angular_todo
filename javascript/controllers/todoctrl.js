app.controller('TodoCtrl', ['$scope', '$window', function($scope, $window){
  
  $scope.item = { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false };

  $scope.items = [{text: "Get Groceries from the store", dueDate: "Sep 7, 2016", completed: false},{text: "Get Groceries from the store", dueDate: "Sep 7, 2016", completed: false}];
  $scope.createTodo = function(){
    $scope.items.push({text: $scope.taskText, dueDate: $scope.taskDate, completed: false});
    $scope.taskText="";
    $scope.dueDate=undefined;
    $window.alert("Task created");
  };
}
]);