$(document).ready(init);

function init(){
  $('#go').click(go);
  // $('#boxes').on('click', '.box', increment);
  $('')
}

function go(input){
  var $input = $('#input').val().split(',');
  for (var i = $input.length-1; i >= 0; i--) {
    var curr = $input[i] * $input[i];

    console.log( curr );

    var $div = $('<div>');
    $div.addClass('box');
    $div.text(curr);
    var $left = $('<button id="left" type="button">Left </button>');
    var $right = $('<button id="right" type="button">Right </button>');
    $('#boxes').append($div);
    $div.append('</br> ', $left, $right);
debugger;
    $left.click(function() {
      var $curr = $(this).parent();
      var $prev = $(this).parent().prev();
      console.log($curr);
      console.log($prev);
      // $curr.detach();
      $curr.insertBefore($prev);

    })

    $right.click(function() {
      var $curr = $(this).parent();
      var $next = $(this).parent().next();
      console.log($curr);
      console.log($next);
      // $curr.detach();
      $curr.insertAfter($next);

    })

  }
}



















// function increment(){
//  var text = $(this).text();
//  var curr = text.split('/')[0] * 1;
//  var other = (text.split('/')[1].split('=')[0] * 1) + 1;
//  var sol = curr/other;
//  $(this).text(curr + '/' + other + '=' + sol);
// }
