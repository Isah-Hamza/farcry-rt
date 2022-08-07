import { useState } from 'react';
import handshake from '../assets/images/handshake.png';
import { MdOutlineAttachment } from 'react-icons/md';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


const DetailedReporting = () => {
  const [spoken, setSpoken] = useState('');
  const [certify, setCertify] = useState(false);

  return (
    <>
    <div className='w-full flex flex-col'>
        <div className='w-full relative'>
          <img src={handshake} className='h-[250px] sm:h-[unset] object-cover' />
          <p className='font-bold text-white text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Report</p>
        </div>
        <div className='w-full  bg-[rgba(0,6,255,.15)]  py-16'>
          <div className='sm-w-[90%] md:w-[600px] lg:w-[800px] mx-auto'> 
            <div className=''>
              <p className='text-center mb-5 font-medium text-base'>Giving you all the support needed to overcome your current situation <br className='hidden sm:block'/> is our major priority</p>
              <p className='text-sm text-center'>We are here for you. Please fill the form below:</p>
              <div className='sm:w-[500px] lg:w-[700px] mx-auto bg-white bg-opacity-75 px-5 !py-16 sm:p-10 mt-10'>
                <div className='sm:w-[350px] mx-auto'>
                  <section>
                    <p className='text-xl font-bold mb-10 text-[orange]'>Victim's Information</p>
                    <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-3'>
                      <label className='text-sm font-medium' htmlFor='name'>Name:</label>
                      <input className='bg-transparent w-full outline-none border-none ' type='text' placeholder='Your fullname, lastname first' />
                    </div>
                    <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-10'>
                      <label className='text-sm font-medium' htmlFor='phone'>Phone:</label>
                      <input id='phone' name='phone' className='bg-transparent w-full outline-none border-none ' type='text' placeholder='Your phone number' />
                    </div>
                    <div className='flex flex-col sm:flex-row gap-10 mt-10 text-sm'>
                      <div className='relative border-b border-b-black pb-2 w-60'>
                        <select className='bg-transparent  border-none outline-none appearance-none w-full'>
                          <option value='your_age'>Your Age</option>
                          <option value='18'>18</option>
                          <option value='19'>19</option>
                          <option value='20'>20</option>
                        </select>
                        <div className='orange-triangle-down'></div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <p className='font-medium mr-5'>Gender:</p>
                        <div className='flex items-center gap-1'>
                            <input type='radio' name='gender' id='male' />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type='radio' name='gender' id='female' />
                            <label htmlFor='female'>Female</label>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-10 sm:w-[200px]'>
                      <label className='text-sm font-medium' htmlFor='status'>Status:</label>
                      <input id='status' name='status' className='bg-transparent w-full outline-none border-none ' type='text' placeholder='Your status here' />
                    </div>
                    <div className='relative border-b border-b-black pb-2 sm:w-[200px] mt-10'>
                        <select className='bg-transparent font-medium text-sm border-none outline-none appearance-none w-full'>
                          <option value='your_age'>Marital Status</option>
                          <option value='single'>Single</option>
                          <option value='married'>Married</option>
                          <option value='divorced'>Divorced</option>
                        </select>
                        <div className='orange-triangle-down'></div>
                    </div>
                    <div className='relative border-b border-b-black pb-2 sm:w-[200px] mt-10'>
                        <select className='bg-transparent font-medium text-sm border-none outline-none appearance-none w-full'>
                          <option value='occupation'>Occupation</option>
                          <option value='student'>student</option>
                          <option value='civil servant'>civil servant</option>
                          <option value='office holder'>office holder</option>
                        </select>
                        <div className='orange-triangle-down'></div>
                    </div>
                  </section>
                  <section className='mt-8 text-sm'>
                    <p className='text-[orange] font-semibold text-base'>Person making the conplaints</p>
                    <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-5'>
                      <label className='text-sm font-medium' htmlFor='name'>Name:</label>
                      <input className='bg-transparent w-full outline-none border-none ' type='text' placeholder='Your fullname, lastname first' />
                    </div>
                    <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-10'>
                      <label className='text-sm font-medium' htmlFor='phone'>Phone:</label>
                      <input id='phone' name='phone' className='bg-transparent w-full outline-none border-none ' type='text' placeholder='Phone number goes here.' />
                    </div>
                    <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-10'>
                      <label className='text-sm font-medium' htmlFor='address'>Address:</label>
                      <input id='address' name='address' className='bg-transparent w-full outline-none border-none ' type='text' placeholder='Address here' />
                    </div>
                    <div className='mt-8'> 
                      <p>Have you spoken to anyone yet? </p>
                      <div className='flex gap-10 items-center mt-3'>
                        <div onClick={() => setSpoken('yes')} className='cursor-pointer flex gap-2 items-center '>
                          <div  className={`${spoken === 'yes' && 'bg-[orange]'} w-[10px] h-[10px] border-2 border-[orange]`}></div>
                          <p>Yes</p>
                        </div>
                        <div onClick={() => setSpoken('no')} className='cursor-pointer flex gap-2 items-center '>
                          <div className={`${spoken === 'no' && 'bg-[orange]'} w-[10px] h-[10px] border-2 border-[orange]`}></div>
                          <p>No</p>
                        </div>
                      </div>
                    </div>
                    <p className='text-[orange] text-base font-medium mb-3 mt-8'>Statement of complaint</p>
                    <p className='mb-3'>Please provide as much detailed information about the crime and also attach
                      document when necessary </p>
                    <textarea className='mt-1 resize-none shadow-md w-full outline-none border-none text-sm p-4 h-32 bg-white' placeholder='Briefly tell us what is happening...'  />
                    <div className='flex gap-5 mt-4'> 
                      <div onClick={() => setCertify(!certify)} className='cursor-pointer flex gap-2 items-center '>
                        <div  className={`${certify && 'bg-[orange]'} w-[10px] h-[10px] border-2 border-[orange]`}></div>
                        <p className='text-xs sm:text-sm'>I certify that all information provided therein are true</p>
                      </div>
                    </div>
                  <div className='flex items-center gap-7 mt-7'>
                    <button className='px-12 sm:px-20 py-3 rounded-md text-white bg-[#f59134] shadow-md'>Submit</button>
                    <input type='file' id='select_file' hidden />
                    <label className='mr-4 sm:mr-[unset]' htmlFor='select_file' role='button'>
                        <div className="text-sm flex items-center gap-1">
                            <MdOutlineAttachment size={20} />
                            <span>Attach a file</span>
                        </div>
                    </label>
                  </div>
                  </section>
                </div>
              </div>
              <div>
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default DetailedReporting