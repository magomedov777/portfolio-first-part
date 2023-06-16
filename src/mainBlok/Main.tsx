import React from 'react';
import st from './Main.module.css';
import stContainer from '../common/styles/Container.module.css';


export const Main = () => {
    return (
        <div className={st.mainBlok}>
            <div className={`${stContainer.container} ${st.container}`}>
            <div className={st.name}>
                <span>Привет</span>
                <h1>Я Павел Потапов</h1>
                <p>моя работа это Frontend разработка </p>
                </div>
            <div className={st.foto}>моя фотка тут скоро будет</div>
            </div>
        </div>
    )
}