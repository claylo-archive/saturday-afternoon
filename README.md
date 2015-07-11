# saturday-afternoon

Kicking the tires with react.js, webpack and so on.

## :arrow_forward: Installation

I'm not releasing this on [npm](http://npmjs.com), so get it going with this:

```shell
$ git clone git@github.com:claylo/saturday-afternoon.git
```

## 🏃 Running the App

My intention is to get this going in a docker container, while leaving it runnable outside of one as well.

**To run locally:**
```shell
$ npm run local
```

## :dart: Primary Objectives

- [ ] Use `react.js` to build a "Hello World" component
 - [ ] Render output iframe in an HTML page
 - [ ] Load script performing this behavior asynchronously

## ⭐Bonus Objectives
- [ ] Use `webpack`
 - [ ] For bundle creation
 - [ ] For hot code reload
- [ ] Test the above functionality
 - [ ] Test with `jasmine` and `karma-runner`

## 🌟Super-bonus Objectives

- [ ] Run inside a docker container.
- [ ] Continuous Integration
- [ ] Continuous Deployment

### :notes: Here's a story... :notes:

I began the afternoon comfortable with [node.js](http://nodejs.org), practically acquainted with [react.js](https://facebook.github.io/react/index.html), conceptually acquainted with [flux](https://facebook.github.io/flux/docs/overview.html), aware of [karma](http://karma-runner.github.io/), and unfamiliar with [webpack](https://www.npmjs.com/package/webpack).

My first task was to get comfortable with a "proper" react.js-based project layout. I read through these articles:

 * [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
 * [The React.js Way: Getting Started Tutorial](http://blog.risingstack.com/the-react-way-getting-started-tutorial/)

The first article is good, but doesn't give much in the way of project layout suggestions. The React.js Way offered a project layout suggestion, but as I was going through the manual steps of setting that up, I found it didn't feel natural to me. I could get used to it, but I didn't love it.

I then wandered over to the [Yeoman](http://yeoman.io) site to see if I'd find something I'd like that wasn't too heavy (in the way the MEAN generator is heavy), but still had some ways for me to save some time this afternoon. Sure enough, I found the [react-webpack](https://github.com/newtriks/generator-react-webpack) generator for Yeoman. I don't love `grunt`, so I'll be ripping that out.

For now, I'll commit so the commit history will show my progress through the project.
