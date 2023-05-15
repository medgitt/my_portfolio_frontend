import React from 'react';
// import ReactDOM from 'react-dom'; //help us connect with html file

import App from './App'; //app component
import './index.css';

// ReactDOM.render(<App />,document.getElementById('root'));
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(<App />);
