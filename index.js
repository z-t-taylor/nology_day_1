//Goal: Write a program that simulates a day in the life of a virtual pet! You will set up the rules for how your pet behaves, and then run a sequence of events to see what happens.
//Requirements:
//Set up your pet's stats: Create variables for petName, energy, hunger, and happiness. Give them starting number values (e.g., 50). Note: For hunger, a higher number means they are more hungry!
//Create your action functions:
//feed(): Should decrease hunger and increase energy. Rule: Use an if/else statement to check if hunger is already less than 10. If it is, console.log that the pet refuses to eat!
//play(): Should increase happiness and hunger, but decrease energy. Rule: Use an if/else statement to check if energy is less than 20. If it is, console.log that the pet is too tired to play.
//sleep(): Should greatly increase energy and slightly increase hunger.
//checkStatus(): Should console.log all of the pet's current stats so you can read them.
//Simulate the Day: * At the very bottom of your code, call your functions in whatever order you want to create a story for the day. (e.g., check stats, feed, play, play again, sleep, check stats).
//Open your terminal and run your program!

const petName = "Pidge";
let energy = 40;
let hunger = 80;
let happiness = 70;

const feed = () => {
  if (hunger < 10) {
    console.log(`${petName} is full and refuses to eat`);
    return;
  }
  hunger -= 20;
  energy += 10;
};
const play = () => {
  if (energy < 20) {
    console.log(`${petName} is too tired to play right now`);
    return;
  }
  energy -= 5;
  hunger += 10;
  happiness += 10;
};
const sleep = () => {
  energy += 20;
  hunger += 5;
};
const checkStatus = () => {
  console.log(
    `${petName}'s stats: energy: ${energy}, hunger: ${hunger}, happiness: ${happiness}`,
  );
};

checkStatus();
feed();
feed();
feed();
play();
play();
play();
sleep();
checkStatus();
feed();
play();
play();
play();
sleep();
sleep();
checkStatus();
