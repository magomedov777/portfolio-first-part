import React from 'react';
import stContainer from '../common/styles/Container.module.css';
import st from './Projects.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={st.projectsTitleBlok}>
            <div className={`${stContainer.container} ${st.container}`}>
                <h2 className={st.titleBlok}>каталог созданий</h2>
                <div className={st.projectsBlok}>
                <Project name={'СМОТРИ КАК МОГУ'} text={'странный проэкт, но разок посмотреть можно'}/>
                <Project name={'ДИПЛОМНАЯ РАБОТА'} text={'нестыдно людям показать но немного странный проэкт'}/>
                </div>
            </div>
        </div>
    )
}