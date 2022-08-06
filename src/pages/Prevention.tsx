import Footer from '../components/Footer';
import prevention from '../assets/images/prevention.png'
import NewsLetter from '../components/NewsLetter';

import manWomanFight from '../assets/images/pexels-inna-mikitas-6455239 1.png';
import video from '../assets/images/video.png';

const Prevention = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full relative'> 
          <img className='w-full h-60 sm:h-96 md:h-[500px] object-cover object-center' src={prevention} alt='' />
          <p className='text-3xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>Prevention</p>
        </div>
        <section className='px-[5%] mt-10'>
            <div>
                <p className='font-semibold text-gold'>Do it your self</p>
                <p className='font-bold my-5'>Victim Assistance  And Prevention Video</p>
                <p>giving you Tips on how  to manage or prevent victimization </p>
            </div>
            <div className='mt-10 grid sm:grid-cols-2 gap-8 sm:gap-5 md:gap-10'>
                <div>
                    <div className='relative'>
                        <img src={manWomanFight}/>
                        <img className='w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={video} alt='' />
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img src={manWomanFight}/>
                        <img className='w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={video} alt='' />
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img src={manWomanFight}/>
                        <img className='w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={video} alt='' />
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img src={manWomanFight}/>
                        <img className='w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={video} alt='' />
                    </div>
                </div>
            </div>
        </section>
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Prevention