import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserMain from './Pages/Browser/BrowserMain';
import Ddambban from './Pages/Browser/DdambbanSch';
import NewJob from './Pages/Browser/NewJob';
import NewResume from './Pages/Browser/NewResume';
import SignIn from './Pages/Browser/SignIn';
import SignUp from './Pages/Browser/SignUp';
import HeaderBrowser from './Component/Header/HeaderBrowser';

const App = () => {
  return (
    <div className='App'>
      <BrowserView>
        <BrowserRouter>
          <HeaderBrowser />
          <Routes>
            <Route exact path='/' element={<BrowserMain />}></Route>
            <Route path='/ddambban' element={<Ddambban />}></Route>
            <Route path='/newjob' element={<NewJob />}></Route>
            <Route path='/newresume' element={<NewResume />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </BrowserView>
      <MobileView>

      </MobileView>
    </div>
  );
}

export default App;
