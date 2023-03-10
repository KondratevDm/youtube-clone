## You can try it!

This project is hosted on netlify => [ugly youtube twin](https://youtube-twin.netlify.app/)  

# Screenshots:
<img src="https://sun9-west.userapi.com/sun9-2/s/v1/ig2/Gf7Hv6nO6rgcUhMZni0qMmNGxnvIrFj8zCRBKmz9sSxNR1I8vlS7n4XVWwTnj6WLvN3ltXGeKSRWi960Pwr0RKSQ.jpg?size=1896x902&quality=96&type=album" width="90%"></img> <img src="https://sun9-west.userapi.com/sun9-38/s/v1/ig2/qoWHxvaWfIPeBEcFnntotUxjx54O88PJt6Axh2lIDKZyJWMvhd5rd5darUw2PFGs24Rs--jvRJFOXLwFf_9lCKS-.jpg?size=1060x902&quality=96&type=album" width="90%"></img> <img src="https://sun9-west.userapi.com/sun9-63/s/v1/ig2/lGsi23iT2pd4IpPm6VjPDSWXYnec7odJZQN00WAsXvK0dV0Yrz2W71n1Ma-mHI3BOiNv1QfYZ7sjmH7Zz0yVsrkb.jpg?size=1056x904&quality=96&type=album" width="90%"></img> <img src="https://sun9-north.userapi.com/sun9-79/s/v1/ig2/ck2zdL6WnVMslOqa9YyuN4furKsXQmUnjBpBtA4pRrRWH1b1YONEvYjrNwns-s0WRAwYsM8A2S1eWOiyLdOJ7c8e.jpg?size=1058x898&quality=96&type=album" width="90%"></img> <img src="https://sun6.userapi.com/sun6-22/s/v1/ig2/jjFUcimjyER0NfKk8wbbS1GRyPGY5PcwGUP4vGRjLfHnV1CZiY9bF2okFdwSa8c8zFPjam8wc1CxUap3JoDsnWU1.jpg?size=1897x894&quality=96&type=album" width="90%"></img> 

# React Typescript boilerplate

This is an attempt at facilitating the starting of a new project with the
following features:

* Basic Technologies
  * TypeScript
  * ReactJS
* Styling
  * СSS importing
  * Sass support
  * Image importing
* Performance
  * JS Minification
  * CSS Minification
* Linting
  * ESLint
* Modern ES6 for using template strings, JSX syntax, object destructuring, arrow functions and more
* Babel for old browser support
* Hot Module Replacement for comfortable development

## Quick start

1. Clone this repo using:
  ```shell
  $ git clone git@github.com:KondratevDm/webpack-boilerplate.git
  ```

2. To install dependencies and clean the git repo run:

  ```shell
  $ yarn install
  ```

  *Or*

  ```shell
  $ npm install
  ```
3. Create first build

  ```shell
  $ yarn run build
  ```

Prepares your app for deployment to production environment. Optimizes and minifies all files, piping them to the `dist` folder.

4. Run project in development mode

  ```shell
  $ yarn run dev
  ```

Prepares your app for deployment to development environment.

5. Run project in development mode with HMR

  ```shell
  $ yarn run start
  ```

Starts the development server running on `http://localhost:3000` with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

6. Visualize size of webpack output files with an interactive zoomable treemap

  ```shell
  $ yarn run stats
  ```

It will create an interactive treemap visualization of the contents of all your bundles