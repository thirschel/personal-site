import setupAudioEasterEgg from './audio-easter-egg';
import setupNavbar from './navbar';
import setupLandingImage from './landing-image';
import setupPageContent from './page-content';
import checkBrowser from './browser-check';

checkBrowser();
setupLandingImage();
setupAudioEasterEgg();
setupNavbar();
setupPageContent();
