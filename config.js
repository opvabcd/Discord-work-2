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
        .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1255957730863087638/1258063664402137128/VID-20240612-WA0013.gif?ex=6686ae97&is=66855d17&hm=ab8acb38d060e2d9043ed63b820395fe8143e82d3abbb1af48951868204226f6&") // Replace with your large image key
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