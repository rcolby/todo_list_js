$(document).ready(function() {
  $('#submitEntry').on('click', function(event) {
    event.preventDefault();
    var item = $('#task').val();
    var listItem = $('<li><img src="trash.png" alt="Delete Item" class="delete">' + item + '</li>');
    if(item !== '') {
      listItem.appendTo($('#todo'));
      $('#task').val('');
    }
    listItem.on('click', function(){
      var thisItem = $(this);
      thisItem.slideUp('slow', function(){
      });
      thisItem.addClass('completed');
      thisItem.slideDown('slow', function() {
      });
      thisItem.appendTo($('#completed'));
    });

    $('.delete').on('click', function() {
      $(this).parent().remove();
    });
  });
});