import CloneGrab from '../../images/CloneGrab.png'
import CompanyProfile from '../../images/CompanyProfile.png'
import PortfolioWebBarent from '../../images/PortfolioWebBarent.jpg'

function Portfolio() {
    return (
        <section id="portfolio" className='portfolio flex justify-center pb-[70px] mx-[auto] text-sm bg-stone-300'>
            <div className='container w-[90%] mx-[auto] my-[30px]'>
                <h3 className='flex relative pt-[70px] pb-[50px] my-[20px] mx-0 items-center justify-center text-4xl'>Portfolio</h3>
                <div className='column4 sm:w-[25%] w-[100%] box-border px-[20px] py-[5px] mb-[15px] float-left text-center'>
                    <a href="">
                        <img className=' w-[100%] h-[150px] rounded mb-[10px] hover:scale-150 hover:duration-1000' src={PortfolioWebBarent} alt="" />
                        <span className='text-xl'>Selfmade ReactJS Web Portfolio</span>
                    </a>
                </div>
                <div className='column4 sm:w-[25%] w-[100%] box-border px-[20px] py-[5px] mb-[15px] float-left text-center'>
                    <a href="">
                        <img className='w-[100%] h-[150px] rounded mb-[10px] hover:scale-150 hover:duration-1000' src={CompanyProfile} alt="" />
                        <span className='text-xl'>Company Profile</span>
                    </a>
                </div>
                <div className='column4 sm:w-[25%] w-[100%] box-border px-[20px] py-[5px] mb-[15px] float-left text-center'>
                    <a href="">
                        <img className='w-[100%] h-[150px] rounded mb-[10px] hover:scale-150 hover:duration-1000' src={CloneGrab} alt="" />
                        <span className='text-xl'>Grabfood website cloning</span>
                    </a>
                </div>
                <div className='column4 sm:w-[25%] w-[100%] box-border px-[20px] py-[5px] mb-[15px] float-left text-center'>
                    <a href="">
                        <img className='w-[100%] h-[150px] rounded mb-[10px] hover:scale-150 hover:duration-1000' src={PortfolioWebBarent} alt="" />
                        <span className='text-xl'>Selfmade ReactJS Web Portfolio</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio