import React from 'react'
import { ICFacebook, ICGithub, ICTelegram, ICInstagram } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <h3 className="logo">Kopi Sob</h3>
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook}/>
                    <Icon img={ICInstagram}/>
                    <Icon img={ICTelegram}/>
                    <Icon img={ICGithub}/>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2020 - Kopi Sob</p>
            </div>
        </div>
    )
}

export default Footer
