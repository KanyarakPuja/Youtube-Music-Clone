import React, { useState } from 'react';
    import Sidebar from './components/Sidebar';
    import Header from './components/Header';
    import Categories from './components/Categories';
    import Albums from './components/Albums';
    import Artists from './components/Artists';
    import Playlists from './components/Playlists';
    import './App.css';

    function App() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

      return (
        <div className="app-container">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Header />
            <Categories />
            <Albums />
            <Artists />
            <Playlists />
            <div className="content">
              {/* Main content will go here */}
            </div>
          </div>
        </div>
      );
    }

    export default App;
