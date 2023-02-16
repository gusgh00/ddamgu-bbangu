import React from 'react';
import '../../CssStyle/HeaderBrowser.css';
import Mainlogo from '../../Image/dgbg_logo.png';
import { NavLink } from 'react-router-dom';

const HeaderBrowser = () => {
    return (
        <header className='Header'>
            <nav className='Nav'>
                <div className='HeaderDiv1'>
                    <NavLink to="/" className="navlink"><img src={Mainlogo} alt='땜구빵구' className='ImageLogo' /></NavLink>
                    <ul className='SignUl'>
                        <li className='SignLi'><NavLink to="/signin"
                            style={({
                                color: '#555555',
                                textDecoration: "none"
                            })}>
                            로그인
                        </NavLink></li>
                        <li className='SignLi'>|</li>
                        <li className='SignLi'><NavLink to="/signup"
                            style={({
                                color: '#555555',
                                textDecoration: "none"
                            })}>
                            회원가입
                        </NavLink></li>
                    </ul>
                </div>
                <div className='HeaderDiv2'>
                    <ul className='MenuUl'>
                        <li className='MenuLi'>
                            <NavLink to="/ddambban"
                                style={({
                                    color: '#555555',
                                    textDecoration: "none"
                                })}>
                                땜빵공고
                            </NavLink>
                        </li>
                        <li className='MenuLi'>
                            <NavLink to="/newjob" className="navlink"
                                style={({
                                    color: '#555555',
                                    textDecoration: "none"
                                })}>
                                공고등록
                            </NavLink>
                        </li>
                        <li className='MenuLi'>
                            <NavLink to="/newresume" className="navlink"
                                style={({
                                    color: '#555555',
                                    textDecoration: "none"
                                })}>
                                이력서등록
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='ColorLine'></div>
        </header>
    );
}

export default HeaderBrowser;