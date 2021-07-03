import React from 'react';

import './App.css';
import Header from './Header';

function App() {
  return (
  	// using the BEM naming convention of CSS, it helps when apps
  	// are needed to be scaled up
    <div className="app">
      <h1>Let's build the Facebook clone!</h1>

  	   <Header />

	     {/* App body */}
	  	   {/* Sidebar */}
	       {/* Feed */}
		{/* Widgets */}
    </div>
  );
}

export default App;
