import { Outlet } from "react-router-dom"
import MainNavigation from "../Components/MainNavigation"

const RootLayout = () => {
    return (
        <>
            <section className="h-screen bg-[#ffffff]">
                <MainNavigation />
                <main className="h-[90%]">
                    <Outlet />
                </main>
            </section>
        </>
    )
}

export default RootLayout