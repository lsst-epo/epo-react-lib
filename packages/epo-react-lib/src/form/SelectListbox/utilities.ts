export const isSafari = (): boolean => {
  const chromeInAgent = navigator.userAgent.indexOf("Chrome") > -1;
  const safariInAgent = navigator.userAgent.indexOf("Safari") > -1;
  return safariInAgent && !chromeInAgent;
};
