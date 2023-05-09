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

## Dev Build:
<img width="582" alt="Screenshot 2023-05-09 at 2 30 16 PM" src="https://github.com/zackshackleton/sprinkles-nextjs13/assets/13963847/5442c84f-1715-4f69-9269-84af172ebac3">

## Production Build:
<img width="582" alt="Screenshot 2023-05-09 at 2 30 43 PM" src="https://github.com/zackshackleton/sprinkles-nextjs13/assets/13963847/eff34e9a-9a60-4c0d-b2bc-f8960b8f77a2">
