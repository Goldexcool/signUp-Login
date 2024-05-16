"use client"
import React, { useState } from 'react'
import Input from '@/component/Input'
import Image from 'next/image'
import eyelock from '../../images/eye-off.svg'
import Button from '@/component/button'
import google from '../../images/Group 11.svg'
import bg from '../../images/BG-st-2.svg'
import bgg from '../../images/BG-secondtype.svg'
import logo from '../../images/Union (2).svg'
import { useRouter } from 'next/navigation'
import eyeOpen from '../../images/eye-off (1).svg'
import InputPass from '@/component/passInput'
import arrowRight from '../../images/arrow-right (1).svg'
import sync from '../../images/synchronize 1.svg'



const NewPas = () => {
    const router = useRouter()

    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(!modalOpen)

    }

    return (
        <div style={{
            backgroundImage: `url(${bgg.src})`,
            width: '100%',
            height: '100vh',
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'left',
        }} className='outer-container'>
            <section className='bg-left flex justify-center w-full bg-gradient-to-r relative inner-container h-[100vh]' style={{
                backgroundImage: `url(${bgg.src})`,
                width: '100%',
                height: '100vh',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'right'
            }} >
                <div className='sm:flex justify-center sm:w-fit w-[90%] mt-[2rem]'>
                    <div className='absolute left-[3%] md:top-2 top-3 justify-center items-center flex-col max-[420px]:hidden'>
                        <Image src={logo} alt='' width={120} height={120} className='md:w-[120px] md:h-[120px] sm:w-[55px] sm:h-[55px] w-[60px] h-[60px]' />
                        <p className='md:text-[20px] text-[15px] font-[700] max-[420px]:text-[12px]'>Uniclique</p>
                    </div>
                    <div className='flex items-center flex-col mt-[3rem]'>
                        <h1 className='md:text-[3rem] text-[1.5rem] font-fold font-[700]'>New Password</h1>
                        <h2 className='md:text-[1rem] text-[.7rem] text-color1 font-[700] text-center font-mon'>Please enter your new password</h2>
                        <div className='mt-[3rem]  max-w-[100%] sm:w-[450px] w-full flex flex-col gap-[1rem]' >
                            <InputPass placeholder='New Password' type='email' style={{ width: '100%', padding: "10px", cursor: 'pointer', borderRadius: '30px', backgroundColor: '#DDDDDD' }} />
                            <InputPass placeholder='Confirm Password' type='email' style={{ width: '100%', padding: "10px", cursor: 'pointer', borderRadius: '30px', backgroundColor: '#DDDDDD' }} />
                            <div className='flex justify-center items-center w-full' >
                                <div className=' flex justify-center items-center mt-[3rem] px-[5rem] py-2 gap-2 bg-color1 pointer text-white  rounded-3xl cursor-pointer' onClick={handleModal}>
                                    <p className=''>Next</p>
                                    <Image src={arrowRight} alt='' width={20} height={20} className='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 p-2 md:p-0">
                    <div className="bg-white shadow-2xl rounded-[20px] p-4 flex flex-col gap-4 justify-center items-center">
                        <Image src={sync} alt="" width={120} height={120} />
                        <p className="text-[18px] text-center font-bold md:w-[70%] w-full">Your email has successfully been verified</p>
                        <p className="text-[17px] text-center md:w-[80%] w-full">You&apos;ll be redirected to the login page shortly</p>
                        <Button text="Done" style={{ marginBottom: "20px", borderRadius: "2rem", backgroundColor: "#590209", fontSize: "12px", font: 'bold', padding: "15px", color: '#fff', width: "70%", }} onClick={handleModal}/>
                    </div>
                </div>
            )}
        </div>

    )
}

export default NewPas
