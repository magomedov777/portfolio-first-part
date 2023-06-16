import React from 'react';
import st from './Skills.module.css';
import stContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={st.skillsBlok}>
            <div className={`${stContainer.container} ${st.titleAndStills}`}>
                <h2 className={st.title}>моя квалификация</h2>
                <div className={st.skills}>
                    <Skill text={' могут ездить по канату на велосипеде, иногда на весьма значительные дистанции (мировой рекорд принадлежит американцу по имени Ник Валленда'}
                        name={'канатоходство'}/>
                    <Skill text={' Правда, может случиться так, что вдруг начнут попадаться  грибная стружка, а при подходе к самому заветному месту услышишь приглушенные голоса'}
                        name={'грибничество'}/>
                    <Skill text={' иллюзия — номер иллюзиониста, демонстрирующий необъяснимый эффект, «чудо»'}
                        name={'фокусы'}/>
                </div>
            </div>

        </div>
    )
}