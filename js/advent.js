$(function(){
    $('.grid').masonry({
  //options
  itemSelector: '.grid-item',
  columnWidth: 200
});
  });


var vid = document.getElementById("mp3");

  $(function() {
    var newDate = new Date();
    var day = newDate.getDate();
    
    $("#snow").click(function(){
      vid.volume = 1.00;
      var self = $(this);
      var covs = self.find(".cover");
      if (day == 22) {
        $('<div class="all"></div>').appendTo('body');
        $('<script type="text/javascript" src="js/mouseSnow.js"></script>').appendTo('body');
      }
    });
  });


var monthNames = ["January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December" ];
var dayNames = ["Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"];

var newDate = new Date();
newDate.setDate(newDate.getDate() +6);    
$('#date').html(dayNames[newDate.getDay()] + " " + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear());

var day = newDate.getDate();


$(function() {
  $(".grid-item").each(function(){
    var self = $(this);
    var covs = self.find(".cover");
    if (self.attr('id') > day) {
        covs.addClass('locked');
    }
    else {
      covs.addClass('unlocked');
    }
  });
});

$(function() {
  $(".grid-item").each(function(){
    var self = $(this);
    var covs = self.find(".cover");
    if (self.attr('id') == day) {
        covs.addClass("today");
    }
  });
});

$('.9box').click(function(e) {
  $('#lightbox').lightbox_me({
        centered: true,
        showOverly: true,
        overlayCSS: {background: 'black', opacity: 0.9},
        closeEsc: true,
        closeClick: true,
        lightboxSpeed: "medium",
        });
    e.preventDefault();
});


$('.grid-item').hover(function() {
    $(".grid-item").each(function(){
      var self = $(this);
      if (self.attr('id') <= day) {
        $('.grid-item').click(function() {
          $('.unlocked',
           $(this)).stop().animate({left: '-500px'}, 500);
        });
      }
    });
});


var vid = document.getElementById("mp3");
var played = document.getElementById("play");
var paused = document.getElementById("pause");
vid.volume = 0.03;

function pauseVid() {
  vid.pause();
  paused.style.opacity = 0.4;
  played.style.opacity = 1.0;
}
function playVid() {
  vid.play();
  played.style.opacity = 0.4;
  paused.style.opacity = 1.0;
}
