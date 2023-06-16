import React from 'react';
import s from './Main.module.css';
import st from '../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={st.container}>
                <div className={s.text}>
                    <span>Hi, There</span>
                    <h1>I am John Doe</h1>
                    <p>Software Engineer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}
