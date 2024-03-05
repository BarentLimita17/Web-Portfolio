// import { Helmet } from "react-helmet";
import useScript from '../../hooks/useScript';

function Banner() {
    useScript('/src/javascript.js');
    return (
        <>
            {/* <Helmet>
                <script src="/src/javascript.js"></script>
            </Helmet> */}
            <section className='banner py-[70px] px-[0px] bg-stone-700'>
                <div className='container w-[90%] mx-[auto] my-[30px]'>
                    <div className='banner-left pl-[24px]'>
                        <img src="/images/Barent.jpg" className='w-[300px] mb-[20px] rounded-xl shadow-white shadow-2xl' id='barentPhoto' alt="" />
                        <h2 className='text-white mb-[10px] text-4xl'>
                            Hey...<br />
                            I&apos;m a <span className='typeEffect text-black'></span>
                        </h2>
                        <p className='text-white text-2xl'>
                            Welcome to my Portfolios website
                        </p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Banner;