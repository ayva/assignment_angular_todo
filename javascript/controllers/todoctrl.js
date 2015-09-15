app.controller('TodoCtrl', ['$scope', '$window', 'todoService', function($scope, $window, todoService){
  $scope.taskText="";
  $scope.taskDate="";


  $scope.items = [{text: "Get Groceries from the store", dueDate: "Sep 7, 2016", completed: true},{text: "Get Groceries from the store", dueDate: "Sep 6, 2016", completed: false}]
  //todoService.getItems();

  // todoService.setItems($scope.items);

  $scope.createTodo = function(){
    var item = { text: $scope.taskText,
                  dueDate: $scope.taskDate,
                  completed: false };
                  console.log(item);
    $scope.items.push(item)
    $scope.taskText=null;
    $scope.taskDate=null;
    //todoService.createTodo({text: $scope.taskText, dueDate: $scope.taskDate, completed: false});
    //$scope.items=
    //$scope.item = {text: null, dueDate: null, completed: false}
    //$window.alert("Task created");
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