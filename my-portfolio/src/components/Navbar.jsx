import { useEffect , useState } from "react";

export default function Navbar(){
    const [showNavbar , setShowNavbar] = useState(true);
    let lastScrollY = 0;
    let timeout;

    const controlNavbar = () => {
        if (typeof window !== "undefined"){
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY){
                setShowNavbar(false);
            }else{
                setShowNavbar(true);
            }
            lastScrollY = currentScrollY;

            clearTimeout(timeout);
            timeout = setTimeout(()=> setShowNavbar(true), 200);
        }
    };

    useEffect(()=> {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, []);

    return(
        <div className ={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 ${showNavbar ? "opacity-100" : "opacity-0 -translate-y-10"}`}
        >
            <nav className="w-[80vw] max-w-5xl bg-white/80 backdrop-blur-md rounded-2xl shadow-md px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">Mrudul Tarade</div>
                <ul className="flex space-x-6 font-medium text-gray-700">
                    <li><a href="#about" className="hover:text-blue-600">ABOUT</a></li>
                    <li><a href="#about" className="hover:text-blue-600">PROJECTS</a></li>
                    <li><a href="#about" className="hover:text-blue-600">CONTACT</a></li>
                </ul>
            </nav>
        </div>
    );
}