# React starter

> Starter kit to buid `React/Redux` based _Single Page Apps_.  

## First Setup

```
npm install
```

**NOTE:** this command will install the library that are essential to the execution of your app and _Styleguide_.

## Run the App - development

During development you run the app through _WebpackDevServer_ so to have development and debug facilities like:

- hot module reloading
- source maps
- Redux Dev Console

```
npm start
```

## Run the App - production

You can run the application in _production mode_ (minified bundle, without development & debug facilities):

```
npm run app
```

## Deploy to heroku

The application is prepared for Heroku cloud solution.

```
heroku login
heroku create
npm push heroku master
```

if you want to deploy specific branch to heroku master just use command below
```
npm push heroku yourbranch:master
```

> For more inforamtion go to [heroku doc](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

## Working with Styleguide

Sometimes you need to take a look at the ensable of _Components_ that are defined in you application. The _Styleguide_ is exactly what you need:

```
npm run styleguide
```
the Styleguide is available on page:
```
http://localhost:6060
```

The library will auto-generate the styleguide. For making the team happier and the guide more usefull just add component.md file with some example (for ex. check the Button component)

> For more information go to [react-styleguidist](https://github.com/styleguidist/react-styleguidist)

## Code Quality (eslint)


```
// through NPM interface (*)
npm run lint

// or
./node_modules/eslint/bin/eslint.js ./
```

_(*) In case of errors it shows an horrible NPM related error trace which is completely unrelated to the real code investigation. Just ignore it or run the direct invocation command._

The linter rules are checked before you commit your changes by _pre-commit_ lib.
