import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import CardList from './CardList';

ReactDOM.render(<CardList />, document.getElementById('root'));
registerServiceWorker();
