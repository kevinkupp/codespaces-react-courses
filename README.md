# GitHub Codespaces ♥️ React

Welcome to your shiny new Codespace running React! We've got everything fired up and running for you to explore React.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

This project was bootstrapped for you with [Vite](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

### `npm start`

We've already run this for you in the `Codespaces: server` terminal window below. If you need to stop the server for any reason you can just run `npm start` again to bring it back online.

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`) to view your running application.

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn Vitest, a Vite-native testing framework, go to [Vitest documentation](https://vitest.dev/guide/)

## Kursuste komponentide hierarhia

```text
App (src/App.jsx)
└── FavoritesProvider (src/contexts/FavoritesContext.jsx)
    └── AppContent
        ├── Header
        │   └── Navigation
        ├── PageHeading
        ├── CategoryList
        ├── CourseList (populaarsed ja filtreeritud kursused)
        │   └── CourseCard
        └── Footer
```

- Kursuste andmed (`id`, kategooria, nimi, kirjeldus, kestus ja populaarsuse lipp) asuvad `App.jsx`-is. `AppContent` filtreerib need nime, kategooria ja lemmikuvaate põhjal ning edastab `CourseList`-ile kursuste massiivi props'ina.
- `CourseList` kuvab massiivi, edastades iga kursuse väljad `CourseCard`-ile props'idena. Kaart kasutab lemmikute ID-sid ja muutmise funktsiooni `FavoritesContext`-ist.
- `CategoryList` saab kategooriad, valitud kategooria ning muutmise funktsiooni `AppContent`-ilt props'idena.
- `Header` loeb lemmikute arvu samast `FavoritesContext`-ist. `FavoritesProvider` ümbritseb kogu `AppContent`-i, nii et päis ja mõlemad kursusenimekirjad jagavad üht lemmikute olekut.

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://sambitsahoo.com/blog/vite-code-splitting-that-works.html](https://sambitsahoo.com/blog/vite-code-splitting-that-works.html)

### Analyzing the Bundle Size

This section has moved here: [https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer)

### Making a Progressive Web App

This section has moved here: [https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf](https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf)

### Advanced Configuration

This section has moved here: [https://vitejs.dev/guide/build.html#advanced-base-options](https://vitejs.dev/guide/build.html#advanced-base-options)

### Deployment

This section has moved here: [https://vitejs.dev/guide/build.html](https://vitejs.dev/guide/build.html)

### Troubleshooting

This section has moved here: [https://vitejs.dev/guide/troubleshooting.html](https://vitejs.dev/guide/troubleshooting.html)
