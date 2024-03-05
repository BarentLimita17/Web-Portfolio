function Header() {
    return (
        <>
            <header className='h-[70px] flex items-center'>
                <div className="container w-[90%] mx-[auto] my-[10px] after:content-[''] after:block after:clear-both">
                    <h1 className='font-Georgia inline-block px-[24px] py-[15px] text-4xl'><a href="">Barent Limita</a></h1>
                    <ul className='float-right hidden lg:block'>
                        <li className='inline-block px-[24px] py-[24px]'>
                            <a className='decoration-0 text-black text-2xl hover:duration-300 hover:text-red-500 hover:font-medium hover:text-3xl' href="#about">About</a>
                        </li>
                        <li className='inline-block px-[24px] py-[24px]'>
                            <a className='decoration-0 text-black text-2xl hover:duration-300 hover:text-red-500 hover:font-medium hover:text-3xl' href="#skills">Skills</a>
                        </li>
                        <li className='inline-block px-[24px] py-[24px]'>
                            <a className='decoration-0 text-black text-2xl hover:duration-300 hover:text-red-500 hover:font-medium hover:text-3xl' href="#portfolio">Portfolios</a>
                        </li>
                        <li className='inline-block px-[24px] py-[24px]'>
                            <a className='decoration-0 text-black text-2xl hover:duration-300 hover:text-red-500 hover:font-medium hover:text-3xl' href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;