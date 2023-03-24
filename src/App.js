import Login from './components/Login';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserProfile from './components/Profiles';
// import TodoPage from './components/TodoPage';
// import PostPage from './components/PostPage';
// import GalleryPage from './components/GalleryPage';
// import RootLayout from './components/Root';
// import ErrorPage from './components/Error';
// import Sidebar from './components/Sidebar';

// import  UserChat from './components/Caht';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage/>,
//     children:[
      
//         {index: true, element:<UserProfile/>},
//         {Path :'todo', element : <TodoPage/>},
//         {Path :'post', element : <PostPage />},
//         {Path :'gallary', element : <GalleryPage />},
      
//     ]
//   },
// ]);

function App() {
  return  (
     <div className='app'>
      {/* <Router>
        <Routes >
          <Route  path= "/" element ={<>
             <Sidebar/>
            <UserProfile/></>}/>
        </Routes>
        <Routes >
          <Route  path= "/post" element ={<>
            <Sidebar/>
            <PostPage/>
          </>}/>
        </Routes>
        <Routes >
          <Route  path= "/Todo" element ={<>
            <Sidebar/>
            <TodoPage/>
          </>}/>
        </Routes>
        <Routes >
          <Route  path= "/Gallary" element ={<>
            <Sidebar/>
            <GalleryPage/>
          </>}/>
        </Routes>
      </Router> */}
      <Login/>
     </div>
   )
  
}

export default App;
