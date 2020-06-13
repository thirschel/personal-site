const checkBrowser = (): void => {
  if (!window.atob) {
    window.location = <any>'http://www.whatbrowser.org/intl/en/';
  }
};

export default checkBrowser;
