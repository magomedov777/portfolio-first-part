import React from 'react';
import st from './Skills.module.css';
import stContainer from '../common/styles/Container.module.css';
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={st.skillsBlok}>
            <div className={`${stContainer.container} ${st.titleAndSkills}`}>
                <h2 className={st.title}>lorem ipsum</h2>
                <div className={st.skills}>
                    <Skill text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
                        name={'Lorem Ipsum'} />
                    <Skill text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
                        name={'Lorem Ipsum'} />
                    <Skill text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'}
                        name={'Lorem Ipsum'} />
                </div>
            </div>

        </div>
    )
}