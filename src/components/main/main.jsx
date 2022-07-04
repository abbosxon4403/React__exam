import { useEffect, useState } from "react"
import './main.css'
// img
import arrow from '../../assets/img/arrow.png'
import watch from '../../assets/img/watch.png'
import { Link } from "react-router-dom"

export const Main = () => {

const [posts , setPosts] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.slice(0 , 10)))
        .catch(err => console.error(err))
    } , [])

    let fetching = fetch('https://jsonplaceholder.typicode.com/posts')

    let Pagination = (event) => {
        switch (event.target.id){
            case '1':
                fetching
                .then(res => res.json())
                .then(data => setPosts(data.slice(0 , 10)))
                break;
            case '2':
                fetching
                .then(res => res.json())
                .then(data => setPosts(data.slice(11 , 20)))
                break;
            case '3':
                fetching
                .then(res => res.json())
                .then(data => setPosts(data.slice(21 , 30)))
                break;
            case '4':
                fetching
                .then(res => res.json())
                .then(data => setPosts(data.slice(31 , 40)))
                break;
            case '5':
                fetching
                .then(res => res.json())
                .then(data => setPosts(data.slice(41 , 50)))
                break;
                default :
                fetching
                .then(res => res.json())
                .then(data => setPosts(data.slice(0 , 10)))

    }
}
    return (
        <div className="main">
        <h4 className="left-heading">Recent Posts</h4>
            {posts && posts.map(post => {
                return (
                    <div className="inner-main" key={post.id}>
                        <div className="d-flex justify-content-between">
                            <p className="main-texts">September 24.2020</p>
                            <p>{post.id}</p>
                        </div>
                        <Link className="text-decoration-none" to='/single'>
                <h5 className="main-title">{post.title}</h5>
                </Link>
                <div className="d-flex time-wrap align-items-center">
                    <img src={watch} alt="watch" />
                <p className="main-texts time">3 minutes read</p>
                </div>

                <span className="line"></span>
                    </div>
                )

            })}
            <div className="main-btn-wrapper"  onClick={Pagination}>
                    <button className="main-arrow-btn rotated-btn">
                        <img className="arrow" src={arrow} alt="arrow" />
                    </button>
                    <button id="1" className="page-btn btn btn-outline-primary">1</button>
                    <button id="2" className="page-btn btn btn-outline-primary">2</button>
                    <button id="3" className="page-btn btn btn-outline-primary">3</button>
                    <button id="4" className="page-btn btn btn-outline-primary">4</button>
                    <button id="5" className="page-btn btn btn-outline-primary">5</button>
                    <button className="main-arrow-btn">
                        <img className="arrow" src={arrow} alt="arrow" />
                    </button>
            </div>
    </div>
    )
}