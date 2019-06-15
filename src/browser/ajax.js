export const loadViaAjax = (url, onLoaded) => {
  window.fetch(url)
    .then(response => response.json())
    .then(data => onLoaded(null, data))
    .catch(e => onLoaded(e));
};
