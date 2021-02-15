'use strict';

console.log('Hello world');

'use strict';
const Parse = require('parse/node');

initialization();

function initialization() {


    Parse.initialize("FourierAnimations");

    Parse.serverURL = 'http://192.168.1.182:1337/parse'

    const GameScore = Parse.Object.extend("GameScore");
    const gameScore = new GameScore();

    gameScore.set("score", 1337);
    gameScore.set("playerName", "Sean Plott");
    gameScore.set("cheatMode", false);

    gameScore.save()
        .then((gameScore) => {
            // Execute any logic that should take place after the object is saved.
            console.log('New object created with objectId: ' + gameScore.id);
        }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            console.log('Failed to create new object, with error code: ' + error.message);
        });
    downloadData();

}

async function downloadData() {

    const GameScore = Parse.Object.extend("Drawings");
    const query = new Parse.Query(GameScore);
    query.equalTo("inQueue", false);
    const results = await query.find();
    console.log("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (let i = 0; i < results.length; i++) {
        const object = results[i];
        console.log(object.id);
    }

}
console.log('Hello world');


