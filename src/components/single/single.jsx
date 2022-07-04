import { useEffect, useState } from "react"
import { Footer } from "../footer"
import { Header } from "../header"
import './single.css'
// img
import watch from '../../assets/img/watch.png'
import wall from '../../assets/img/wall.png'
import { Link } from "react-router-dom"

export const Single = () => {
    let [posts , setPosts] = useState(null)
    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.slice(6 , 9)))
        .catch(error => console.log(error.length + 'error length'))
     })
    return (
        <section>
            <Header />
            <div className="container single-cont">
                <h3>Bad Design vs. Good Design: 5 Examples We can Learn From</h3>
                <div className="d-flex align-items-center">
                        <p className="main-texts">October 24.2020</p>
                        <div className="d-flex time-wrap align-items-center ms-4">
                <img src={watch} alt="watch" />
            <p className="main-texts time">3 minutes read</p>
            </div>
                    </div>
                <img className="wall" src={wall} alt="wall" />
                <p className="single-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
                <h5 className="single-info my-4">Information overload</h5>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
Information overload
Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.</p>

            <div className="d-flex single-wrap">
                <span className="single-line"></span>
                <div className="wrap2">

                <p className="single-text single-wrap-t">Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin <a href="https://elit.uz">elit.uz</a> nulla, viverra id suscipit quis, tristique a dolor.
                </p>
                <em className="single-em">`Designing For Sustainability, Tim Frick, 2014'</em>
                </div>
            </div>


            <h5 className="single-info my-4">Lessons Learnt: Best Practice</h5>
            <ul className="single-list">
        <li className="single-text">Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</li>
        <li className="single-text">Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</li>
            </ul>


            <h4 className="">More like this</h4>

                {posts && posts.map(post => {
                    return (<div className="inner-main" key={post.id}>
                    <div className="d-flex justify-content-between">
                        <p className="main-texts">October 24.2020</p>
                        <p>{post.id}</p>
                    </div>
                    <Link className="text-decoration-none" to='/'>
            <h5 className="main-title">{post.title}</h5>
                    </Link>
            <div className="d-flex time-wrap align-items-center">
                <img src={watch} alt="watch" />
            <p className="main-texts time">3 minutes read</p>
            </div>

            <span className="line"></span>
                </div>
                )})}
            </div>
            <Footer />
        </section>
    )
}