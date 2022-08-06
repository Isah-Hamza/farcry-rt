import  { useState, useRef, useEffect} from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoIosMenu, IoMdClose } from 'react-icons/io'


const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [ activeLink, setActiveLink] = useState('Home');
    const links = [
        { name:'Home',to:'/' },
        { name:'Services', to:'/services' },
        { name:'Report', 
        to:'#', 
        subMenu: [
            {text:'Emergency', to:'/report/emergency'},
            {text:'Detailed Reporting', to:'/report/detailed-reporting'},
            {text:'Support Group', to:'#'},
            {text:'FAQs', to:'/report/faq'},
        ] 
    },
        { name:'Prevention', to:'/prevention' },
        { name:'Contact Us' , to:'contact-us'},
        { name:'Login', to:'/login' },
    ]

    const navRef = useRef<HTMLElement | null >(null);
    const subMenuRef = useRef<HTMLDivElement | null >(null);

    function handleToggleSideNav(){
        navRef.current?.classList.toggle('open');
    }

    function handleClick(name:string){
        setActiveLink(name);
        if(name != 'Report'){
            handleToggleSideNav();
        }
    }  
    
    useEffect(() => {
        const path = location.pathname.split('/');
        if(path.includes('services')){
            setActiveLink('Services')
        }else if(path.includes('report')){
            setActiveLink('Report')
        }
    }, [])
    
    return (
    <header className=" fixed top-0 left-0 shadow-md z-10  px-[5%] sm:px-[6%] bg-primaryBlue w-full">
        <div className='max-w-[1200px] mx-auto flex justify-between items-center text-white h-20  '>
            <div className="logo text-2xl font-bold">
                <a href="/">
                    farcry
                </a>
            </div>
            <nav ref={navRef} className="fixed lg:static">
                <ul className="flex items-center space-x-8">
                    {
                        links.map((item,idx) => (
                            <li onClick = {() => handleClick(item.name) } className={`${activeLink === item.name && 'active'} group relative`} key={idx}>
                                <NavLink to={ item.to && item.to }>{item.name}</NavLink>
                                {
                                    item.subMenu && <div ref={subMenuRef} className='shadow-md border-red-400 hidden group-hover:block lg:absolute top-6 -left-12 lg:pt-8 w-52 sm:w-60'>
                                        <ul className='flex flex-col sm:block gap-3 mt-3 lg:mt-[unset] '>
                                        {item.subMenu.map((menu, idx) => (
                                            <li onClick={() => {
                                                navigate(menu.to);
                                                navRef.current?.classList.remove('open');
                                                if(subMenuRef.current)
                                                subMenuRef.current.classList.add('hide'); 
                                                setTimeout(() => {
                                                subMenuRef.current && subMenuRef.current.classList.remove('hide'); 
                                                }, 0);
                                            }} 
                                            className=' text-sm hover:bg-primaryBlue hover:text-white text-black pl-6 lg:!px-10 py-2 whitespace-nowrap cursor-pointer bg-white bg-opacity-80' key={idx}> { menu.text } </li>
                                        ))}
                                    </ul>
                                    </div>
                                }
                            </li>
                        ))
                    }
                    <li onClick={() => navigate('/donate')}><button className="border border-gold rounded-md px-6 py-2">Donate</button></li>
                    <IoMdClose color='coral' onClick={handleToggleSideNav} className="block lg:hidden absolute !mt-4 right-6 top-1" size={26} />
                </ul>
            </nav>
            <div data-menu className="btn block lg:hidden">
                <IoIosMenu onClick={handleToggleSideNav} size={30} />
            </div>
        </div>
    </header>
  )
}

export default Header