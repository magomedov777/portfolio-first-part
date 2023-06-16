import React from 'react';
import s from './RemoteWorks.module.css';
import st from '../common/styles/Container.module.css';

export const RemoteWorks = () => {
  return (
    <div className={s.remoteWorksInfo}>
        <div className={`${st.container} ${s.remoteWorksInfoContainer}`}>
            <h1 className={s.title}>send me</h1>
            <button className={s.btn}>send</button>
        </div>
    </div>
  )
}
