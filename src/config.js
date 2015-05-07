const itemsPerPage = 100;
const searchQuery = encodeURIComponent('repo:tddbin/katas+language:JavaScript+path:katas/es6/language');
export const GITHUB_URL = `https://api.github.com/search/code?per_page=${itemsPerPage}&q=${searchQuery}`; 
