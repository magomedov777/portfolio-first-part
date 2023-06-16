import React from 'react';
import st from './Header.module.css';
import { Nav } from "../navigator/Navigator";



export const Header = () => {
    return (

        <div className={st.mainFrame}>
            <div className={st.container}>
                <Nav />
            </div>
        </div>
    )
}