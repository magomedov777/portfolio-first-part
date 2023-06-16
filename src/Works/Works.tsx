import React from 'react';
import s from './Works.module.css';
import st from '../common/styles/Container.module.css';
import { Work } from '../Work/Work';

export const Works = () => {
    return (
        <div className={s.myWorksBlock}>
            <div className={`${st.container} ${s.worksContainer}`}>
                <h3 className={s.worksTitle}>My works</h3>
                <div className={s.worksList}>
                    <Work title='Name project 1' descriptionWork='Lorem Ipsum is simply dummy text of the printing and typesetting indust'/>
                    <Work title='Name project 2' descriptionWork='Lorem Ipsum is simply dummy text of the printing and typesetting indust'/>
                </div>
            </div>
        </div>
    )
}
