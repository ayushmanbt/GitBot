# GITBOT - A DISCORD BOT THAT WATCHES YOUR GITHUB REPO

GITBOT is an open source discord bot project where the discord bot will be able to do all sorts of things related to Github.


## Commands

1. **!repo set &lt;default repo URL&gt;**: Set the default repo for the discord bot

2. **!repo stats &lt;Optional: repo URL&gt;**: Get the stats of the (default) repo

3. **!repo contributors &lt;Optional: repo URL&gt;**: Get the list of contributors of a repo

4. **!repo commits &lt;Optional: repo URL&gt;**: Get the list of latest commits to the repo.

4. **!repo pr &lt;Optional: repo URL&gt;**: Get the list of latest prs to the repo.

## Automatic Reply 

Automatic replies for new commits to a repository


## How to setup: 

1. Goto [https://discord.com/developers/](https://discord.com/developers/)

2. Create a new aplication

3. Add a bot to the application (better name your bot like - gitbot-yourname-test)

4. Add the bot token to the .env file of your project with the name CLIENT_ID

5. Now authorize your bot in our discord server - [https://discord.gg/xjPmvUky7r](https://discord.gg/xjPmvUky7r) with the oauth endpoint: 
`https://discord.com/oauth2/authorize?client_id=<YOUR_CLIENT_ID>&scope=bot&permissions=8`

6. Run `npm run dev` to start your bot

7. Happy coding!