import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'

import Work from './components/work'
import Publications from './components/publications'


import Projects from './components/projects'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Projects></Projects>
          <Publications></Publications>
          <Work></Work>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
