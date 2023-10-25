
const Navbar = () => {

    const links = <>
        <li><a href="">Home</a></li>
        <li>
            <a href="">Aboute</a>
        </li>
    </>
    return (
        <div>

            <div className="bg-black">
                <div className="navbar py-8 max-w-7xl mx-auto  text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow  text-white w-52 font-semibold">
                                {links}
                            </ul>
                        </div>
                        <div className="lg:block hidden">
                            <div className="flex items-center ">
                                <img className="w-[70px] h-[70px] rounded" src="https://i.ibb.co/qCD249w/electronic-logo-260nw-737605000.jpg" alt="" />
                                <h1 className="ml-5 font-bold text-4xl text-[#ea580c] font-berkshire">rf-Shopping </h1>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex space-x-5 text-2xl text-white font-semibold">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                    <button className="text-2xl text-white px-7 py-2 font-bold bg-[#16a34a] hover:bg-gray-500 hover:rounded-full rounded">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;