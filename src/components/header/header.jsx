import { Link } from 'react-router-dom'
import logo from './../../assets/img/logo.png'
import search from './../../assets/img/search.png'
import menu from '../../assets/img/menu.png'
import close from '../../assets/img/close.png'
import './header.css'
import { useState } from 'react'

export const Header = () => {
    let [Menu ,setMenu] = useState(false)
    let HandleMenu = () => {
        setMenu(true)
    }
    let ReMenu = () =>{
        setMenu(false)
    }

    return (
        <div className='container'>

        <header className='header'>
            <div className="d-flex justify-content-between">
            <div className="d-flex header-max">
            <img className='login-logo cursor' src={logo} alt="logo" />
                <h3 className='cursor'>BoburBlog</h3>
            </div>
            <button className='menu' onClick={HandleMenu}>
                <img className='' src={menu} alt="menu" />
            </button>
            <div className={`${Menu ? 'd-block show-menu' : 'd-none'}`}>
            <div className="menu-head">

                <div className="d-flex header-max">
                <img className='login-logo cursor' src={logo} alt="logo" />
                <h3 className='cursor'>BoburBlog</h3>
                </div>
                <button className='btn-menu' onClick={ReMenu}>
                    <img src={close} alt="close" />
                </button>

            </div>
                <div className='text-center menu-text-wrap'>
                    <h4 className='mb-5'>
                    <Link className='menu-text' onClick={ReMenu} to='/'>All</Link>
                    </h4>
                    <h4 className='mb-5'>
                    <Link className='menu-text' onClick={ReMenu} to='/'>Category</Link>
                    </h4>
                    <h4 className='mb-5'>
                    <Link className='menu-text' onClick={ReMenu} to='/'>UX</Link>
                    </h4>
                    <h4 className='mb-5'>
                    <Link className='menu-text' onClick={ReMenu} to='/'>UI</Link>
                    </h4>
                    <h4 className='mb-5'>
                    <Link className='menu-text' onClick={ReMenu} to='/'>Typography</Link>
                    </h4>
                </div>
            </div>
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