import { Link } from 'react-router-dom'
import logo from './../../assets/img/logo.png'
import search from './../../assets/img/search.png'
import './header.css'

export const Header = () => {
    return (
        <div className='container'>

        <header className='header'>
            <div className="d-flex">
            <img className='login-logo cursor' src={logo} alt="logo" />
                <h3 className='cursor'>BoburBlog</h3>
            </div>
            <nav className='header-nav'>
                <Link className='header-links' to='/1ef'>
                <li>All</li>
                </Link>
                <Link className='header-links' to='/2fg2d'>
                <li>Design Theory</li>
                </Link>
                <Link className='header-links' to='/34edw'>
                <li>UX</li>
                </Link>
                <Link className='header-links' to = '/34fdw'>
                <li>UI</li>
                </Link>
                <Link className='header-links' to = '/3rese'>
                <li>Typography</li>
                </Link>
            </nav>

        <div>

            <input className='header-input' type="text" placeholder='Search' />
            <button className='header-search'>
                <img src={search} alt="search" />
            </button>
        </div>

        </header>
        </div>
    )
}