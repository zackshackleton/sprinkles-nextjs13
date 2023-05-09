This is a minimal reproducible example of a vanilla-extract sprinkles issue with NextJs 13 App directory.

At its current state, running the application in production (`npm run build` + `npm run start`) does not apply the sprinkles styles. During local development builds (`npm run dev`) sprinkles work appropriately.

If you comment out any 1 condition in the `./src/app/styles/sprinkles.css.ts` file, everything works in production.

I have set the layout and page to be client components to avoid any possible issues that could appear with Next's server components.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Run the production build:

```bash
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
