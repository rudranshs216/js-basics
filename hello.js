var cowsay = require("cowsay");
var giveMeAJoke = require("give-me-a-joke");

giveMeAJoke.getRandomDadJoke(function (joke) {
  console.log(
    cowsay.say({
      text: joke,
      e: "oO",
      T: "U ",
    })
  );
});
