import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
    </BrowserRouter>
              , document.getElementById('root'));
registerServiceWorker();
