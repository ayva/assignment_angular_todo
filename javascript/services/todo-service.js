app.factory('todoService', function(){

  var obj = {};

  _items = [{text: "Get Groceries from the store", dueDate: "Sep 7, 2016", completed: false},{text: "Get Groceries from the store", dueDate: "Sep 7, 2016", completed: false}];

  // _item = {
  //   text: "Get groceries from the store",
  //   dueDate: new Date(),
  //   completed: false
  // };

  obj.setItems = function(items){
    _items = items
  }

  obj.getItems = function(){
    return _items
  }

  obj.addItem = function(item){
    _items.push(item);
    return _items
  }

  obj.createTodo = function(items, item){
    _items.push(item);
  };

  obj.deleteTodo = function(index){
    _items.splice(index, 1)
  }

  return obj;

})