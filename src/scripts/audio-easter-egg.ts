import * as $ from 'jquery';

const activeClass = '-active';
const audio = new Audio();

const stopAudio = (): void => {
  $('.pause-icon').removeClass(activeClass);
  $(audio).animate({ volume: 0 }, 1000, () => {
    audio.pause();
  });
};

const setupAudioEasterEgg = (): void => {
  $('.audio').each((index: number, ele: HTMLElement) => {
    $(ele).click(() => {
      $('.pause-icon').addClass(activeClass);
      $(audio).animate({ volume: 0 }, 1000, () => {
        audio.pause();
        audio.src = `./audio/${$(ele).data('file')}.mp3`;
        audio.play();
        $(audio).animate({ volume: 1 }, 3000);
      });
    });
  });

  $('.pause-icon').click(stopAudio);
  $(audio).on('ended', stopAudio);
};

export default setupAudioEasterEgg;
