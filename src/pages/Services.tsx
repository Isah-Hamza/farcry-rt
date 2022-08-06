import React from 'react'

import businessPartners from '../assets/images/business-partners-closing-deal 1.png';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import ServicesComponent from '../components/Services';

const Services = () => {
  const services = [ 
    'Crisis intervention and emergency shelter',
    'Counselling and short or long-term support',
    'Court preparation and accompaniment throughout the judicial system',
    'Information sharing with victims of federally sentenced offenders',    
    'Victim advocacy with all levels of government (municipal, provincial and federal)',
    ' Referrals and support programs',
   ]
  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full relative'> 
          <img className='w-full h-56 sm:h-96 md:h-[500px] object-cover object-center' src={businessPartners} alt='business partners' />
          <p className='text-3xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>Services</p>
        </div>
        <section className='px-[5%] mt-10'>
          <p className='text-base text-gold'>Helping you find your way</p>
          <p className='text-xl md:text-2xl font-bold mb-2'>Crime Victims Assistant Programs</p>
          <div className='grid md:grid-cols-2 gap-5 md:gap-10'>
            <div className='leading-7'>
              <p className='mb-5'>For victims of crime in Nigeria, the criminal justice system can be overwhelming. far-cry is here to assist victims of crime (both violent and non-violent) in navigating and obtaining the necessary support.</p>
              <p>You can get help through a number of crime victim support programs, which offer a variety of services, including:</p>
            </div>
            <div>
              <ul className='flex flex-col gap-3 ml-4'>
                {
                  services.map((service,idx) => (
                    <li className='list-disc' key={idx}>{ service }</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
        <div className='mt-10 md:mt-16'>
          <ServicesComponent title='Services and Resources' optionalHeader='We are here to assist you' LeftAlign='!text-left'  />
        </div>
        <div><NewsLetter styles='mt-10' /></div>
      </div>
      <Footer />
    </>
  )
}

export default Services