import React from 'react';
import st from './Main.module.css';
import stContainer from '../common/styles/Container.module.css';


export const Main = () => {
    return (
        <div className={st.mainBlock}>
            <div className={`${stContainer.container} ${st.container}`}>
                <div className={st.name}>
                    <span>Hello</span>
                    <h1>I am John Doe</h1>
                    <p>my work - Front End Development</p>
                </div>
                <div className={st.photo}>photo</div>
            </div>
        </div>
    )
}