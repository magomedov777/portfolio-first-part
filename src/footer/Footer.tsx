import stContainer from '../common/styles/Container.module.css'
import st from './footer.module.css'


export const Footer = () => {
    return (
        <div className={st.footerBlok}>
            <div className={`${stContainer.container} ${st.container}`}>
<h3>приходите еще какнибудь</h3>
                <div className={st.centerFrame}></div>
                <span>создано в перерывах сериала</span>
            </div>
        </div>
    )
}