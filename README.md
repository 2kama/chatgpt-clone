# ChatGPT Clone

This repo is deployed on Netlify. You can view it here [ChatGPT Clone](https://chatgpt-clone-mish.netlify.app/)

## Tech Stack

[React](https://reactjs.org/)<br>
[NextJS](https://nextjs.org/)<br>
[TailwindCSS](https://tailwindcss.com/)<br>
[Firebase](https://firebase.google.com/)<br>
[TypeScript](https://www.typescriptlang.org/)

## Load up locally

You'll need to create some *environment variables* in a *.env.local* file.<br><br>

FIREBASE_SERVICE_ACCOUNT_KEY (Gotten from your Firebase Account Project)<br>
GOOGLE_ID (Gotten from your Google Authentication Web SDK settings)<br>
GOOGLE_SECRET (Gotten from your Google Authentication Web SDK settings)<br>
NEXTAUTH_SECRET (This really can be any AlphaNumeric you want)<br>
NEXTAUTH_URL (This is the baseURL of your host. e.g localhost:3000 or the url host of your deployed version.)<br>
OPENAI_API_KEY (apiKey from your openai account)

<br><br><br>
Then you can run these to pull up on localhost:3000
```bash
yarn install
```

```bash
yarn run dev
```
<br>

For the google auth to work, you gotta whitelist your hostname on the google api console.
