# ThompSkis

A lite web app for tracking the waitlist and ride times on the jet skis for the Thompson Family Reunion (AKA 'The Condos').

## Developing

ThompSkis uses [pnpm](https://pnpm.io/installation) for package management.

Once you've cloned the project, you can install dependencies with `pnpm install`.

### Database

For development, you'll need to [create a local SQLite database](https://www.prisma.io/dataguide/sqlite/setting-up-a-local-sqlite-database). You should also create a `.env` file and set the appropriate connection string as an environment variables, ex `DATABASE_URL="file:./dev.db"`.

### Dev Server

After setup is finished, start the development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
