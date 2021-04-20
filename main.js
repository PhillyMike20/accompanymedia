var text = 'ACCOMPANY'; 

var textElements = text.split("").map(function(c) {
  return $('<span id="' + c + '">' + c + '</span>');
});

var el = $('#letters');
var delay = 152; 
textElements.forEach(function(e, i) {
  el.append(e);
  e.hide();
  setTimeout(function() {
    e.fadeIn(800)
  }, 100 + i * delay)
  setInterval(function(){document.getElementById('logo').classList.add("m-fadeIn")}, 1600);
  setInterval(function(){document.getElementById('nav-list').classList.add("m-fadeIn")}, 1800);
 
})