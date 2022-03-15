// var playerName = 'BotBot'
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is still alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // Ask players if they would like to fight or skip the battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // If player choses to skip, confirm and stop the loop
        if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
   
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
            }
        }    

    // If player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHelath' variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award money for winning
            playerMoney = playerMoney + 20;
            break;
            } else {
            window.alert(enemyName+ " still has " + enemyHealth + " health left.");
            }

        // Subtract the value of 'enemyAttack' from the value of 'playerHelath' and use that result to update th value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() lopp if player id dead
            break;
            } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            } 
        }
    } // end of while loop
}; // end of fight function

// run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    fight(pickedEnemyName);
  }