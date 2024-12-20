# CRUX GUI

### Get started with project

In the project directory, run:

```
$ npm install
To install dependencies.

$ npm start
Runs the app in the development mode.

$ npm test
Launches the test runner in the interactive watch mode.

$ npm run build
Builds the app for production to the `build` folder.
```

### Tech Stack

```
  Language: HTML, CSS, Javascript, React.js
  Libraries:
      API: Axios
      Routing: React Router v6
      Testing: Jest, React Testing Library
      Design System: MaterialUI
```

### Folder Structure

```
  |- public
    |- index.html // root html file
  |- src
    |- app
    |- components
      |- Component
        |- Component.js
        |- Component.css
        |- Component.test.js
    |- pages
      |- Page
        |- Page.js
        |- Page.css
        |- Page.test.js
```
### Current Support

```
  1. Support for multiple url's.
  2. Fetching data from endpoint (collection period, LCP, INP, CLS, TTFB)
  3. Loading spinner when the data is getting fetched from API.
  4. Search button is disabled when the input is empty.
  5. Table supports searching and sorting functionality according to thresholds as well.
  6. Table pagination support provided. 
```