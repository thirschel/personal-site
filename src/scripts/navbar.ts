import * as $ from 'jquery';

const navbarSelector = 'nav-bar';
const affixClass = '-affix';
const activeClass = '-active';
const dataName = 'sectionname';

const smoothJump = (i: number) => {
  $('body, html').animate({ scrollTop: `${i}px` }, 800);
};

const affix = (selector: string) => {
  const element = document.getElementsByClassName(selector)[0];
  let originalY: number = null;
  window.addEventListener('scroll', () => {
    const rect = element.getBoundingClientRect();
    if (rect.y <= 0 && originalY === null) {
      element.classList.add(affixClass);
      originalY = window.scrollY + rect.y;
    } else if (originalY !== null && window.scrollY <= originalY) {
      element.classList.remove(affixClass);
      originalY = null;
    }
  });
};

const setupNavbar = (): void => {
  affix(navbarSelector);
  $(window).on('scroll', () => {
    const windowScrollPosition = $(window).scrollTop() + $('.nav-bar').outerHeight();
    const windowHeight = $(window).height(); // get the height of the window
    const docuementHeight = $(document).height() - $('.nav-bar').outerHeight();

    $('.nav-link', '.nav-bar').each((index: number, link: HTMLElement) => {
      const divPos = $($(link).data(dataName)).offset().top;
      const divHeight = $($(link).data(dataName)).outerHeight();
      if (
        windowScrollPosition >= divPos
        && windowScrollPosition < divPos + divHeight
      ) {
        $(link).addClass(activeClass);
      } else if (
        windowScrollPosition + windowHeight >= docuementHeight
        && index === $('.nav-link', '.nav-bar').length
      ) {
        $(`.nav-bar .${activeClass}`).removeClass(activeClass);
        $('.nav-bar .nav-link').last().addClass(activeClass);
      } else {
        $(link).removeClass(activeClass);
      }
    });
  });
  $('.nav-link', '.nav-bar').each((index: number, link: HTMLElement) => {
    $(link).click(() => {
      const sectionName = $(link).data(dataName);
      smoothJump($(sectionName).offset().top - $('.nav-bar').outerHeight() + 1);
    });
  });
};

export default setupNavbar;
