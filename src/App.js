import React from 'react';

import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed'

function App() {
  return (
  	// using the BEM naming convention of CSS, it helps when apps
  	// are needed to be scaled up
    <div className="app">
  	   <Header />

  	   <div className="app__body">
         <SideBar />
	       <Feed />
				 {/* Widgets */}
  	   </div>
    </div>
  );
}

export default App;
