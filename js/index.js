document.addEventListener("DOMContentLoaded", () => {


  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");



 

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled-nav");
    } else {
      navbar.classList.remove("scrolled-nav");
    }
  });

 
  navbarToggler.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
  });


  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
        navbar.classList.remove("nav-open");
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      navbarCollapse.classList.remove("show");
      navbar.classList.remove("nav-open");
      if (window.scrollY === 0) {
        navbar.classList.remove("scrolled-nav");
      }
    }
  });
   AOS.init({
    duration: 1200, 
    once: false    
  });
    var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    rtl: true,
    autoplay: {
      delay: 2000, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

    const galleryVideo = document.querySelector('.gallery-video');
  const modalVideo = document.getElementById('modalVideo');
  const videoModal = document.getElementById('videoModal');

  videoModal.addEventListener('show.bs.modal', function () {
    modalVideo.src = galleryVideo.src; 
    modalVideo.play();
  });

  videoModal.addEventListener('hide.bs.modal', function () {
    modalVideo.pause();
    modalVideo.src = ""; 
  });

    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "flex";
      } else {
        scrollTopBtn.style.display = "none";
      }
    };

    scrollTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
    const ratingValue = 4.8; // Change this number
    const starContainer = document.getElementById("stars");

    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      starContainer.innerHTML += '<i class="fa-solid fa-star"></i>';
    }

    if (hasHalfStar) {
      starContainer.innerHTML += '<i class="fa-regular fa-star-half-stroke"></i>';
    }

    const totalStars = fullStars + (hasHalfStar ? 1 : 0);
    for (let i = totalStars; i < 5; i++) {
      starContainer.innerHTML += '<i class="fa-regular fa-star"></i>';
    }
});
