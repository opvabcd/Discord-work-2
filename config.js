const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    // Ensure global.startTime is set
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    // Create the RichPresence object
    const activity = new discord.RichPresence()
        .setApplicationId("1256607227444330606") // Replace with your own bot application id
        .setType("LISTENING") // Adjust based on the activity type you want
        .setName("HYDROX MUSIC")
        .setDetails("HYDROX MUSIC")
        .setState("ENJOY MUSIC EFFORTLESSLY") // Set the activity state
        .setStartTimestamp(global.startTime) // Make sure global.startTime is defined correctly
        .setAssetsLargeImage("https://media.discordapp.net/attachments/1136290202118279270/1260236974359576638/VID-20240612-WA0013.gif?ex=66948564&is=669333e4&hm=303fff743c1a58823d77e20f0f77448881e242959748db9e2da3fd1f6eed4cc2&") // Replace with your large image key
        .setAssetsLargeText("Listening To 43 Servers")
        .addButton('ADD TO SERVER', "https://discord.com/oauth2/authorize?client_id=1112673469210034256&permissions=36842105936&integration_type=0&scope=bot+applications.commands")
        .addButton('WEBSITE', "https://hydrox-music.rf.gd/");

    // Set the activity and status
    client.user.setPresence({
        status: "online", // Set bot status: online, idle, dnd, invisible
        activities: [activity.toJSON()]
    });
}

module.exports = reloadPresence;
