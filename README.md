# LNSAutoBanGG Discord Bot

This is an automated moderation Discord bot built with `discord.js`.

## Features

- **Malicious Link Detection:** Scans every message and automatically bans users who post known scam/malicious links (like fake Nitro links).
- **Restricted Channel Enforcement:** Automatically bans any standard user who posts in the `do-not-post-or-get-banned🙂` channel.
- **Message Cleanup:** When a user is banned due to these rules, their messages from the last hour are automatically deleted.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A Discord Bot Token from the [Discord Developer Portal](https://discord.com/developers/applications).

## Installation

1. Clone or download this repository.
2. Open a terminal in the project folder and install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory (this is already ignored in `.gitignore`) and add your bot token:
   ```env
   TOKEN=your_bot_token_here
   ```

## Usage

To start the bot, run:
```bash
node index.js
```

You should see `Ready! Logged in as <YourBotName>` in your terminal.

## Hosting on a Server/Cloud

If you want to host this bot 24/7 without keeping your computer on, you can use services that support running background Node.js processes, such as:
- **[Railway.app](https://railway.app/)** (Recommended)
- **[Render.com](https://render.com/)**
- **A Linux VPS** (DigitalOcean, Linode, AWS EC2, Oracle Cloud Free Tier)

*Note: Serverless environments like Cloudflare Pages or Vercel cannot host Discord bots using the Gateway because they do not support persistent long-running WebSockets.*
