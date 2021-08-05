class LunchGenerator {
   constructor(lunchItem) {
      this.lunchItem = lunchItem;
      this.randomizeLunches();
      this.showResults();
   }

   randomizeLunches() {
      const randomMeal = [
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
   }
}

export const lunchGen = new LunchGenerator() 