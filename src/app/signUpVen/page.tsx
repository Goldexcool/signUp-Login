"use client"
import React, { useState } from 'react'
import Input from '@/component/Input'
import Image from 'next/image'
import eyelock from '../../images/eye-off.svg'
import Button from '@/component/button'
// import google from '../../images/Group 11.svg'
import bg from '../../images/bg-three.svg'
import bgg from '../../images/bg-three-st.svg'
import logo from '../../images/Union (2).svg'
import Form from '@/component/form'
import emoji from '../../images/emojipng 1.svg'
import eyeOpen from '../../images/eye-off (1).svg'
import { useRouter } from 'next/navigation'
import arrowRight from '../../images/arrow-right (1).svg'


const SignUpVen = () => {
    const router = useRouter()

    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false)


    const togPasswordVis = () => {
        setPasswordVisible((prev) => !prev);
    };

    const togConfirm = () => {
        setConfirmPasswordVisible((prev) => !prev)
    }
    return (
        <div
            style={{
                backgroundImage: `url(${bg.src})`,
                width: '100%',
                height: '200vh',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'left',
            }}
            className='outer-container  responsive-div'
        >
            <section className='bg-left flex justify-center w-full bg-gradient-to-r relative  responsive-div inner-container'
                style={{
                    backgroundImage: `url(${bgg.src})`,
                    width: '100%',
                    height: '200vh',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'right',
                }}
            >
                <div className='sm:flex justify-center sm:w-fit w-[90%] mt-[3rem] md:items-start items-center'>
                    <div className='absolute left-[3%] md:top-2 top-3 justify-center items-center flex-col max-[420px]:hidden'>
                        <Image src={logo} alt='' width={120} height={120} className='md:w-[120px] md:h-[120px] sm:w-[55px] sm:h-[55px] w-[60px] h-[60px]' />
                        <p className='md:text-[20px] text-[15px] font-[700] max-[420px]:text-[12px]'>Uniclique</p>
                    </div>

                    <div className='flex items-center flex-col md:justify-start justify-center'>
                        <h1 className='md:text-[2.5rem] text-[1.5rem] font-fold font-[700] flex gap-1 items-center'>Vendor&apos;s  Profile  </h1>
                        <h2 className='md:text-[1rem] text-[.8rem] text-color1 font-[500]'>Please fill in your details</h2>
                        <div className='mt-[1rem] p-6 rounded-lg shadow-lg shadow-cyan-500/50 max-w-[100%] sm:w-[450px] bg-white w-full flex flex-col md:gap-5 gap-7' >
                            <Form labeltext='First Name' type='text' />
                            <Form labeltext='Middle Name' type='text' />
                            <Form labeltext='Last Name' type='text' />
                            <Form labeltext='Institution' type='text' />
                            <Form labeltext='Department' type='text' />
                            <Form labeltext='Matric Number' type='text' />
                            <Form labeltext='Sex' type='text' />
                            <Form labeltext='Date of Birth' type='text' />
                            <Form labeltext='Year of Entry' type='text' />
                            <Form labeltext='Email' type='email' />

                            <div className='relative'>
                                <Form labeltext='Password' type={passwordVisible ? 'text' : 'password'} />
                                <Image src={passwordVisible ? eyeOpen : eyelock} alt='' width={15} height={15} onClick={togPasswordVis} className='absolute right-[2%] flex justify-center items-center top-[57%]' />
                            </div>
                            <div className='relative'>
                                <Form labeltext='Confirm Password' type={confirmpasswordVisible ? 'text' : 'password'} />
                                <Image src={confirmpasswordVisible ? eyeOpen : eyelock} alt='' width={15} height={15} onClick={togConfirm} className='absolute right-[2%] flex justify-center items-center top-[57%]' />
                            </div>
                        </div>
                        <div className=' flex justify-center items-center  md:px-[5rem] w-[90%] py-[15px] gap-2 bg-color1 pointer text-white  rounded-[10px] mt-[10px] cursor-pointer' onClick={() => router.push('/busDes')}>
                            <p className=''>Next</p>
                            <Image src={arrowRight} alt='' width={20} height={20} className='' />
                        </div>
                        <Button style={{ fontSize: "12px", font: 'bold', padding: "15px", color: '#fff', width: '90%', marginBottom: "200px", marginTop: '10px', borderRadius: '10px' }} text='Already have an account? Sign In' onClick={() => router.push('/signInVendor')} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUpVen
