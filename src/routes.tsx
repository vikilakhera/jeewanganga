import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import {
  ABOUT_US,
  HOME,
  JOIN_US,
} from './constants';
import AboutUs from './pages/aboutUs';
import Home from './pages/home';
import JoinUs from './pages/joinUs';
import PageNotFound from './pages/pageNotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={HOME} element={< Home />}></Route>
        <Route path={ABOUT_US} element={< AboutUs />}></Route>
        <Route path={JOIN_US} element={< JoinUs />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}