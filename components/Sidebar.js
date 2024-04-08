import { useContext, createContext, useState, useEffect } from "react"
import { FaTimes, FaStream, FaBars } from "react-icons/fa"
import { CiBellOn } from "react-icons/ci";


import { useNavigate } from "react-router-dom";

const SidebarContext = createContext()

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(window.innerWidth >= 768);

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            const isMdOrLarger = window.innerWidth >= 768;
            setExpanded(isMdOrLarger); // Update state based on screen size
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [expanded]); // Only run when `expanded` state changes


    return (
        <>
            <div className="topbar">
                <div className="bg-[#F8FAFF]">
                    <div className="flex-col flex">
                        <div className="w-full">
                            <div className="bg-white md:bg-[#F8FAFF] md:mt-4 h-16 justify-between items-center mx-auto px-4 flex">
                                <div className="md:hidden">
                                    <button
                                        onClick={() => setExpanded((curr) => !curr)}
                                        className="p-1.5 rounded-lghover:bg-gray-100 text-gray-500"
                                    >   <FaBars className="block btn- h-8 w-auto" />
                                    </button>

                                </div>

                                <div>
                                    <img src={'./logo/logo2.png'} className="block btn- h-8 w-auto px-4" />
                                </div>
                                <div>
                                    <h5 className="text-xl font-semibold mb-1">Base</h5>
                                </div>
                                <div className="justify-center items-center ml-auto mr-auto flex">
                                    <h5 className="hidden md:flex text-xl font-semibold mb-1">Upload CSV File</h5>
                                </div>

                                <div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
                                    <div className="relative">
                                        <CiBellOn className="block btn- h-8 w-auto" />
                                    </div>
                                    <div className="justify-center items-center flex relative">
                                        <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                                            className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300" alt="" onClick={() => { navigate('/') }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className={`h-screen ${expanded ? "flex" : "hidden"} ${expanded && "absolute top-0 left-0 z-10"} md:flex`}>
                <nav className="h-full flex flex-col bg-white shadow-sm rounded-2xl md:rounded-none">
                    <div className="p-4 pb-2 flex justify-between items-center  md:mt-3">
                        <div className={`flex space-x-3   ${expanded ? "flex md:text-4xl" : "hidden"}`}>
                            <img
                                src={'./logo/logo2.png'}
                                className={`overflow-hidden transition-all ${expanded ? "w-[15%] md:w-[30%]" : "w-0"
                                    }`}
                                alt=""
                            />
                            <label className="font-semibold md:mt-1">Base</label>
                        </div>
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="md:hidden p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                            {expanded ? <FaTimes /> : <FaStream />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3 text-gr">
                            {children}
                        </ul>
                    </SidebarContext.Provider>
                </nav>
            </aside>
        </>
    )
}


export function SidebarItem({ icon, text, active }) {
    const { expanded } = useContext(SidebarContext)

    return (
        <div className={` ${!expanded ? "hidden" : null} `}>
            <li className={` relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
                    ? "bg-gradient-to-tr from-gray-100 to-gray-200 text-[#605BFF]"
                    : "hover:bg-gray-50 text-gray-400"
                }`}>
                {icon}
                <span className="w-52 ml-3">{text}</span>
            </li>
        </div>
    )
}