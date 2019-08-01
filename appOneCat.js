$(function(){
  let counter = 1;
  $('#cat').on('click', function(){
    $('#counter_display').text(`You have clicked on this cute cat ${counter++} times`);
  });
});
