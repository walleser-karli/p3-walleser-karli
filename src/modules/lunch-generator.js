class LunchGenerator {
   constructor(lunchItem) {
      this.lunchItem = lunchItem;
   }

   getLunches() {
      const meals = [
         "spaghetti & meatballs",
         "sloppy joes",
         "dinosaur chicken nuggets",
         "macaroni & cheese",
         "tacos",
         "turkey sub",
         "ribs",
         "cheese burger",
         "salad",
         "PB&J sandwich" 
      ]

      return meals;
   }

   showResults() {
      let meals = this.getLunches();
      document.getElementById("click-here").addEventListener("click",
      function randomMeal() {
      for (let i = meals.length -1; i > 0; i--) {
         let j = Math.floor(Math.random() * i)
         let k = meals[i]
         meals[i] = meals[j]
         meals[j] = k
      }
      console.log(randomMeal);
      document.getElementById("meal-result").innerHTML = meals[0];
      }, false
      );
   }
}

export const lunchGen = new LunchGenerator() 