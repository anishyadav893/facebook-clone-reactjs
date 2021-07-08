import React from 'react';

import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Widgets from './Widgets';
import Feed from './Feed';
import Login from './Login';

function App() {
  const user = null;
  return (
    <div className="app">
        {!user ? <Login />
          : (
            <>
              <Header />
              <div className="app__body">
                <SideBar />
                <Feed />
                <Widgets />
              </div>
            </>
          )
        }
    </div>
  );
}

export default App;
