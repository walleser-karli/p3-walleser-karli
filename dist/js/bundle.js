(()=>{"use strict";const e=new class{constructor(e,t){this.pageTitle=e,this.pageLogoSrc=t}}("Karli's Lunch Generator","Logo"),t=new class{constructor(e,t){this.copyrightYear=e,this.siteAuthor=t}}("© 2021","Karli Walleser"),s=new class{constructor(e){this.lunchItem=e,this.randomizeLunches(),this.showResults()}randomizeLunches(){}showResults(){this.randomizeLunches()}};new class{constructor(){this.renderTemplate(),s.showResults()}renderTemplate(){const s=`\n         <h1>${e.pageTitle,e.pageLogoSrc}</h1>\n         <p id="meal-result"></p>\n         <button id="click-here">Click Here</button>\n         <footer>${t.copyrightYear,t.siteAuthor}</footer>\n      \n      `;document.body.innerHTML=s}}})();