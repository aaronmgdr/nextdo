// Create reference to Firebase database
var firebase = new Firebase('https://todonkey.firebaseio.com/');

$('#task').keypress(function (e){
  var input = $('#task').val();

  if(jQuery.trim(input).length > 0 && e.keyCode == 13){

    var item = $('#task').val();
    console.log(item);

    var newListObject = {"name": item, "complete": false};

    firebase.push(newListObject);

  $('#task').val('');
  } 
});

// Update firebase on change
firebase.on('child_added', function(snapshot){
  var message = snapshot.val();
  displayNewTask(message.name, message.complete);
});

// Display a task
var displayNewTask = function (name, complete){
  //$('#todo-list').prependTo()
  $('<div/>').text(name).prependTo($('#todo-list'));
};