import fs from 'fs';
import path from 'path';
import {render} from '../src/server/index.js';

const indexHtmlFile = path.join(__dirname, '../src/index.html');
const indexHtml = fs.readFileSync(indexHtmlFile).toString();
render((renderedHtml) => {
  const fullIndexHtml = indexHtml.replace('${prerenderedHtml}', renderedHtml);
  console.log(fullIndexHtml);
});