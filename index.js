require('dotenv').config(); // Loads the token from the .env file
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('clientReady', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

const MALICIOUS_LINKS = ["bit.ly/scam", "free-nitro"];

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.channel.name === "do-not-post-or-get-banned🙂") {
        try {
            await message.guild.members.ban(message.author.id, {
                deleteMessageSeconds: 3600, // 1 hour
                reason: 'Automated ban: Posted in do-not-post-or-get-banned channel'
            });
            console.log(`Banned ${message.author.tag} for posting in do-not-post-or-get-banned channel`);
        } catch (error) {
            console.error('Failed to ban user for posting in restricted channel:', error);
        }
        return; // Don't process other rules if already banning
    }

    if (MALICIOUS_LINKS.some(link => message.content.toLowerCase().includes(link))) {
        try {
            await message.guild.members.ban(message.author.id, {
                deleteMessageSeconds: 3600, // 1 hour
                reason: 'Automated ban: Malicious link detected'
            });
            console.log(`Banned ${message.author.tag}`);
        } catch (error) {
            console.error('Failed to ban user:', error);
        }
    }
});

client.login(process.env.TOKEN); // This connects the script to the portal