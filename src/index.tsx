import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import Home from './views/Home/Home';
import Apply from './views/Apply/Apply';
import Jobs from './views/Jobs/Jobs';
import Login from './views/Login/Login';
import Admin from './views/Admin/Admin';
import RequireAuth from './hooks/RequireAuth';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path='/' element={<App><Outlet /></App>}>
          <Route index element={<LayoutGroup id="home"><Home /></LayoutGroup>} />
          <Route path='jobs' element={<LayoutGroup id="jobs"><Jobs /></LayoutGroup>} />
          <Route path='apply' element={<LayoutGroup id="apply"><Apply /></LayoutGroup>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth><Outlet /></RequireAuth>}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </AnimatePresence>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
