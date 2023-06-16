import React from "react";
import stContainer from '../common/styles/Container.module.css'
import st from './contacts.module.css'

export const Contacts = () => {
    return (
        <div className={st.contactsBlock}>
            <div className={`${stContainer.container} ${st.container}`}>
                <h3>Contacts</h3>
                <div className={st.inputAndTextarea}>
                    <input className={st.input} type="text" />
                    <input className={st.input} type="text" />
                    <textarea className={st.textarea} ></textarea>
                </div>
                <button>send</button>
            </div>
        </div>
    )
}