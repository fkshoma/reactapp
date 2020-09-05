import React from "react";
import { Route } from 'react-router-dom';

import About from './screens/about';
import Home from './screens/home';
import Work from './screens/work';
import Contact from './screens/contact';

const Content:React.FC<{menuVisible: any}> = ({menuVisible}) => {
  return(
    <main className="margin-0-auto">
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/work' component={Work}/>
      <Route path='/contact' component={Contact}/>
    </main>
  )
}

export default Content;