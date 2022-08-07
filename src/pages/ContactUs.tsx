import React from 'react';
import Footer from '../components/Footer'

import contactUs from '../assets/images/contact-us.png';
import { ImFacebook } from 'react-icons/im';
import {  FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import NewsLetter from '../components/NewsLetter';

const ContactUs = () => {
  return (
    <>  
        <div className='w-full relative'> 
          <img className='w-full h-60 sm:h-96 md:h-[500px] object-cover object-center' src={contactUs} alt='' />
          <p className='text-3xl text-gold font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Contact Us</p>
        </div>
        <section className='grid md:grid-cols-2 gap-10 px-[5%] mt-16 mb-20'>
            <div className=''>
                <div className='ml-0 sm:ml-10 md:ml-20 tracking-wide'>
                    <p className='text-gold font-semibold'>How Can You Contact Us?</p>
                    <p className='font-bold text-2xl my-3'>Contacting Us Made Easy</p>
                    <p className='mb-5'>For Enquiries, Partnership and Donations <br className = 'hidden sm:block' />
                        please do reach us via  our various <br className = 'hidden sm:block' />
                        channels.
                    </p>
                    <div className='flex gap-2'>
                        <p className='font-semibold'>Phone:</p>
                        <div> 
                            <p>+234-7067538138</p>
                            <p>+234-8081249833</p>
                        </div>
                    </div>
                    <p className='my-5'><span className='font-semibold'>Email:</span> cvsupport@farcry.ng</p>
                    <p>
                    <span className='font-semibold'>Visit us:</span> No, 2 suleimansyd crecent, Ankpa, <br className='hidden sm:block' />
                        942 avenue Minna , Nigeria. 
                    </p>
                    <div className='mt-5'>
                        <p className="mb-3 font-semibold">
                            Follow us on:
                        </p>
                        <div className="flex gap-x-4 ">
                        <a href="#"> <ImFacebook color='coral' size={22} /> </a>
                        <a href="#"> <FaTwitter color='coral' size={22} /> </a>
                        <a href="#"> <FiInstagram color='coral' size={22} /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#D7D7DF] bg-opacity-70 px-5 md:px-10 p-10 '>
                <p className='font-bold text-2xl mb-10'>Get in Touch </p>
                <div className='flex items-end gap-3 mb-10 border-b border-b-black pb-2 mt-3'>
                    <label className='text-sm font-medium' htmlFor='name'>Name:</label>
                    <input className='bg-transparent w-full outline-none border-none pl-4' type='text' placeholder='Your fullname, lastname first' />
                </div>
                <div className='flex items-end gap-3 mb-10 border-b border-b-black pb-2 mt-3'>
                    <label className='text-sm font-medium' htmlFor='email'>Email:</label>
                    <input className='bg-transparent w-full outline-none border-none pl-4' type='email' placeholder='Your email here' />
                </div>
                <div className=''>
                    <label className='font-medium mb-2' htmlFor='message'>Message</label>
                    <textarea className='mt-1 resize-none shadow-md w-full outline-none border-none text-sm p-4 h-32 bg-white' placeholder='Type in your message here...'  />
                </div>
                <button className='hover:shadow-inner mt-10 px-12 sm:px-16 py-3 rounded-md text-white bg-[#f59134] shadow-xl'>Submit</button>
            </div>
        </section>
        <NewsLetter />
        <Footer />
    </>
  )
}

export default ContactUs