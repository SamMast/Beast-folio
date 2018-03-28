const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolioitemlist",
  {
    useMongoClient: true
  }
);

const projectSeed = [
  {
    title: "Hangman",
    url: "https://sammast.github.io/Hangman-Game/",
    imageUrl: "http://www.printactivities.com/Paper-Games/Hangman-Word-Game/HangmanExample.gif",
    githubUrl: "https://github.com/SamMast/Hangman-Game",
    description: 
  },
  {
    title: "Psychic Game",
    url: "https://sammast.github.io/Psychic-Game/",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61ozRTYpCZL._SY463_.jpg",
    githubUrl: "https://github.com/SamMast/Psychic-Game",
    description: 
  },
  {
    title: "RPG Game",
    url: "https://sammast.github.io/RPG-game/",
    imageUrl: "https://lumiere-a.akamaihd.net/v1/images/starwars_551c43f4.jpeg",
    githubUrl: "https://github.com/SamMast/RPG-game",
    description: 
  },
  {
    title: "Trivia Game",
    url: "https://sammast.github.io/Trivia-game/",
    imageUrl: "http://www.scadvocate.com/wp-content/uploads/2013/04/Author.jpg",
    githubUrl: "https://github.com/SamMast/Trivia-game",
    description: 
  },
  {
    title: "GIPHY API search",
    url: "https://sammast.github.io/GIPHY-API-hw/",
    imageUrl: "http://blog.360i.com/wp-content/uploads/2014/02/giphy_logo_sm.png",
    githubUrl: "https://github.com/SamMast/GIPHY-API-hw",
    description: 
  },
  {
    title: "NYT Article Search",
    url: "hhttps://sammast.github.io/NYT-Article-Search/",
    imageUrl: "http://cdn.onlinewebfonts.com/svg/img_20237.png",
    githubUrl: "https://github.com/SamMast/NYT-Article-Search",
    description: 
  },
  {
    title: "To-Do List",
    url: "https://sammast.github.io/To-Do-List/",
    imageUrl: "https://www.mangoapps.com/blog/wp-content/uploads/to-do.jpg",
    githubUrl: "https://github.com/SamMast/To-Do-List",
    description: 
  },
  {
    title: "Train Scheduler",
    url: "https://sammast.github.io/Train-Scheduler/",
    imageUrl: "https://thumbs.dreamstime.com/b/train-station-schedule-board-18868375.jpg",
    githubUrl: "https://github.com/SamMast/Train-Scheduler",
    description: 
  },
  {
    title: "Liri App",
    url: "https://github.com/SamMast/Liri-Node-APP",
    imageUrl: "https://yourliri.com/wp-content/uploads/2017/09/Your-Liri-transparent-logo.png",
    githubUrl: "https://github.com/SamMast/Liri-Node-APP",
    description: 
  },
  {
    title: "Constructor Hangman",
    url: "https://github.com/SamMast/Constructor-Hangman",
    imageUrl: "http://i.imgur.com/yPQAQEk.png",
    githubUrl: "https://github.com/SamMast/Constructor-Hangman",
    description: 
  },
  {
    title: "BAMAZON Marketplace App",
    url: "https://github.com/SamMast/Bamazon",
    imageUrl: "http://bamazon.com.br/wp-content/uploads/2016/07/bamazon-FIN_400_green.png",
    githubUrl: "https://github.com/SamMast/Bamazon",
    description: 
  },
  {
    title: "Friend Finder App",
    url: "https://friend-finder-43808.herokuapp.com/",
    imageUrl: "https://wallpaperbrowse.com/media/images/Best-Friends-Forever.jpg",
    githubUrl: "https://github.com/SamMast/Friend-Finder",
    description: 
  },
  {
    title: "Burger App",
    url: "https://radiant-retreat-24438.herokuapp.com/",
    imageUrl: "http://www.printactivities.com/Paper-Games/Hangman-Word-Game/HangmanExample.gif",
    githubUrl: "https://github.com/SamMast/Burger",
    description: 
  },
  {
    title: "Faux Real",
    url: "http://faux-real.herokuapp.com/",
    imageUrl: "https://thumb7.shutterstock.com/display_pic_with_logo/180313/180313,1315817872,1/stock-photo-newspaper-headline-extra-extra-isolated-on-white-background-84472090.jpg",
    githubUrl: "https://github.com/deegiialt/Faux-Real",
    description: 
  },
  {
    title: "Obi-Wine Kenobi",
    url: "https://github.com/WhitPetitgout/ObiWineKenobi",
    imageUrl: "https://github.com/WhitPetitgout/ObiWineKenobi",
    githubUrl: "https://github.com/WhitPetitgout/ObiWineKenobi",
    description: 
  },
  {
    title: "React Memory Game",
    url: "https://sammast.github.io/memorygame-react/",
    imageUrl: "https://cdn.auth0.com/blog/react-js/react.png",
    githubUrl: "https://github.com/SamMast/memorygame-react",
    description: 
  }
];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
