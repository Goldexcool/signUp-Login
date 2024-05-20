"use client"
import React, { useState } from 'react'
import Input from '@/component/Input'
import Image from 'next/image'
import eyelock from '../../images/eye-off.svg'
import Button from '@/component/button'
// import google from '../../images/Group 11.svg'
import bg from '../../images/BG-st-2.svg'
import bgg from '../../images/Bg-tt.svg'
import logo from '../../images/Union (2).svg'
import Form from '@/component/form'
import emoji from '../../images/emojipng 1.svg'
import { useRouter } from 'next/navigation'
import arrowRight from '../../images/arrow-right (1).svg'
import chevdown from '../../images/chevron-down (1).svg'
import Select from '@/component/dropDown'
import DropDown from '@/component/dropDown'
import SelectForm from '@/component/selectForm'
// import './styles.css'  // Import the CSS file



const BusDets = () => {
    const router = useRouter()
    const [openMenu, setOpenMenu] = useState(false)
    

    const texts = [
        'Both',
        'Products',
        'Services',
    ];

    const text = [
        'Shoes',
        'Food',
        'Stationary',
        "Bags",
        'Photography',
        'Clothes'
    ];


    const handleOpen = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div
            style={{
                backgroundImage: `url(${bgg.src})`,
                width: '100%',
                height: '100vh',
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
            }}
            className='outer-container'
        >
            <section className='bg-left flex justify-center w-full bg-gradient-to-r relative inner-container'
                // style={{
                //     backgroundImage: `url(${bg.src})`,
                //     width: '100%',
                //     height: '100vh',
                //     backgroundRepeat: "no-repeat",
                //     backgroundPosition: 'right',
                // }}
            >
                <div className='sm:flex justify-center sm:w-fit w-[90%] lg:mt-[3rem] md:mt-[6rem] mt-[3.5rem]  md:items-start items-center'>
                    <div className='absolute left-[3%] md:top-2 top-3 justify-center items-center flex-col max-[420px]:hidden'>
                        <Image src={logo} alt='' width={120} height={120} className='md:w-[120px] md:h-[120px] sm:w-[55px] sm:h-[55px] w-[60px] h-[60px]' />
                        <p className='md:text-[20px] text-[15px] font-[700] max-[420px]:text-[12px]'>Uniclique</p>
                    </div>

                    <div className='flex items-center flex-col md:justify-start justify-center'>
                        <h1 className='md:text-[2.5rem] text-[1.5rem] font-fold font-[700] flex gap-1 items-center'>Business Details</h1>
                        <h2 className='md:text-[1rem] text-[.8rem] text-color1 font-[500] text-center'>Please provide specific details about
                            your business.</h2>
                        <div className='mt-[1rem] p-6 rounded-lg shadow-lg shadow-cyan-500/50 max-w-[100%] sm:w-[450px] bg-white w-full flex flex-col md:gap-5 gap-7' >
                            <Form labeltext='Business Name' type='text' style={{
                                padding: '5px',
                                boxSizing: 'border-box',
                                border: '2px solid ##590209',
                            }} />
                            <Form
                                labeltext='Business Description'
                                type='textarea'
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    padding: '5px',
                                    boxSizing: 'border-box',
                                    border: '2px solid ##590209',
                                    resize: 'none'
                                }}
                            />

                            <SelectForm
                                labeltext='Do you offer a Product/Service?'
                                type='select'
                                style={{
                                    padding: '5px',
                                    boxSizing: 'border-box',
                                    border: 'px solid #590209',
                                    resize: 'none',
                                }}
                                options={texts}
                            />
                            <SelectForm
                                labeltext='Select Product/Service Category
                                that represents your
                                product/service'
                                type='select'
                                style={{
                                    padding: '5px',
                                    boxSizing: 'border-box',
                                    border: 'px solid #590209',
                                    resize: 'none',
                                }}
                                options={text}
                            />


                            {/* <div className='relative'>
                                <Form labeltext='Do you offer  a Product/Service?' type='text' style={{
                                    padding: '5px',
                                    boxSizing: 'border-box',
                                    border: '2px solid #590209',
                                    resize: 'none',
                                    position: 'relative',
                                }} />
                                <Image src={chevdown} alt='' width={20} height={20} className='absolute top-9 cursor-pointer right-1' onClick={handleOpen} />
                            </div> */}

                            {/* {
                                openMenu && (
                                    <select>
                                        <option>
                                            Both
                                        </option>
                                        <option>
                                            Both
                                        </option>
                                    </select>

                                )
                            } */}
                            <div>

                            </div>

                            {/* {
                                openMenu && (
                                    <div className={`dropdown-container ${openMenu ? 'open' : ''}`} 
                                        style={{ top: '80%', right: '12%', zIndex: 40 }} // Maintain inline styles for specific needs
                                    >
                                        <DropDown texts={texts} />
                                    </div>
                                )
                            } */}

                        </div>
                        <div className='flex justify-center items-center px-[7rem] py-2 gap-2 bg-color1 pointer text-white mb-[2rem] mt-[1rem] rounded-3xl cursor-pointer' onClick={() => router.push('vendorVer')}>
                        <p className=''>Next</p>
                        <Image src={arrowRight} alt='' width={20} height={20} className='' />
                    </div>
                        {/* <Button text="Next" style={{ marginBottom: "20px", borderRadius: "2rem", backgroundColor: "#590209", fontSize: "12px", font: 'bold', padding: "15px", color: '#fff', width: "70%", marginTop: '1rem' }}  onClick={() => router.push('vendorVer')}/> */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default BusDets
