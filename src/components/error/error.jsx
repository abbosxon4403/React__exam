import { Link } from 'react-router-dom'
import errorImg from '../../assets/img/error.png'
import { Footer } from '../footer'
import { Header } from '../header'
import './error.css'
import arrow from '../../assets/img/arrow.png'

export const Error = () => {
    return (
        <section>
            <Header />
            <div className="container text-center error-cont">
                <img className='error-img' src={errorImg} alt="error img" />
                <h4 className='error-heading'>Page not found - 404</h4>
                <p className='error-text'>This page not found (deleted or never exists).Try a phrase in search box or back to home and start again.</p>
                <Link to='/' className='error-link'><h5 className='error-link-text'>Take me more!</h5>
                <img src={arrow} alt="arrow" /></Link>
            </div>
            <Footer />
        </section>
    )
}