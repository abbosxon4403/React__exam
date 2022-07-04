import { Link } from 'react-router-dom'
import logo from '../../assets/img/footer-logo.png'
import BB from '../../assets/img/BB.jpg'
import './footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container container">


                <Link to='/' className="footer-logos">
                    <img className='footer-logo' src={logo}alt="logo" />
                    <h3>Bobur</h3>
                </Link>

                <img className='footer-b' src={BB}  width={170} height={201}  alt="b" />
                <div className="footer-wrapper">

                <div className='footer-links'>
                    <h4 className='text-uppercase'>fight with me on:</h4>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                        Twitter
                    </Link>
                    </h5>
                    <h5>
                    <Link className='text-decoration-underline footer-s-links' to='/'>
                        Instagram
                    </Link>
                    </h5>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                        Telegram
                    </Link>
                    </h5>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                        YouTube
                    </Link>
                    </h5>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                        Figma
                    </Link>
                    </h5>
                </div>
                <div className='footer-links'>
                    <h4 className='text-uppercase'>what i have done:</h4>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                    Xalq Kutubxonasi
                    </Link>
                    </h5>
                    <h5>
                    <Link className='text-decoration-underline footer-s-links' to='/'>
                    Websitee
                    </Link>
                    </h5>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                    Website
                    </Link>
                    </h5>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                    Website

                    </Link>
                    </h5>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                    App Store
                    </Link>
                    </h5>
                </div>
                <div className='footer-links'>
                    <h4 className='footer-last-heading'>Contact:</h4>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                    Blog
                    </Link>
                    </h5>
                    <h5>
                    <Link className='text-decoration-underline footer-s-links' to='/'>
                    Dribbble
                    </Link>
                    </h5>
                    <h5>
                    <Link className='footer-s-links' to='/'>
                    Behance
                    </Link>
                    </h5>
                </div>
                </div>
            </div>
        </div>
    )
}