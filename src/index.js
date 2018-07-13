// import express from 'express';
// import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './common/components/App';

ReactDOM.render(<App />, document.getElementById('root'));
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from './common/components/App';
// import Html from './common/components/Html';
// import express from 'express';
// import fs from 'fs';

// const index = fs.readFileSync(__dirname + '/public/index.html', 'utf8');

// const app = express();
// app.get('**', (req, res) => {
//   const html = renderToString(<App />);
//   const finalHtml = index.replace('<!-- ::APP:: -->', html);
//   res.send(finalHtml);
// });

// export default (req, res) => {
//   const html = renderToString(<App />);
//   const template = Html(html);
//   res.send(template);
// };

