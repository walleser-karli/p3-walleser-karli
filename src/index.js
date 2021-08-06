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
            <div>
               <img src="${header.pageLogoSrc}">
               <h1>${header.pageTitle}</h1>
            </div>
         </header>
         <main>
            <h3>Feelin' hungry? Can't decide what to eat? Let Chef Karli and her world-renowned <span>Lunchinator</span> fix your lunchtime blues.</h3>
            <div>
               <p id="meal-result"></p>
               <button id="click-here">Click Here</button>
               <figure>
                  <img src="./img/chef.png" alt="female chef smiling and holding two plates of food">
               </figure>
            </div>
         </main>
         <footer>${footer.copyrightYear} ${footer.siteAuthor}</footer>
      
      `;
      document.body.innerHTML = template;
   }
}

new App;