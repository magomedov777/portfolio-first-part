import stContainer from '../common/styles/Container.module.css'
import st from './contacts.module.css'
import React from "react";

export const Contacts = () => {
  return(
      <div className={st.contactsBlok}>
          <div className={`${stContainer.container} ${st.container}`}>
              <h3 >КОНТАКТЫ ШТАБА</h3>
              <div className={st.inputsAndTextarea}>
              <input className={st.input} type="text"/>
              <input className={st.input} type="text"/>
              <textarea className={st.textarea} ></textarea>
          </div>
              <button>молниеностная доставка точно по адресу и без воды, просто нажми сюды</button>
          </div>
      </div>
  )
}