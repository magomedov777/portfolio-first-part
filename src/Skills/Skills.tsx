import React from 'react';
import s from '../Skills/Skills.module.css';
import st from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${st.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius'} />
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'} />
                    <Skill title={'React'} description={'Lorem tempor incididunt ut labore et dolore magna aliqua. Ut enim'} />
                </div>
            </div>
        </div>
    )
}
