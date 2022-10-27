import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { BackgroundLights, BackgroundWrapper, LayoutContainer } from "./styles";
import bgLights from "../../../public/bg-lights-image.png"
import { Footer } from "../../components/Footer";
import { GoToTop } from "../../components/GoToTop";

export function DefaultLayout() {
    return (
        <>
            <BackgroundWrapper>
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