import React from 'react';
import st from './Project.module.css'

type ProjectType = {
    name: string
    text: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={st.frame}>
            <div className={st.icon}></div>
            <div className={st.show}>
                <button>{'send'}</button>
            </div>
            <h4>{props.name}</h4>
            <span>{props.text}</span>

        </div>
    )
}