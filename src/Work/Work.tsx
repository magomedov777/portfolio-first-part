import React from 'react';
import s from './Work.module.css';

type PropsType = {
    title: string
    descriptionWork: string
}

export const Work = (props: PropsType) => {
  return (
    <div className={s.work}>
        <div className={s.image}>
        <button>view</button>
          <img src="https://sylcoc.com/wp-content/uploads/2017/03/350x350.png" alt="img" />
          </div>
        <h3>{props.title}</h3>
        <span className={s.descriptionWork}>{props.descriptionWork}</span>

    </div>
  )
}
