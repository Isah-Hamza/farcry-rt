import {useState} from 'react'
import registerWoman from '../assets/images/register-woman.png';
import google from '../assets/images/google.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const [iAgree, setIAgree] = useState(false);

const navigate = useNavigate();
  return (
    <section className="px-[5%] overflow-hidden grid md:grid-cols-2 gap-10 h-[calc(100vh-80px)]">
        <div className='h-[90%] overflow-auto px-5 sm:px-10 p-10 my-auto bg-[#cbccda] bg-opacity-75'>
            <p className='text-primaryBlue text-2xl font-bold'>facry</p>
            <div className='my-6'>
                <p className='font-semibold text-xl '>Create Account</p>
                <p>Please enter your details</p>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-4'>
                    <label className='text-sm font-medium' htmlFor='name'>Name:</label>
                    <input autoComplete='off' className='bg-transparent w-full outline-none border-none ' type='name' />
                </div>
                <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-4'>
                    <label className='text-sm font-medium' htmlFor='email'>Email:</label>
                    <input autoComplete='off' className='bg-transparent w-full outline-none border-none ' type='email' />
                </div>
                <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-4'>
                    <label className='text-sm font-medium' htmlFor='phone'>Phone:</label>
                    <input autoComplete='off' className='bg-transparent w-full outline-none border-none ' type='text' />
                </div>
                <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-4'>
                    <label className='text-sm font-medium' htmlFor='location'>Location:</label>
                    <input autoComplete='off' className='bg-transparent w-full outline-none border-none ' type='text' />
                </div>
                <div>
                    <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-3'>
                        <label className='text-sm font-medium' htmlFor='name'>Password:</label>
                        <input autoComplete='off' className='bg-transparent w-full outline-none border-none ' type='password' />
                    </div>
                    <p className='text-xs'>(Password should be atleast 8 characters)</p>
                </div>
                <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-3 whitespace-nowrap '>
                    <label className='text-sm font-medium' htmlFor='confirm_password'>Confirm Password:</label>
                    <input autoComplete='off' className='bg-transparent w-full outline-none border-none ' type='password' />
                </div>
            </div>
            <div className='flex gap-5 mt-10 mb-5'> 
                <div onClick={() => setIAgree(!iAgree)} className='cursor-pointer flex gap-2 items-start sm:items-center '>
                    <div  className={`${iAgree && 'mt-[5px] sm:mt-[unset] bg-[orange]'} w-[10px] h-[10px] border-2 border-[orange]`}></div>
                    <p className='text-sm sm:text-sm'>I agree to the Terms of Service and Privacy Policy</p>
                </div>
            </div>
            <button className='bg-primaryBlue text-white w-full py-[10px]'>Sign Up</button>
            <button className='justify-center bg-white flex items-center gap-2 mt-5 w-full py-3'>
                <img className='w-5' src={google} alt='google' />
                <p>Continue with Google</p>
            </button>
            <p className='text-center mt-6'>Already have an account? <span onClick={() => navigate('/login') }  className='text-blue-900 underline font-medium cursor-pointer'>Log In</span></p>
        </div>
        <div className='hidden md:flex h-[90%] my-auto overflow-hidden bg-[#cbccda] bg-opacity-75'>
            <img className='my-auto -translate-y-16' src={registerWoman} alt='register woman' />
        </div>
    </section>
  )
}

export default Register