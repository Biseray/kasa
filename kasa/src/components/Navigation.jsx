import React from "react";

import logo from '../logo.png';

import { NavLink } from "react-router-dom";
import  style from"../styles/navigation.module.css";



export default function Navigation() {
    return (
        <header className={style.pos_header}>
            <img src={logo} className={style.App_logo} alt="logo" />
            <nav className={style.ks_navbar}>
            <NavLink  to="/" > Accueil </NavLink>
            <NavLink to="/apropos" > A Propos </NavLink>
            </nav>
        </header>
    )
}