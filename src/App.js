import React from 'react';

import './App.css';
import Header from './Header';

function App() {
  return (
  	// using the BEM naming convention of CSS, it helps when apps
  	// are needed to be scaled up
    <div className="app">

  	   <Header />

	     {/* App body */}
	  	   {/* Sidebar */}
	       {/* Feed */}
		{/* Widgets */}
    </div>
  );
}

export default App;
