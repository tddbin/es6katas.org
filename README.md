# es6katas.org

[ES6Katas.org] is a simple website that lists various katas (small tasks) for learning ECMAScript 6 by doing it.
Each kata links to [tddbin] and loads the according source code in there. All you have to do is fix
the failing tests. And by doing so you are supposed to use and learn ES6 one small task and feature at a time.

## History

It all started by trying out ES6 in [tddbin] when I had put [babeljs] in there so 
one could play with the latest version of JavaScript.

While learning it I realized that writing unit tests is always a good way to learn 
new things, even language features. So that's how the first [#es6kata][1] came about.
And since the new writing it down is a commit it all ended up in the [katas repo][2] 
and [@basecode] then brought up the idea to use a github search and make a site that
lists all the katas. In the beginning I was sceptical, since I wasn't sure if it would 
really continue. But meanwhile there are already a good number of katas. 
That's how this repo came about.

## Technology

This site uses [react.js] for abstracting away the DOM (as I like to call it).
On top it also uses react.js for server-side rendering, which creates a static version
of the page that loads in an instant and the client-side waiting times are minimal.

[1]: https://twitter.com/tddbin/status/576305472128446466
[2]: https://github.com/tddbin/katas
[tddbin]: http://tddbin.com
[babeljs]: https://babeljs.io
[ES6Katas.org]: http://ES6Katas.org
[@basecode]: https://twitter.com/basecode
[react.js]: http://facebook.github.io/react/