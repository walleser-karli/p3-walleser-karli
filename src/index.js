import { header } from "./modules/header";
import { footer } from "./modules/footer";
import { lunchGen } from "./modules/lunch-generator";

class App {
   constructor(){
      this.renderTemplate();
      lunchGen.showResults();
   }

   renderTemplate() { 
      const template = `
         <header>
            <img src="${header.pageLogoSrc}">
            <h1>${header.pageTitle}</h1>
         </header>
         <p id="meal-result"></p>
         <button id="click-here">Click Here</button>
         <footer>${footer.copyrightYear} ${footer.siteAuthor}</footer>
      
      `;
      document.body.innerHTML = template;
   }
}

new App;