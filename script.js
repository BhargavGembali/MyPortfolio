document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var mediaScroller = document.querySelector('.media-scroller');
    if (mediaScroller) {
        mediaScroller.scrollLeft = (mediaScroller.scrollWidth - mediaScroller.clientWidth) / 2;
    }
});
