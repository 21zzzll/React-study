import { Link, Outlet } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          React-Blog
        </div>
        <div className="nav">
          <ul>
            <li><Link to="/"><a>首页</a></Link></li> 
            <li><Link to="/about"><a>关于</a></Link></li>``
          </ul>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div>
          <p>React-Blog &copy; 2025</p>
        </div>
      </footer>    
    </div>
  );
}


export default App
