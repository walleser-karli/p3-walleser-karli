class Header {
   constructor(pageTitle, pageLogoSrc) {
      this.pageTitle = pageTitle;
      this.pageLogoSrc = pageLogoSrc;
   }
}

export const header = new Header(
   "Karli's Lunchinator",
    "./img/basket.png"
    );