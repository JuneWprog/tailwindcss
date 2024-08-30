
# Project Name:
learn tailwind css
## What is tailwindcss?
Tailwind is a CSS framework made up of utility classes.
# Install tailwind
## using tailwindcss itself. con: have to run the build whenever css change 
```
npm install tailwindcss
npm run build-css
```

## using postcss to watch the code change. pro: postcss watch the css change and auto compile src to output
```
npm install postcss-cli tailwindcss autoprefixer

```

# Settings
## file structure
/src/styles.css -> the source file, is where to put the tailwind code  

/public/styles.css -> is the output file

## Add Tailwind CSS to your CSS entry file /src/styles.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## package.json
```
"scripts": {
    "build-css": "tailwindcss build -i ./src/styles.css -o ./public/styles.css ",
    "watch-css": "postcss ./src/styles.css -o ./public/styles.css --watch"
  },

```

## Create a postcss.config.js file with the following content:
```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
```

## Run the watch script:

```
npm run watch-css
```
