import * as $ from 'jquery';
import Typed from 'typed.js';

let typedText;

const setupLandingImage = (): void => {
  $('body').hide().fadeIn(2000);
  $('.landing').css('height', $(window).height() - 51);
  $('.landing').addClass(`landing-image-${Math.floor(12 * Math.random() + 1)}`);

  const options = {
    strings: ['designs ^600', 'codes ^600', 'tests ^600', 'implements ^1000'],
    backSpeed: 50,
    typeSpeed: 50,
    loop: true,
  };
  typedText = new Typed('.typed-sub-text', options);
};

export default setupLandingImage;
