import { Footer, Header, LeftMain, Main } from "./components"
import './private.css'

export const Private = () => {

    return (
        <section>

        <div className="container">
            <Header />
            <div className="big container d-flex">
            <LeftMain />
            <Main />
            </div>
        </div>
            <Footer />
        </section>
    )
}