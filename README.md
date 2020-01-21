## Smite Randomizer

### `About This App`

Full Stack Application designed to make decision making easy aswell as easy to access. You don't have to access this app strictly from visiting the hosted site on heroku. Instead you can use the API routes provided below.

## Technologies Used

React - JavaScript Library designed for building User Interfaces
Mongoose – Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
Express – Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
Node.js – Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
Request - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

## Get Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## APP DEMO

A demo of this program can be accessed at this deployed link: https://smite-randomizer-tnc.herokuapp.com/

## API DEMO

A Demo of this program can be accessed at this link: https://twitch.tv/cutthelip

At this site there is a bot called _Nightbot_ that is listening 24/7. **\*note** In order to access the bots command you'll have to link your twitch account to the nightbot website (https://nightbot.tv)

**\*note** This step is only necessary for you to implement the API on your twitch account

Inside of the `chat` type the following:

`!random` - route **/api/gods/random**<br/>
_Description_ - returns a random god with no boundaries of class<br/>
_Nightbot Command_- `!addcom !random $(urlfetch https://smite-randomizer-tnc.herokuapp.com/api/gods/random)`

`!randomguardian` - route **/api/gods/Guardian/random**<br/>
_Description_ - returns a random god from the class Guardian<br/>
_Nightbot Command_- `!addcom !randomguardian $(urlfetch https://smite-randomizer-tnc.herokuapp.com/api/gods/Guardian/random)`

`!randomwarrior` - route **/api/gods/Warrior/random**<br/>
_Description_ - returns a random god from the class Warrior<br/>
_Nightbot Command_- `!addcom !randomwarrior $(urlfetch https://smite-randomizer-tnc.herokuapp.com/api/gods/Warrior/random)`

`!randomassassin` - route **/api/gods/Assassin/random**<br/>
_Description_ - returns a random god from the class Assassin<br/>
_Nightbot Command_- `!addcom !randomassassin $(urlfetch https://smite-randomizer-tnc.herokuapp.com/api/gods/Assassin/random)`

`!randommage` - route **/api/gods/Mage/random**<br/>
_Description_ - returns a random god from the class Mage<br/>
_Nightbot Command_- `!addcom !randommage $(urlfetch https://smite-randomizer-tnc.herokuapp.com/api/gods/Mage/random)`

`!randomhunter` - route **/api/gods/Hunter/random**<br/>
_Description_ - returns a random god from the class Hunter<br/>
_Nightbot Command_- `!addcom !randomhunter $(urlfetch https://smite-randomizer-tnc.herokuapp.com/api/gods/Hunter/random)`

`!randomjoust` - route **/api/gods/random/team/joust**<br/>
_Description_ - returns 3 random gods with no boundaries of class (Game mode "Joust" is a 3v3)<br/>
_Nightbot Command_- `!addcom !randomjoust $(urlfetch https://smite-randomizer-tnc.herokuapp.com/api/gods/random/team/joust)`

`!randomconquest` - route **/api/gods/random/team/conquest**<br/>
_Description_ - returns 5 random gods with boundaries of class, 1 god from each class (Game mode "Joust" is a 5v5)<br/>
_Nightbot Command_- `!addcom !randomconquest $(urlfetch https://smite-randomizer-tnc.herokuapp.com/api/gods/random/team/conquest)`
