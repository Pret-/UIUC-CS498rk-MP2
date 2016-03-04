// Write any custom javascript functions here

var sections = document.getElementsByTagName('section');
var menuLinks = document.getElementsByClassName('scroll');
var body = document.getElementsByTagName("body")[0];

$('.title-bar').on('sticky.zf.stuckto:top', function(){
    $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
    $(this).removeClass('shrink');
});

// Smooth scrolling to a section when clicking the menu links.
function smoothScrolling() {
    $(".scroll").click(function(event){
        event.preventDefault(); //Prevent the default event of instant scroll

        var dest = $(this.hash).offset().top;
        $('html,body').animate({scrollTop:dest}, 800);
    });
}

// Indicates the position in the document by focusing the menu link.
function positionIndicator() {
    var top = $('#navbar').offset().top;
    var bottom = top + $('#navbar').height();
    var section = null;

    for( var i = 0; i < sections.length; i++ ) {
        if( bottom >= $('#' + sections[i].id).offset().top ) {
            section = sections[i];
        }
    }

    if( section == null ) {
        section = body;
    }

    for( var i = 0; i < menuLinks.length; i++ ) {
        if( menuLinks[i].name == section.id ) {
            menuLinks[i].focus();
        }
    }
}

// Run when the document is ready.
$(function() {

    smoothScrolling();

    $('.carousel').slick({
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '125px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        dots: true
    });
});

// Run when the user is scrolling.
$( document ).scroll( function() {
    positionIndicator();
});