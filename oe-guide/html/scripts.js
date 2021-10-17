function kapat () {
  $( "#img" ).animate({ "left": "-=655px" }, 500);
  $( "#container" ).animate({ "left": "-=550px" }, 500, function() {
    $('#container').css('display','none');
  });
}

window.addEventListener('message', function(event) {
  if (event.data.action == "open") {
    $('#container').css('display','block');
    $( "#img" ).animate({
      "left": "+=655px"
    }, 500);
    $( "#container" ).animate({ "left": "+=550px" }, 500);
  } else if (event.data.action == "close") {
    kapat();
  }
});




$(function() {
  $('.light-open').click(function(){
    $(this).css('display', 'none');
    $('.dark-open').css('display', 'block');
    $('#mode i').css('color', 'white');

    $('#container').css({
      'background-color': 'rgba(255, 255, 255, 0.400)',
      'border-color': '#BB86FC',
      'box-shadow': '0 0 10px #bb86fc70',
    });

    $('.bar-content').css('color', 'black')
    $('#resimler img').css('box-shadow', '0 0 15px rgba(0, 0, 0, 0.550)');

    $('li').css({'color': 'black','text-shadow': '0 0 1px black'});
    $('h1').css({'color': 'black','text-shadow': '0 0 1px black'});
  });

  $('.dark-open').click(function(){
    $(this).css('display', 'none');
    $('.light-open').css('display', 'block');
    $('#mode i').css('color', 'rgb(34, 34, 34)');

    $('#container').css({
      'background-color': 'rgba(0, 0, 0, 0.507)',
      'border-color': '#BB86FC',
      'box-shadow': '0 0 10px #bb86fc70',
    });

    $('.bar-content').css('color', 'white')
    $('#resimler img').css('box-shadow', '0 0 15px rgba(255, 255, 255, 0.400)');

    $('li').css('color', 'white');
    $('h1').css('color', 'white');
  });




  $('#content2').click(function(){
    $('#guide').css('display', 'none');
    $('#resimler').css('display', 'block');
    $('#content1').removeClass('selected');
    $('#content2').addClass('selected');
    $('#container::-webkit-scrollbar').css('visibility', 'visible');
  });

  $('#content1').click(function(){
    $('#guide').css('display', 'block');
    $('#resimler').css('display', 'none');
    $('#content2').removeClass('selected');
    $('#content1').addClass('selected');
  });


});


document.onkeyup = function (data) {
  if ( data.which == 27 ) { //esc
    kapat();
    $.post('http://oe-guide/exit', JSON.stringify({}));
  }
};
