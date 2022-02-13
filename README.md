# Mission Vision Chrome Extension (Healthcare Theme)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/Prathamesh-Dukare)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/Prathamesh-Dukare) [![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/Prathamesh-Dukare) 
## The Chrome extension to take care of your eyes while working on your computer 👀
See Demo Video : https://youtu.be/nZRVMrnfxd4

On Chrome Web Store : ( Pending - Coming soon )
## How to use this extension
Note : This extension will work on any chromium based browser such as Chrome, Brave, Edge etc.
## Steps to Install
1. Clone this repository.
2. Run `npm install` in the root directory.
3. Run `npm run-script build` / `yarn build` in the root directory.
2. Navigate to chrome://extensions/
3. Toggle the developer mode (Activate it).
4. Click on 'Load Unpacked'.
5. Select the build folder.
## Inspiration
More than 50% of the users face CVS(Computer Vision Syndrome) which gives a discomfort to their eyes due to the screen they are using. Reducing this stressful problem became our goal for  this Hackathon. 
## What it does
Mission Vision is a Chrome Extension which reminds you to take a break from your busy and tedious schedule. 
This popup on your browser reminds you to look away every 20 minutes at an object that is about 20 feet away for a full 20 seconds. Mission Vision also makes you aware about lots of facts about your eyes.
## How we built it
We used Figma for design prototype, Used React.js for frontend and Node.js for backend to serve dynamic fact via API.
## Challenges we ran into
Our biggest challenge was figuring out how to make the extension work on most of the browsers. We used the chrome API to detect the browser and then we used the browser API to detect the version of the browser.
Our 2nd challenge was to handle the server errors, thankfully [React Query](https://react-query.tanstack.com/) helped us actively handle the errors from server.
## Accomplishments that we're proud of
We were able to implement a custom caching mechanism to store latest facts in the browser to serve offline. And yes, Our extension works on every chromium based browser.
## What we learned
We learned about how exactly brower extentions work and how to make them work on most of the browsers.
Also, We learned a lot about how to work in a team environment and how to break down a project into smaller pieces.
We learned how to use the documentation for understanding the concepts.
## What's next for Mission Vision
We are planning to add support to firefox browser & Improve the UI of our extension.
Wanted to add fun activities in the extension which will keep your eyes healthy.



# Application Links
FrontEnd Code -> https://github.com/Prathamesh-Dukare/Chrome-Extension-HTL
<br>
API Server running on -> https://replit.com/@PrathameshDukare/HTL-Project-Backend
<br>
# Tech Stack
<b>FrontEnd</b>: Reactjs<br>
<b>BackEnd</b>: Node-Express
<br>

<b>Additional NPM Libraries</b>
  - react-query: 3.34.14
  - express.js : 4.17.2
  - react-browser-extension-scripts :4.0.10
  - react-dom: 17.0.2
<br>

<b>Styling</b>: CSS

<b>Deployment</b>: Chrome Web Store (...Pending)

***This Project is a part of Hack The Leauge Hackathon in the theme of HealthCare***
![full_width](https://user-images.githubusercontent.com/78253900/153744496-e7a1f8c4-3bb1-4d56-bc83-7db86fa60a26.png)
<br><br>
***Glad to see you here! Show some love by Connecting on socials***

[![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@its_duke__&color=grey&logo=instagram&style=flat&logoColor=white&colorA=blue)](https://www.instagram.com/its_duke__/) [![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@Prathameshdukare&color=grey&logo=linkedin&style=flat&logoColor=white&colorA=blue)](https://www.linkedin.com/in/Prathamesh-Dukare/) [![Twitter](https://img.shields.io/static/v1.svg?label=connect&message=@prathameshtwits&color=grey&logo=twitter&style=flat&logoColor=white&colorA=blue)](https://twitter.com/prathameshtwits)
