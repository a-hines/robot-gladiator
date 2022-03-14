// var playerName = 'Clank McKrank'
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function() {
    // Alert players that there are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Ask players if they would like to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Log player's answer
    console.log(promptFight);

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
            window.alert(enemyName + " had died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // If player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " had decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }

        window.alert(playerName + " has chosen to skip the fight!");
        // If player enters incorrect text
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }


};

// run fight function to start game
fight();