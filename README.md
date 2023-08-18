# Three.js Starter

After cloning the repository, run the following to install all dependencies:

```
npm install
```

# History *(Optional)*

**Reference:**

[Create your own 3D website using @react-three/fiber (r3f), React, TypeScript, Vite and TailwindCSS](https://www.youtube.com/watch?v=MeBh3SUYqJw)

This is a starter project for [Three.js](https://threejs.org/) made using `React.js`. It supports the following:

1. React three fiber
2. Tailwind CSS 
3. Typescript

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
npm install three @react-three/fiber
```

**Very important:** You must install the following because three.js is javascript by default. We need to add supprt for typescript:

```
npm install -D @types/three
```

Also install `drei` for some useful components:

```
npm install @react-three/drei
```

Optionally, install react spring for animmations:

```
npm install @react-spring/web
```

## Bugs and Fixes

### 1. Lighting and Shading issues

Initially the scene shading was flat. It appears that new three.js verson completely changed the way how lights work [*(read here)*](https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733) and [*(here)*](https://discord.com/channels/740090768164651008/1141991389190692996).

With the latest three.js version physical lighting requires shorter decay/stronger intensity:

```
<pointLight intensity={900} position={[10, 10, 10]} />
```
or:
```
<Canvas gl={{ useLegacyLights: true }} />
```