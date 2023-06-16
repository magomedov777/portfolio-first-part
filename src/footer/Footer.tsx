import stContainer from '../common/styles/Container.module.css'
import st from './footer.module.css'


export const Footer = () => {
    return (
        <div className={st.footerBlock}>
            <div className={`${stContainer.container} ${st.container}`}>
                <h3>INFORMATION</h3>
                <div className={st.mainFrame}></div>
                <span>2023</span>
            </div>
        </div>
    )
}