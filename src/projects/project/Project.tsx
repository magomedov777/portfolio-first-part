import React from 'react';
import st from './Project.module.css'

type ProjectType={
    name:string
    text:string
}

export const Project = (props:ProjectType) => {
    return (
        <div className={st.frame}>
            <div className={st.icone}></div>
            <div className={st.show}>
                <button>{'|>play'}</button>
            </div>
            <h4>{props.name}</h4>
            <span>{props.text}</span>

        </div>
    )
}