import * as $ from 'jquery';

const TIMELINE_BLOCKS = $('.timeline .position-block');
const ICON_ROWS = $('.skills .icon-row');
const PORTFOLIO_ROWS = $('.portfolio .portfolio-row');
const SECTION_HEADERS = $('.section-header');
const CONTENT_TRANSITION = $('.content-transition');
const OFFSET = 0.8;
const HIDDEN_CLASS = '-hidden';

// eslint-disable-next-line max-len
const isElementScrolledPast = (element: HTMLElement, offset: number): boolean => $(element).offset().top <= $(window).scrollTop() + $(window).height() * offset;

const showSkills = () => {
  ICON_ROWS.each((i: number, element: HTMLElement) => {
    if (
      isElementScrolledPast(element, OFFSET)
      && $(element).hasClass(HIDDEN_CLASS)
    ) {
      $(element).prev().removeClass(HIDDEN_CLASS);
      $(element).removeClass(HIDDEN_CLASS);
      $('.skill', element).each((index: number, skillElement: HTMLElement) => {
        $(skillElement)
          .css('transition-delay', `${index * 180}ms`)
          .addClass('-flip');
      });
    }
  });
};

const showBlocks = () => {
  TIMELINE_BLOCKS.each((index: number, element: HTMLElement) => {
    if (
      isElementScrolledPast(element, OFFSET)
      && $(element).find('.position-logo').hasClass(HIDDEN_CLASS)
    ) {
      $(element)
        .find('.position-logo, .position-details')
        .removeClass(HIDDEN_CLASS)
        .addClass('-bounce-in');
    }
  });
};

const showPortfolio = () => {
  PORTFOLIO_ROWS.each((index: number, element: HTMLElement) => {
    if (
      isElementScrolledPast(element, OFFSET)
      && $(element).hasClass(HIDDEN_CLASS)
    ) {
      $(element).removeClass(HIDDEN_CLASS);
      $(element).addClass('-animate');
    }
  });
};

const showContent = (elements: JQuery<HTMLElement>) => {
  elements.each((index: number, element: HTMLElement) => {
    if (
      isElementScrolledPast(element, OFFSET)
      && $(element).hasClass(HIDDEN_CLASS)
    ) {
      $(element).removeClass(HIDDEN_CLASS);
    }
  });
};

const setupPageContent = (): void => {
  const checkPageContent = !window.requestAnimationFrame
    ? () => {
      setTimeout(() => {
        showBlocks();
        showSkills();
        showPortfolio();
        showContent(SECTION_HEADERS);
        showContent(CONTENT_TRANSITION);
      }, 100);
    }
    : () => {
      window.requestAnimationFrame(() => {
        showBlocks();
        showSkills();
        showPortfolio();
        showContent(SECTION_HEADERS);
        showContent(CONTENT_TRANSITION);
      });
    };
  $(window).on('scroll', checkPageContent);
};

export default setupPageContent;
