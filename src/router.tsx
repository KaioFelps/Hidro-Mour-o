import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { CampoMourao } from "./pages/CampoMourao"
import { ErrorPage } from "./pages/Error"
import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <DefaultLayout /> }>
                <Route path="/" element={ <Home /> } />
                <Route path="/campo-mourao" element={ <CampoMourao /> } />
                <Route path="/sobre" element={ <Sobre /> } />
                <Route path="*" element={ <ErrorPage /> } />
            </Route>
        </Routes>
    )
}