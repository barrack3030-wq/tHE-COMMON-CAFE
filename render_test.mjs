import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.tsx';

try {
  const html = renderToString(React.createElement(App));
  console.log("Success! Length:", html.length);
} catch (e) {
  console.error(e);
}
