import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "../Users";
import LoginPage from "../LoginPage";

function Router() {

    let page = [
        {
            path: '/',
            element: <Users />
        },
        {
            path: 'login',
            element: <LoginPage />
        }]

    return (
        <BrowserRouter>
            <Routes>
                {
                    page.map((cv,idx,arr)=>{
                        return (<Route key={idx} path={cv.path} element={cv.element} />)
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}
export default Router;