import React from 'react';
import st from './Navigator.module.css';


export const Nav = () => {
    return (
        <div className={st.frame}>
            <a href="">main</a>
            <a href="">contacts</a>
            <a href="">skills</a>
            <a href="">projects</a>
        </div>
    )
}