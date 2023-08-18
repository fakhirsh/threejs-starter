# Three.js Starter

This is a starter project for [Three.js](https://threejs.org/) made using `React.js`. It supports the following:

1. React three fiber
2. Tailwind CSS 
3. Typescript


# History

## Create React App using Vite

This `react` project was created using `vite` having `typescript` support. The following command was used to create the project:

```
npm init vite@latest threejs-starter -- --template react-ts
```

## Add Tailwind CSS [*(Installation guide)*](https://tailwindcss.com/docs/guides/vite)

Now `cd` into `threejs-starter` folder.

Run the following commands to add `tailwindcss` to the project:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add the paths to all of your template files in your `tailwind.config.js` file:

```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ...
}
```

Add the `@tailwind` directives for each of Tailwind’s layers to the top of your ``./src/index.css` file:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start using Tailwind’s utility classes to style your content:

```
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

Finally run your build process:

```
npm run dev
```

## Add Three.js and React Three Fiber

Run the following command to add `three.js` and `react-three-fiber` to the project:

```
npm install three react-three-fiber
```

