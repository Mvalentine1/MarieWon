console.log('Marie Valentine')
/* jQuery program */
$('document').ready(function(){
    $('.para2').css('border','ridge 5px green')
    /*
    let p2 = document.querySelctor('.para2')
    p2.style.border = 'ridge 5px green'
    */
   $('.a').css({'color':'magenta' ,'padding': '1em 2em', 'background-color':'lightgreen'})



//example 2
$('div > p:odd').css('color', 'red')
$('#pExamples > p.para5').css('font-size','1.3em')
// select next adjacent element
$('p + ul').css('border', 'orange dotted 1em')

  //Example 5
  let p4 = $('.para4')
  p4.prev().css('background-color','pink')
  p4.next().css('background-color', 'grey')
  p4.parent().css('font-family','Arial Black')

  //Example 6
 $('.p_append').append('NEW MESSAGE')
 $('.p_prepend').append('NEW LINE')
 
   // Example 7
 $('<h3> NEW HEADING </h3>').insertAfter('.p_append').css('background-color','lightblue')

  // example 10
  $('#btnProperties').click(function(){
    $('.square').css('background-color','pink')
   })
$('#addClass').click(function(){
    $('.square').addClass('btnColor')

   })
   $('#removeClass').click(function(){
    $('.square').removeClass('btnColor')
   })
   $('#toggleClass').click(function(){
       $('.square').toggleClass('btnColor')
   })

//example 12
function hoverCircle(){
    $('.circle').addClass('btnColor')
    $('.circle').html('<p> Circle was hovered! </p>')
}
function resizeWindow(){
    $('.circle').html('Window was resized!')
} 
function dblClickCircle(){
    $('.circle').html('<p>Double Click!</p>')
}
    $('.circle').hover(hoverCircle)
    $(window).resize(resizeWindow)
    $('.circle').dblclick(dblClickCircle)

})
/* JS code */

