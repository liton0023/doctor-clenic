import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Shop from './Pages/Shop/Shop'
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Register/SignUp';
import Footer from './Shared/Footer/Footer';
import ContactUs from './Pages/ContactUs/ContactUs'
import NotFound from './Pages/NotFound/NotFound'
import SetServices from './Pages/SetServices/SetServices';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ResetPasswordEmail from './Pages/Login/ResetPasswordEmail/ResetPasswordEmail';
import EmailVerefication from './Pages/Register/EmailVerefiction/EmailVerefication';
import CheackOut from './Pages/CheackOut/CheackOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/shop' element={<RequireAuth><Shop></Shop></RequireAuth>}></Route>
        <Route path='/setservices' element={<SetServices></SetServices>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/cheackout' element={<RequireAuth><CheackOut></CheackOut></RequireAuth>}></Route>
        <Route path='/resetpasswordemail' element={<ResetPasswordEmail></ResetPasswordEmail>}></Route>
        <Route path='/verifayemail' element={<EmailVerefication></EmailVerefication>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
