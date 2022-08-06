import {useState} from "react";
import caretUp from '../assets/images/caret-up.png';
import caretDown from '../assets/images/caret-down.png';
import Footer from "../components/Footer";
import { BiArrowBack } from 'react-icons/bi'

import orangeMark from '../assets/images/orange mark.png';
import decorationImage from '../assets/images/decorationImage.png';
import masterCard from '../assets/images/Mastercard.png';

const Donate = () => {
  const [activePrice, setActivePrice] = useState('300');
  const [otherPrice, setOtherPrice] = useState('200');
  const [proceedToPayment, setProceedToPayment] = useState(false);

  const prices = ['10,000','500','1,000','100','300','5,000'];

  const handleIncrease = ():void => {
    let number = +otherPrice;
    number++;
    setOtherPrice(`${number}`);
  }

  const handleReduce = ():void => {
    let number = +otherPrice;
    number--;
    setOtherPrice(`${number}`);
  }

  return (
    <>
    <img className="absolute right-[20%] z-[-1] top-36 w-60" src={decorationImage} />
     {!proceedToPayment ?  <section className="px-[5%] mt-9 mb-16 md:mb-12 flex flex-col md:flex-row gap-14 md:gap-20">
        <div className="max-w-[400px]">
          <p className="font-bold text-xl mb-5">Make a secure Donation</p>
          <div className="grid grid-cols-3 gap-5">
            {
              prices.map((price, idx) => (
                <div onClick={() => setActivePrice(price)} className={`${activePrice == price && ' !bg-primaryBlue text-white' } bg-[#f5f6fa] relative flex justify-center items-center py-3 px-5 cursor-pointer rounded-md shadow-md`} key={idx}>
                  <p className="font-semibold">{ `$${price}`}</p>
                  { activePrice === price && <div className="absolute top-1 right-1 w-4 h-4 shadow-lg bg-white rounded-full flex justify-center items-center">
                    <img src={orangeMark} alt='check mark' />
                  </div>}
                </div>
              ))
            }
          </div>
          <div className="my-10">
            <p className="text-xl font-bold mb-2">Others</p>
            <div className={`bg-[#f5f6fa] relative flex gap-10 justify-end pr-16 items-center cursor-pointer rounded-md shadow-md`} >
                  <p className=" px-5 py-2 rounded-sm font-semibold text-xl"><span  className="inline-block mr-2 text-base font-bold">USD</span>{ `  ${otherPrice}`}</p>
                  <div>
                    <div onClick={handleIncrease}>
                      <img  className="w-7 p-1" src={caretUp} alt='caret up' />
                    </div>
                    <div onClick={handleReduce}>
                      <img  className="w-7 p-1" src={caretDown} alt='caret down' />
                    </div>
                  </div>
            </div>
            <div className="mt-6">
              <p> <span className="font-semibold tracking-wider">Name:</span>  Suleiman Abdullahi</p>
              <p> <span className="font-semibold tracking-wider">Address:</span>  Suleimsnsyd cresent 243 avenue</p>
            </div>
          </div>
          <div className="flex">
            <button onClick={() => setProceedToPayment(true)} className="w-[300px] mx-auto sm:mx-[unset] py-3 text-white bg-primaryBlue font-medium tracking-wider"  >Proceed</button>
          </div>
        </div>
        <div className="my-auto">
            <p className="text-gold text-lg font-semibold">Thank You</p>
            <p className="font-bold my-5 text-xl">Help make a change</p>
            <p className="tracking-wider">
            Your dollars are used to provide support to victims<br className="hidden sm:block" /> through our  statewide hotline, 
            one-on-one advocacy, criminal <br className="hidden sm:block" />justice  system advocacy and intervention, courtroom 
            support, <br className="hidden sm:block" />media  intervention and to provide resources, referrals and <br className="hidden sm:block" /> education.
            </p>
        </div>
      </section> :
      <section className="max-w-[550px] bg-[#f5f6fa] px-[5%] sm:mt-9 sm:mb-16 md:mb-12 grid sm:justify-center">
        <div className="px-0 md:px-16 p-10 grid gap-5">
          <div onClick={() => setProceedToPayment(false)} className="hover:font-semibold cursor-pointer flex items-center gap-2 -translate-x-3 sm:-translate-x-4">
            <BiArrowBack />
            <span>Go back</span>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold" htmlFor="email">Email</label>
            <input type='email' placeholder="Mayorsuleimankhan1@gmail.com" className="border outline-none px-3 py-3 rounded-md" />
          </div>
          <div className="grid gap-2">
            <p className="font-semibold" >Card Information</p>
            <div className="relative">
              <input type='text' className="w-full border outline-none px-3 py-3 rounded-md" placeholder="0000 0000 0000 0000"/>
              <img src={masterCard} className="absolute h-5 w-5 right-3 top-1/2  -translate-y-1/2" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type='text' className="border outline-none px-3 py-3 rounded-md" placeholder="MM/YY"/>
              <input type='text' className="border outline-none px-3 py-3 rounded-md" placeholder="CVC"/>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="font-semibold" htmlFor="name">Name on Card</label>
            <input type='name' placeholder="Your Name" className="border outline-none px-3 py-3 rounded-md" />
          </div>
          <div className="grid gap-2">
            <p className="font-semibold">Country or Region</p>
            <select className="border  outline-none px-3 py-3 rounded-md" >
              <option className="opacity-75">Country</option>
              <option>Austria</option>
              <option>Nigeria</option>
              <option>USA</option>
            </select>
          </div>
          <button className="w-full mt-3 text-white font-medium tracking-wider bg-primaryBlue py-3 text-center">
            Donate <span>$300.00</span>
          </button>
        </div>
      </section>}
      <Footer />
    </>
  );
};

export default Donate;
