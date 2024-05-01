import React from 'react'
import Bell from "../assets/bell.png"
import Ban from "../assets/banner.png"

const Banner = () => {
    return (
        <>
            <section className='font-pops'>
                <div className="max-w-container mx-auto">
                    <div className="lg:flex justify-between p-3 lg:p-0">
                        <div className="lg:w-[50%]">
                            <img className='lg:pt-[100px] pt-[50px]' src={Bell} alt={Bell} />
                            <h2 className='text-[36px] lg:pt-[30px] pt-[20px] pb-[20px] lg:pb-[30px] font-medium lg:w-[500px]'>Empowering startups to fuel their business growth</h2>
                            <p className='text-[18px] lg:w-[529px] h-[84px]'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                                velit
                                nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                            <div className="mt-[25px]">
                                <a className='px-[40px] text-white lg:py-[10px] rounded lg:bg-[#EA580C]' href="">Get started now</a>
                            </div>
                        </div>
                        <div className="lg:w-[35%]">
                            <img src={Ban} alt={Ban} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
