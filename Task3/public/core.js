var nodeTodo = angular.module("nodeTodo", []);

function mainController($scope, $http) {
  $scope.formData = {};

  $scope.webName = "My todo list";
  $scope.filter = "none";

  // when landing on the page, get all todos and show them
  $http
    .get("/api/todos")
    .success(function(data) {
      for (todo in data){
        console.log(data[todo]._id);
        console.log(data[todo].done);
      }
      $scope.todos = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http
      .post("/api/todos", $scope.formData)
      .success(function(data) {
        $("input").val("");
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };

  // update a todo after checking it
  $scope.updateTodo = function(id) {
    for (index in $scope.todos){
      if ($scope.todos[index]._id == id){
        isDone = $scope.todos[index].done;
        break;
      }
    }

    $http
      .put("/api/todos/" + id, {done: isDone})
      .success(function(data){
        //NOP
      })
      .error(function(data){
        console.log("Update error: " + data);
      });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
    $http
      .delete("/api/todos/" + id)
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };

  //get filtered list of todos
  $scope.getEntries = function() {
    result = [];
    if ($scope.filter == 'none')
      return $scope.todos;
    for (index in $scope.todos){
      todo = $scope.todos[index];
      if (todo.done == true && $scope.filter == 'done')
        result.push(todo);
      if (todo.done == false && $scope.filter == 'todo')
        result.push(todo);
    }
    return result;
  }
}
