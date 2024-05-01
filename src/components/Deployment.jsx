import React from 'react'
import bel from "../assets/bi.png"
import Line from "../assets/l.png"

const Deployment = () => {
    return (
        <>
            <section className='lg:py-[100px] py-[40px]'>
                <div className="max-w-container mx-auto">
                    <div className="lg:flex justify-between lg:p-0 p-3">
                        <div className="lg:w-[26%] bg-[#FDEDE8;] h-[135px] rounded-xl border-2 border-[#FAD0BC]">
                            <div className="flex justify-between">
                                <div className="w-[15%] mt-[47px] ml-[27px]">
                                    <img src={bel} alt={bel} />
                                </div>
                                <div className="w-[5%] mt-[25px]">
                                    <img src={Line} alt={Line} />
                                </div>
                                <div className="w-[80%]">
                                    <h2 className='text-[20px] pt-[20px] font-medium'>Immediate Deployment</h2>
                                    <p className='text-[16px] font-medium'>Et vero eos et accusamus et iusto odio dignissimos</p>
                                </div>
                            </div>
                        </div>
                      
                            <div className="lg:w-[26%] bg-[#FDEDE8;] h-[135px] rounded-xl border-2 border-[#FAD0BC] lg:mt-0 mt-6 lg:mb-0 mb-6">
                                <div className="flex justify-between">
                                    <div className="w-[15%] mt-[47px] ml-[27px]">
                                        <img src={bel} alt={bel} />
                                    </div>
                                    <div className="w-[5%] mt-[25px]">
                                        <img src={Line} alt={Line} />
                                    </div>
                                    <div className="w-[80%]">
                                        <h2 className='text-[20px] pt-[20px] font-medium'>Immediate Deployment</h2>
                                        <p className='text-[16px] font-medium'>Et vero eos et accusamus et iusto odio dignissimos</p>
                                    </div>
                                </div>
                            </div>
                  
                        <div className="lg:w-[26%] bg-[#FDEDE8;] h-[135px] rounded-xl border-2 border-[#FAD0BC]">
                            <div className="flex justify-between">
                                <div className="w-[15%] mt-[47px] ml-[27px]">
                                    <img src={bel} alt={bel} />
                                </div>
                                <div className="w-[5%] mt-[25px]">
                                    <img src={Line} alt={Line} />
                                </div>
                                <div className="w-[80%]">
                                    <h2 className='text-[20px] pt-[20px] font-medium'>Immediate Deployment</h2>
                                    <p className='text-[16px] font-medium'>Et vero eos et accusamus et iusto odio dignissimos</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Deployment
