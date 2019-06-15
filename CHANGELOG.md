# ???  2015-??-??

- pre-render the index.html page at deploy time, so the rendering will be flying fast, only updates 
  will be applied to the DOM once the page was rendered on the client
- separate server- and client-side rendering better, improve code
- add analytics to the page
- open tddbin in a new tab

# Version 1

- [x] use fetch instead of atomic
- [x] move to kavun as test runner, faster, simpler, smaller
- [x] remove workshop banner
- [x] classnames seems to be used rarely
- [ ] update react, maybe preact works fine?
- [ ] make it run on https
- [ ] simplify the deploy, travis has push to gh-pages built in
- [x] move to https://plausible.io/ instead of GA
- [ ] show all ESX katas on the page