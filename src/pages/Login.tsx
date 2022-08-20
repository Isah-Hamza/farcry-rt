import {useState, useContext} from 'react'
import loginGirl from '../assets/images/login-girl.png';
import google from '../assets/images/google.png';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../contexts/Users';


const Login = () => {
const [rememberMe, setRememberMe] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showError, setShowError] = useState(false);
const navigate = useNavigate();

const { setLoggedInUser} = useContext(UsersContext);

function handleSumbit(){
    if(email === 'user@test.com' && password === 'password'){
        alert("User successfully logged in");
        setLoggedInUser( (prev:Object) => ({ ...prev,email, password }));
        navigate('/profile');
    }else{
        setShowError(true);
    }

}

  return (
    <section className="px-[5%] overflow-hidden grid md:grid-cols-2 gap-10 h-[calc(100vh-80px)]">
        <form autoComplete='new-password' className='h-[90%] px-5 sm:px-10 p-10 my-auto bg-[#cbccda] bg-opacity-75 flex flex-col justify-center'>
            <p className='text-primaryBlue text-2xl font-bold'>facry</p>
            <div className='my-6'>
                <p className='font-semibold text-2xl'>Welcome Back!!</p>
                <p>Please enter your details</p>
                {
                    showError &&
                    <p className='text-sm text-[coral] text-center translate-y-6 font-medium'>Invalid username and/or password</p>
                }
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-4'>
                    <label className='text-sm font-medium' htmlFor='name'>Email:</label>
                    <input value={email} onChange = {(e) => {
                        setShowError(false);
                        setEmail(e.target.value);
                        }} autoCapitalize='off' autoComplete='new-password' className='bg-transparent w-full outline-none border-none ' type='email' />
                </div>
                <div className='flex items-end gap-3 border-b border-b-black pb-2 mt-3'>
                    <label className='text-sm font-medium' htmlFor='name'>Password:</label>
                    <input value={password} onChange={(e) => {
                        setShowError(false);
                        setPassword(e.target.value);
                        }} autoComplete='new-password' className='bg-transparent w-full outline-none border-none ' type='password' />
                </div>
            </div>
            <div className='flex justify-between mt-2 mb-10'>
                <div className='flex gap-5'> 
                    <div onClick={() => setRememberMe(!rememberMe)} className='cursor-pointer flex gap-2 items-center '>
                      <div  className={`${rememberMe && 'bg-[orange]'} w-[10px] h-[10px] border-2 border-[orange]`}></div>
                      <p className='text-sm sm:text-sm'>Remember me</p>
                    </div>
                </div>
                <p className='cursor-pointer'>Forget Password?</p>
            </div>
            <button onClick={handleSumbit} type='button' className='bg-primaryBlue text-white w-full py-[10px]'>Login</button>
            <button className='justify-center bg-white flex items-center gap-2 mt-5 w-full py-3'>
                <img className='w-5' src={google} alt='google' />
                <p>Continue with Google</p>
            </button>
            <p className='text-center mt-6'>Don't have an account? <span onClick={()=> navigate('/register')} className='text-blue-900 underline font-medium cursor-pointer'>Sign Up</span></p>
        </form>
        <div className='hidden md:flex h-[90%] my-auto overflow-hidden bg-[#cbccda] bg-opacity-75'>
            <img className='my-auto -translate-y-16' src={loginGirl} alt='login girl' />
        </div>
    </section>
  )
}

export default Login