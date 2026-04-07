// Loader animation logic (moved from index.html)
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
    const loader = document.querySelector(".page-loader");
    const loaderImg = document.querySelector(".loader-img");
    const logo = document.querySelector(".header .logo");

    const isMobile = window.matchMedia("(max-width: 989px)").matches;
    const isAtTop = window.scrollY < 10;

    setTimeout(() => {
      // 📱 MOBILE → завжди летимо в логотип
      if (isMobile && logo) {
        animateToLogo(true);
        return;
      }
      // 💻 DESKTOP
      if (!isMobile && isAtTop && logo) {
        animateToLogo(false);
      } else {
        loaderImg.style.transform = `scale(0.35)`;
      }
    }, 2000);

    function animateToLogo(isMobileVersion) {
      const logoRect = logo.getBoundingClientRect();
      const imgRect = loaderImg.getBoundingClientRect();
      const logoCenterX = logoRect.left + logoRect.width / 2;
      const logoCenterY = logoRect.top + logoRect.height / 2;
      const imgCenterX = imgRect.left + imgRect.width / 2;
      const imgCenterY = imgRect.top + imgRect.height / 2;
      const deltaX = logoCenterX - imgCenterX;
      const deltaY = logoCenterY - imgCenterY;
      let scale;
      if (isMobileVersion) {
        // 🔥 Динамічний scale під реальний розмір лого (90x60)
        const scaleX = logoRect.width / imgRect.width;
        const scaleY = logoRect.height / imgRect.height;
        // Беремо менше значення щоб точно влізло
        scale = Math.min(scaleX, scaleY);
      } else {
        scale = 0.35; // десктоп
      }
      loaderImg.style.transform =
        `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
    }

    setTimeout(() => {
      loader.classList.add("hide");
     
      AOS.init({
        duration: 600,
        once: true, // щоб не повторювалось
        offset: 100,
        easing: 'ease-out-cubic',
      });
    }, 2400);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger menu toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const headerRight = document.getElementById('headerRight');
  
  hamburgerBtn.addEventListener('click', () => {
      headerRight.classList.toggle('active');
      hamburgerBtn.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  const headerLinks = headerRight.querySelectorAll('a');
  headerLinks.forEach(link => {
      link.addEventListener('click', () => {
          headerRight.classList.remove('active');
          hamburgerBtn.classList.remove('active');
      });
  });
});

// Modal logic for .section-about .grid .item
document.addEventListener('DOMContentLoaded', () => {
    const aboutItems = document.querySelectorAll('.section-about .grid .item');
    const modalContent = document.querySelectorAll('.section-about .modal-content');
    const modal = document.getElementById('aboutModal');
    if (!modal) return;
    const modalClose = modal.querySelector('.modal-close');

    function openModal(contentElem) {
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        contentElem.classList.remove('hidden');
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        modalContent.forEach(elem => elem.classList.add('hidden'));
    }

    aboutItems.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            if (target) {
              const contentElem = document.querySelector(target);
              openModal(contentElem);
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    modalClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});



document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("certificateModal");
  const modalImg = modal.querySelector(".modal-image");
  const closeBtn = modal.querySelector(".modal-close");

  document.querySelectorAll(".certificate-img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.dataset.full;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let sliderCert;

  if ( document.querySelector('.slider--cert') ) {
    /*   *-*************************************************************/
    sliderCert = new Swiper('.slider--cert', {
      spaceBetween: 0,
      slidesPerView: 'auto',
      // centeredSlides: false,
      // loop: false,
      // initialSlide: 0,
      grabCursor: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      lazy: {
        loadPrevNext: true, // підвантажує сусідні слайди
      },

      watchSlidesProgress: true, // ОБОВ’ЯЗКОВО для lazy
      // pagination: {
      //   type: "bullets",
      //   // type: "progressbar",
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      // breakpoints: {
      //   750: {
      //     spaceBetween: 0,
      //     centeredSlides: false,
      //     initialSlide: 0,
      //   },
      //   990: {
      //     spaceBetween: 0,
      //     centeredSlides: false,
      //   },
      // },
    });
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   AOS.init({
//     duration: 600,
//     once: true, // щоб не повторювалось
//     offset: 100,
//     easing: 'ease-out-cubic',
//   });
// });
