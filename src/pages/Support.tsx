import { useState } from 'react';


import Footer from '../components/Footer'
import contactUs from '../assets/images/contact-us.png';
import NewsLetter from '../components/NewsLetter';
import SwiperComponent from '../components/Swiper';
import { BiArrowBack } from 'react-icons/bi';

const Support = () => {
    const [getSupport, setGetSupport] = useState(false);
  return (
    <>  
        <div className='w-full relative'> 
          <img className='w-full h-60 sm:h-96 md:h-[500px] object-cover object-center' src={contactUs} alt='' />
          <p className='text-3xl whitespace-nowrap text-gold font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Get Support Today</p>
        </div>
        <section className=' px-[5%] mt-16 mb-20'>
            <div>
                <p className='text-gold mb-3 font-semibold'>Need Support?</p>
               {
                   getSupport  ? 
                   <p className='font-bold text-xl'>Support Form</p>:
                   <p className='font-bold text-xl'>Our Support System</p>
               } 
            </div>
           { getSupport === false ? <div className='grid md:grid-cols-3 gap-5 lg:gap-10 mt-10'>
                <div className=' flex flex-col bg-[#d9daff]'>
                    <div className='border-b p-5 px-8'>
                        <p className='text-xl font-semibold mb-4'>Support</p>
                        <p className='mb-2'>our support Groups serves as save space you.</p>
                        <p>Reach out so as to connect or share and get help with what is bordering you today</p>
                    </div>
                    <div className='flex flex-1 h-fi px-8 items-end'>
                        <button onClick = {() => setGetSupport(true)} className='my-5 w-fit mr-auto ml-[unset] px-10 py-[10px] rounded-md text-white bg-gold '>Get Started</button>
                    </div>
                </div>
                <div className=' flex flex-col bg-[#d9daff]'>
                    <div className='border-b p-5 px-8'>
                        <p className='text-xl font-semibold mb-4'>Get Educated</p>
                        <p>this is to help by providing assistance needed for person within 
                            Nigeria that were displaced due to War or Natural disaster</p>
                    </div>
                    <div className='flex flex-1 h-fit px-8 items-end'>
                        <button onClick = {() => setGetSupport(true)} className=' my-5 w-fit mr-auto ml-[unset] px-10 py-[10px] rounded-md text-white bg-gold '>Get Started</button>
                    </div>
                </div>
                <div className=' flex flex-col bg-[#d9daff]'>
                    <div className='border-b p-5 px-8'>
                        <p className='text-xl font-semibold mb-4'>Get Educated</p>
                        <p>this is to help by providing assistance needed for person within 
                            Nigeria that were displaced due to War or Natural disaster</p>
                    </div>
                    <div className='flex flex-1 h-fit px-8 items-end'>
                        <button onClick = {() => setGetSupport(true)} className=' my-5 w-fit mr-auto ml-[unset] px-10 py-[10px] rounded-md text-white bg-gold '>Get Started</button>
                    </div>
                </div>
            </div>  
            : 
            <div className='relative sm:w-[500px] lg:w-[700px] mx-auto bg-[#f5f6fa] bg-opacity-75 px-5 !py-16 sm:p-10 mt-10'>
              <div onClick={() => setGetSupport(false)} className="absolute top-5 left-6 sm:left-1/2 lg:left-16 hover:font-semibold cursor-pointer flex items-center gap-2 -translate-x-3 sm:-translate-x-4">
                <BiArrowBack />
                <span>Go back</span>
              </div>
              <div className='sm:w-[450px] mt-10 mx-auto'>
                <p className='font-medium mb-16 text-center'>We are here for  you. Please fill <br />
                    the form below     
                </p>
                <form className='w-full flex flex-col gap-10'>
                    {/* option */}
                    <div className='relative border-b border-b-black pb-2 w-full'>
                        <select className='bg-transparent font-semibold border-none outline-none appearance-none w-full'>
                          <option value='your_age'>Options</option>
                          <option value='Option 1'>Option 1</option>
                          <option value='Option 2'>Option 2</option>
                          <option value='Option 3'>Option 3</option>
                        </select>
                        <div className='orange-triangle-down'></div>
                    </div>
                    {/* name */}
                    <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-3'>
                      <label className='text-sm font-medium' htmlFor='name'>Name:</label>
                      <input className='bg-transparent w-full outline-none border-none ' type='text' placeholder='Your fullname, lastname first' />
                    </div>
                    {/* gender */}
                    <div className='flex items-center gap-4'>
                        <p className='font-medium '>Gender:</p>
                        <div className='flex items-center gap-1'>
                            <input type='radio' name='gender' id='male' />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type='radio' name='gender' id='female' />
                            <label htmlFor='female'>Female</label>
                        </div>
                    </div>
                    {/* phone number */}
                    <div className='flex items-end gap-3 border-b border-b-black pb-2'>
                      <label className='text-sm font-medium' htmlFor='phone'>Phone:</label>
                      <input id='phone' name='phone' className='bg-transparent w-full outline-none border-none ' type='text' placeholder='Your phone number goes here...' />
                    </div>
                    {/* location */}
                    <div className='relative border-b border-b-black pb-2 w-full'>
                        <select className='pl-1 bg-transparent font-semibold border-none outline-none appearance-none w-full'>
                          <option value='your_age'>Location</option>
                          <option value='Nigeria'>Nigeria</option>
                          <option value='Ghana'>Ghana</option>
                          <option value='America'>America</option>
                          <option value='Germany'>Germany</option>
                        </select>
                    <div className='orange-triangle-down'></div>
                    </div>
                    {/* message */}
                    <div>
                        <p className='mb-3 font-medium'>Message </p>
                        <textarea className='mt-1 resize-none shadow-md w-full outline-none border-none text-sm p-4 h-40 bg-white' placeholder='Briefly tell us what is happening...'  />
                    </div>
                    {/* submit button */}
                    <div className='flex items-center gap-7 mt-7'>
                        <button className='px-12 sm:px-20 py-3 rounded-md text-white bg-[#f59134] shadow-md'>Submit</button>
                    </div>
                </form>
              </div>  
            </div>}
        </section>
        {
            getSupport === false && <div className='mt-24'>
                <div className='text-center'>
                    <p className='text-2xl mb-2 font-bold'>Testimonies</p>
                    <p>see what people who have  trusted us over the years are <br className='hidden sm:block' /> saying.</p>
                </div>
                <div className='pt-20 pb-14 overflow-x-hidden px-3 mt-14 bg-[#fbfbff]'>
                    <SwiperComponent />
                </div>
            </div>
        }
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Support