document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});


const menu_btn= document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');


menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})


document.addEventListener('DOMContentLoaded', function() {
    var mediaScroller = document.querySelector('.media-scroller');
    if (mediaScroller) {
        mediaScroller.scrollLeft = (mediaScroller.scrollWidth - mediaScroller.clientWidth) / 2;
    }
});

function sendMail() {
    var userEmail = document.getElementById("email").value;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "bhargav.gembali2020@gmail.com",
        from_email: userEmail
    })
    .then(function(response) {
        console.log("Email sent successfully", response);
        alert("Email sent successfully!");
    }, function(error) {
        console.error("Email send failed", error);
        alert("Failed to send email!");
    });
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("loader--hidden");

        loader.addEventListener("transitionend", () => {
            loader.parentNode.removeChild(loader);
        });
    }, 1000); // 4 seconds delay (4000 milliseconds)
});

