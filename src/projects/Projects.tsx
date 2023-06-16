import React from 'react';
import stContainer from '../common/styles/Container.module.css';
import st from './Projects.module.css'
import { Project } from "./project/Project";

export const Projects = () => {
    return (
        <div className={st.projectsTitleBlok}>
            <div className={`${stContainer.container} ${st.container}`}>
                <h2 className={st.title}>PROJECTS</h2>
                <div className={st.projects}>
                    <Project name={'lorem ipsum'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} />
                    <Project name={'lorem ipsum'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting'} />
                </div>
            </div>
        </div>
    )
}