//client Testimonial Swiper
document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper-container', {
        slidesPerView: 1, // Adjust this for mobile
        spaceBetween: 20, // Adjust spacing between slides
        autoplay: {
            delay: 3000, // Time between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interactions
        },
        breakpoints: {
            640: { slidesPerView: 1 }, // For smaller screens
            768: { slidesPerView: 2 }, // For medium screens
            1024: { slidesPerView: 2.5 }, // For larger screens
        },
        on: {
            init: function () {
                document.querySelectorAll('.swiper-slide').forEach((slide) => {
                    slide.style.removeProperty("width"); // Removes width immediately
                });
            },
            resize: function () {
                document.querySelectorAll('.swiper-slide').forEach((slide) => {
                    slide.style.removeProperty("width"); // Ensures width stays removed on resize
                });
            }
        }
    });
    // // Wait for Swiper to initialize, then remove inline styles
    // // Wait for Swiper to initialize, then remove only the 'width' inline style
    // setTimeout(() => {
    //     document.querySelectorAll('.swiper-slide').forEach((slide) => {
    //         slide.style.removeProperty("width"); // Removes only width, keeps margin
    //     });
    // }, 100);
});