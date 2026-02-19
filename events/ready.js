const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`✅ Logged in as ${client.user.tag}!`);

        client.user.setActivity('with Discord.js v14', { type: 'PLAYING' })
            .then(() => console.log(`🎮 Activity set!`))
            .catch(console.error);

        client.user.setStatus('online')
            .then(() => console.log('🟢 Status set to online'))
            .catch(console.error);

        console.log(`🌐 Serving ${client.guilds.cache.size} guild(s)!`);

        client.guilds.cache.forEach(guild => {
            console.log(`- ${guild.name}`);
        });
    },
};
