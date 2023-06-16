import React from 'react';
import st from './Skill.module.css';

type SkillType={
    name:string
    text:string
}

export const Skill = (props:SkillType) => {
    return (
        <div className={st.frame}>
            <div className={st.icone}></div>
            <h3>{props.name}</h3>
            <span>{props.text}</span>


        </div>
    )
}