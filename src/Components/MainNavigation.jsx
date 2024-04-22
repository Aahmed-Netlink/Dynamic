import { NavLink } from "react-router-dom"

const MainNavigation = () => {
    return (
        <>
            <header className="h-[10%] bg-[#334D50] text-[#F9A03F] flex shadow-sm items-center p-5">
                <nav className="flex w-svw">
                    <span className="flex justify-start w-[15%] font-bold text-xl">
                        FORM MAKER
                    </span>
                    <ul className="flex flex-row gap-8 justify-end w-[85%] font-semibold text-lg">
                        <li>
                            <NavLink
                                to='/Dynamic/'
                                end
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Dynamic/form-page'
                            >
                                FORM PAGE
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainNavigation