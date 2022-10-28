import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { BackgroundLights, BackgroundWrapper, LayoutContainer } from "./styles";
import { Footer } from "../../components/Footer";
import { GoToTop } from "../../components/GoToTop";

export function DefaultLayout() {
    return (
        <>
            <BackgroundWrapper id="bgLights">
                <BackgroundLights></BackgroundLights>
            </BackgroundWrapper>
            <LayoutContainer>
                <Header />
                <Outlet />
                <Footer />
            </ LayoutContainer>
            <GoToTop />
        </>
    )
}