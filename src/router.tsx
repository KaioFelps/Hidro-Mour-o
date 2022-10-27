import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { CampoMourao } from "./pages/CampoMourao"
import { Home } from "./pages/Home"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <DefaultLayout /> }>
                <Route path="/" element={ <Home /> } />
                <Route path="/campo-mourao" element={ <CampoMourao /> } />
            </Route>
        </Routes>
    )
}