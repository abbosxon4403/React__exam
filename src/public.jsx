import { Route, Routes } from "react-router-dom"
import { Home, Signin } from "./module/public"
import { Private } from "./private"

export const Public = () => {
    console.log(Private, Home);
    return (
    <div>
        <Routes>
        <Route path="/" element={<Signin />}/>
        </Routes>
        </div>

    )
}