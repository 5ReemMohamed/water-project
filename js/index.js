document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  const fields = [
    { element: name, regex: /^[\u0600-\u06FFa-zA-Z\s]{3,}$/, emptyMsg: "الاسم لا يجب أن يكون فارغًا", invalidMsg: "الاسم يجب أن يحتوي على أحرف فقط" },
    { element: email, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, emptyMsg: "البريد الإلكتروني مطلوب", invalidMsg: "الرجاء إدخال بريد إلكتروني صالح" },
    { element: phone, regex: /^(\+?\d{9,15})$/, emptyMsg: "رقم الهاتف مطلوب", invalidMsg: "الرجاء إدخال رقم هاتف صالح" },
    { element: message, regex: /.+/, emptyMsg: "الرجاء كتابة رسالتك", invalidMsg: "" }
  ];

  function validateField(field) {
    const value = field.element.value.trim();
    const errorElement = field.element.nextElementSibling;

    if (value === "") {
      errorElement.textContent = field.emptyMsg;
      return false;
    } else if (!field.regex.test(value)) {
      errorElement.textContent = field.invalidMsg;
      return false;
    } else {
      errorElement.textContent = "";
      return true;
    }
  }

  fields.forEach(field => {
    field.element.addEventListener("input", () => validateField(field));
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    fields.forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (isValid) {
      const phoneNumber = "966564385106";
      const text =
        `الاسم: ${name.value}%0A` +
        `البريد: ${email.value}%0A` +
        `الجوال: ${phone.value}%0A` +
        `الرسالة: ${message.value}`;

      window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");

      Swal.fire({
        title: "تم الإرسال!",
        text: "تم إرسال رسالتك بنجاح عبر الواتساب.",
        icon: "success",
        confirmButtonText: "حسناً"
      }).then(() => {
        form.reset();
      });
    }
  });

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
});
