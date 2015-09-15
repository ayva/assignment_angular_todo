app.controller('TodoCtrl', ['$scope', '$window', 'todoService', function($scope, $window, todoService){

  $scope.item = { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false };

  $scope.items = todoService.getItems();

  // todoService.setItems($scope.items);

  $scope.createTodo = function(){
    todoService.createTodo({text: $scope.taskText, dueDate: $scope.taskDate, completed: false});
    $scope.taskText=null;
    $scope.dueDate=null;
    $window.alert("Task created");
  };

  $scope.clearCompleted = function(){
    for (var i=0; i < $scope.items.length; i++){
      if ($scope.items[i].completed){
        $scope.items.splice(i, 1)
      }
    }
  };

  $scope.buttonFilterCompleted = "Hide completed"
  $scope.showCompleted = function(){
    if (!($scope.isCompleted == undefined))
      {$scope.isCompleted = undefined;
      $scope.buttonFilterCompleted = "Hide completed"}
    else
      {$scope.isCompleted = false;
      $scope.buttonFilterCompleted = "Show completed"
      }

  };
  $scope.deleteTodo = function(index){
    todoService.deleteTodo(index);
    // $scope.items.splice(index, 1)
  }
}
]);

app.filter('showUncompleted', function(){
  return function(collection, isCompleted){

    if (isCompleted == undefined) {return collection}
    var results=[];

    angular.forEach(collection, function(element){
      if (element.completed == false) {
        results.push(element);
      }
    })

    return results;
  }
})