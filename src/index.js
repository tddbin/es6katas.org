import atomic from 'atomic';
atomic = atomic(window);

const url = `https://api.github.com/search/code?q=repo%3Atddbin%2Fkatas+language%3AJavaScript+path%3Akatas%2Fes6%2Flanguage`;

atomic.get(url)
  .success((data) => {
    console.log(data);
  })
  .error((e, xhr) => {
    console.log(':(', xhr);
  })
;
