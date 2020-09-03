import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './screens/about';
import Home from './screens/home';
import Work from './screens/work';
import Contact from './screens/contact';

class Content extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <p>
            sp
          </p>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/work' component={Work}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Content;