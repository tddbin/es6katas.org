import atomic from 'atomic';
const ajax = typeof window !== 'undefined' && atomic(window);

export const loadViaAjax = (url, onLoaded) => {
  ajax.get(url)
    .success((data) => {
      onLoaded(null, data);
    })
    .error((e, xhr) => {
      onLoaded(e);
    })
  ;
};
