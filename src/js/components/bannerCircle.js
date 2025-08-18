import { gsap, ScrollTrigger } from 'gsap/all';

function bannerCircle() {
  gsap.registerPlugin(ScrollTrigger);

  const btns = document.querySelectorAll('.banner__link');
  btns.forEach((btn) => {
    const rotateText = btn.querySelector('.banner__svg-rotate');
    btn.addEventListener('mouseenter', function () {
      gsap.to(rotateText, {
        rotation: '+=360',
        duration: 12,
        ease: 'linear',
        repeat: -1
      });
    });

    btn.addEventListener('mouseleave', function () {
      gsap.to(rotateText, {
        rotation: gsap.getProperty(rotateText, 'rotation'),
        duration: 0,
        overwrite: true
      });
    });
  });

  function setDataAttrModal() {
    if (window.innerWidth < 768) {
      btns.forEach((btn) => {
        btn.dataset.popup = btn.parentElement.classList.contains('banner__best-btn-box--reestr') ? '#popup__reestr' : '#popup__best';
      });
    } else {
      btns.forEach((btn) => {
        btn.dataset.popup = '';
      });
    }
  }
  setDataAttrModal();
  window.addEventListener('resize', () => {
    setDataAttrModal();
  });
}

export default bannerCircle;
