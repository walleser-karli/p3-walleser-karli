class LunchGenerator {
   constructor(lunchItem) {
      this.lunchItem = lunchItem;
      this.randomizeLunches();
      this.showResults();
   }

   randomizeLunches() {
      const meal = [
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
   }

   showResults() {
      let random_meal = this.randomizeLunches();
      // document.getElementById("click-here").addEventListener("click",
      // function randomMeal() {
      // for (let i = meal.length -1; i > 0; i--) {
      //    let j = Math.floor(Math.random() * i)
      //    let k = meal[i]
      //    meal[i] = meal[j]
      //    meal[j] = k
      // }
      // console.log(randomMeal);
      // document.getElementById("meal-result").innerHTML = meal[0];
      // }, false
      // );
   }
}

export const lunchGen = new LunchGenerator() 