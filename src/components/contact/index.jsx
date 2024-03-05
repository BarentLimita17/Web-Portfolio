function Contact() {
    return (
        <section id="contact" className='contact flex justify-center pb-[70px] mx-[auto] text-sm bg-gray-500'>
            <div className='container w-[90%] mx-[auto] my-[10px]'>
                <h3 className='flex relative pt-[60px] pb-[20px] my-[20px] mx-0 items-center justify-center text-3xl'>Contact</h3>
                <div className='column5 sm:w-[25%] w-[100%] box-border float-left text-center px-[10px] py-[50px]'>
                    <h4 className='text-2xl text-bold'>Address</h4>
                    <hr className='mb-[20px] mt-[10px]' />
                    <p className='text-base'>Jl. Iskandar Muda, Tangerang, Banten</p>
                </div>
                <div className='column5 sm:w-[25%] w-[100%] box-border float-left text-center px-[10px] py-[50px]'>
                    <h4 className='text-2xl text-bold'>Email</h4>
                    <hr className='mb-[20px] mt-[10px]' />
                    <p className='text-base'>Barentlimita11@gmail.com</p>
                </div>
                <div className='column5 sm:w-[25%] w-[100%] box-border float-left text-center px-[10px] py-[50px]'>
                    <h4 className='text-2xl text-bold'>Phone</h4>
                    <hr className='mb-[20px] mt-[10px]' />
                    <p className='text-base'>+62 813 1015 9228</p>
                </div>
                <div className='column5 sm:w-[25%] w-[100%] box-border float-left text-center px-[10px] py-[50px]'>
                    <h4 className='text-2xl text-bold'>Instagram</h4>
                    <hr className='mb-[20px] mt-[10px]' />
                    <p className='text-base'>@barentlimita</p>
                </div>
            </div>
        </section>
    )
}

export default Contact