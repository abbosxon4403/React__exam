// images import
import arrow from '../../assets/img/arrow.png'
import facebook from '../../assets/img/facebook.png'
import github from '../../assets/img/github.png'
import twitter from '../../assets/img/twitter.png'
import linkedin from '../../assets/img/linkedin.png'
import { Link } from 'react-router-dom'


export const LeftMain = () => {
    return (
        <div className="left">
                <h3 className="left-heading">What I do !</h3>
                <p className="left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                <Link className="d-flex explore-link" to='/'>
                    <h4 className="left-explore">Explore me</h4>
                    <button className="arrow-btn">
                        <img className="arrow" src={arrow} alt="arrow" />
                    </button>
                </Link>
                <div className="d-flex s-links">

                <a href="https://facebook.com">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://github.com">
                    <img src={github} alt="github" />
                </a>
                <a href="https://twitter.com">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://linkedin.com">
                    <img src={linkedin} alt="linkedin" />
                </a>

                </div>
            </div>
    )
}