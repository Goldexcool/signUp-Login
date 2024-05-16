"use client"
import React, { useState, useRef, useEffect } from 'react';
import bg from '../../images/BG-st-3.svg'
import bgg from '../../images/BG-secondtype.svg'
import logo from '../../images/Union (2).svg'
import Image from 'next/image'
import InputVer from '@/component/inputVer'
import Button from '@/component/button';
import arrowRight from '../../images/arrow-right (1).svg'
import verfied from '../../images/icons8-verified-100 1.svg'
import { useRouter } from 'next/navigation'


const EmailVer = () => {
    const someRef = useRef<HTMLInputElement>(null);
    const [inputs, setInputs] = useState<Array<React.RefObject<HTMLInputElement>>>([]);
    const [focusedIndex, setFocusedIndex] = useState<number>(0);
    const [openSus, setOpenSus] = useState(false);

    const router = useRouter()


    // Specify the type of 'focusedIndex'
    const handleInputFilled = (value: string) => {
        // Update input value and move focus (if possible)
        if (focusedIndex < inputs.length - 1) {
            const nextInput = inputs[focusedIndex + 1];
            if (nextInput && nextInput.current) {
                nextInput.current.value = value;
                nextInput.current.focus();
                setFocusedIndex(prevIndex => prevIndex < inputs.length - 1 ? prevIndex + 1 : prevIndex);
            }
        }

    };

    const handleInputRef = (ref: React.RefObject<HTMLInputElement>) => {
        setInputs((prevInputs) => [...prevInputs, ref]);
    };

    useEffect(() => {
        // Focus the first input on initial render
        if (inputs.length > 0 && inputs[0] && inputs[0]?.current) {
            inputs[0].current.focus();
        }
    }, [inputs]);
    return (
        <div style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '100vh',
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'right',
        }} className={openSus ? 'top-0 left-0 duration-100 ease-in-out z-[100] fixed inset-0 bg-black/40' : 'outer-container'}>
            <section className={openSus ? 'relative bg-gradient-to-r from-gray-800 to-gray-900 h-[100vh] w-[100vw] overflow-hidden' : 'bg-left flex justify-center  w-full bg-gradient-to-r relative inner-container h-[100vh]'} style={{
                backgroundImage: `url(${bgg.src})`,
                width: '100%',
                height: '100vh',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'left',
            }} >
                <div className='sm:flex justify-center sm:w-fit  md:mt-[1rem] mt-[0.5rem]'>
                    <div className='absolute left-[3%] md:top-2 top-3 justify-center items-center flex-col max-[340px]:hidden'>
                        <Image src={logo} alt='' width={120} height={120} className='md:w-[120px] md:h-[120px] sm:w-[55px] sm:h-[55px] w-[70px] h-[70px]' />
                        <p className='md:text-[20px] text-[15px] font-[700] max-[340px]:text-[13px]'>Uniclique</p>
                    </div>
                </div>
                <div className='flex w-full justify-center items-center md:mt-[1rem] mt-[0.1rem] flex-col '>
                    <div className={ openSus ? 'mt-[5rem]' :'flex items-center flex-col mt-[0.2rem]'}>
                        <h1 className='md:text-[3.5rem] text-[2.5rem] font-fold font-[700] flex gap-1 items-center text-center'>Email Verification</h1>
                        <h2 className='md:text-[1rem] text-[.8rem] text-color1 font-[700] md:w-[75%] w-[85%] text-center font-mon'>Enter your OTP code here</h2>
                    </div>
                    <div className="flex w-full justify-center md:gap-10 gap-5 items-center md:mt-[2.5rem] mt-[0.75rem]">
                        {Array(5)
                            .fill(null)
                            .map((_, index) => (
                                <InputVer
                                    key={index}
                                    onInputFilled={handleInputFilled}
                                    ref={someRef} 
                                />
                            ))}
                    </div>
                    <p className='md:text-[15px] text-[12px] text-color1 mt-[2rem]'>Didn&apos;t you receive any code?</p>
                    <p className='md:text-[15px] text-[12px] text-color1 font-bold mt-[0.5rem]'>Resend a new code.  </p>
                   
                    <div className='flex justify-center items-center px-[5rem]  py-2 gap-2 bg-color1 pointer text-white mb-[2rem] md:mt-[3rem] mt-[2rem] rounded-3xl cursor-pointer' onClick={() => router.push('/newPass')}>
                        <p className=''>Next</p>
                        <Image src={arrowRight} alt='' width={20} height={20} className='' />
                    </div>
                </div>
                
                
            </section>

        </div>
    )
}

export default EmailVer
