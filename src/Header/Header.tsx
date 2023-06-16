import React from 'react';
import st from './Header.module.css';
import {Navigator} from "../navigator/Navigator";



export const Header = () => {
    return (

        <div className={st.generalFrame}>
            <div className={st.container}>

                    <Navigator/>

            </div>
        </div>
    )
}