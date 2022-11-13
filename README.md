# Rent Calculator Content Portal

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It has Apollo Client to fetch GraphQL APIs. It also contains Eslint, Prettier, Husky & Lint-staged to format the code. Happy coding!

## Getting Started

This project is developed with [Yarn](https://yarnpkg.com). So, **it's recommended that all contributors should use `yarn` instead of `npm`**. It's easy to install the `yarn` if you haven't already, run:

```
# skip, if you have yarn installed on your machine
npm install --global yarn
```

For the first time, you need to install the dependencies of this project:

```
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run Eslint

To get the lint error on your code, run:

```
yarn lint
```

And to fix the lint error automatically, run:

```
yarn lint:fix
```

### Run Prettier

To see the formatting error based on prettier, run:

```
npm run format
```

And to format the codes automatically, run:

```
npm run format:fix
```

### Configure Editor

Prettier supports various editors. You can see the editor list that you can use Prettier on [their official site](https://prettier.io/docs/en/editors.html).

But if you're using VS Code, then follow the instructions below to configure your editor.

At first. Install VSCode Prettier plugin by clicking [this link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

After installing, open VSCode, and press `(macOS) cmd + shift + p` or `(windows) ctrl + shift + p` and search `open settings`.

Select **Preference: Open Setting(JSON)** and modify the file like the below.

```js
{
  //...
  "editor.formatOnSave": true,
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

Or you can simply modify it like the below.

```js
{
  // ...
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

After modifying, when you modify a file and save it, you can see the code of the file is fomatted automatically.
