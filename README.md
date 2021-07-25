# sendanor/discord

Lightweight Discord API and Gateway Library for TypeScript and NodeJS.

It's still quite experimental and mostly intended for our internal use in our gateway product.

### It's MIT licenced

### It doesn't have many runtime dependencies

 * [NodeJS v14](https://nodejs.org)
 * [Lodash](https://lodash.com)
 * [WebSocket library `ws`](https://github.com/websockets/ws) -- It's only required for the `DiscordGateway` implementation

### Git submodule use

We use it as a git submodule. 

```
mkdir -p src/nor
git submodule add git@github.com:sendanor/discord.git src/nor/discord
git config -f .gitmodules submodule.src/nor/discord.branch main
```

You may want to do that, too, in order to take full advance of the TypeScript language.
