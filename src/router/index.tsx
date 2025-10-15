import Home from '../page/Home';
import Post from '../page/Post';
import NotFound from '../page/NotFound';
import About from '../page/About';



import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

//路由配置

const router = createBrowserRouter([
  {
    path: '/',          // 顶层路径
    element: <App />,   
    children: [         
      {
        path: '/',      
        element: <Home />,
      },
      {
        path: 'about',  
        element: <About />,
      },
      {
        path: 'post/:id',   
        element: <Post />,
      },
      {
        path: '*',          // 404 页面
        element: <NotFound />,
      }
    ]
  }
  
]);

export default router;
