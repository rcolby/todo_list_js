$(document).ready(function() {
  $('#submitEntry').on('click', function(event) {
    event.preventDefault();
    var item = $('#task').val();
    var li = $('<li><img src="trash.png" alt="Delete Item" class="delete">' + item + '</li>');
    if(item !== '') {
      li.appendTo($('#todo'));
      $('#task').val('');
    }
    li.on('click', function(){
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