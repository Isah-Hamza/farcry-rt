import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import {Footer} from '../../components/Footer'
import Header from '../../components/Header'

import suleiman from '../../assets/images/suleiman.png';
import profile from '../../assets/images/profile.png';
import caseStudy from '../../assets/images/case study.png';
import report from '../../assets/images/report.png'; 
import messages from '../../assets/images/messages.png'; 
import donate from '../../assets/images/donate.png'; 
import settings from '../../assets/images/settings.png'; 
import support from '../../assets/images/support.png'; 
import logout from '../../assets/images/log-out.png'; 

import { Dashboard } from '../../contexts/Dashboard';

const Profile = () => {
    const location = useLocation();
    const { isDashboardOpen } = useContext(Dashboard);

    const [activeTab, setActiveTab] = useState(() => {
        let path = location.pathname;
        let currentPath = path.split("/");
        return currentPath[1];
    })
    const sidebarList = [
        {
            title:"profile",
            icon: <img className='w-4 h-4 object-contain' src={profile} alt='profile' />
        },
        {
            title:"report",
            icon: <img className='w-4 h-4 object-contain' src={report} alt='report' />
        },
        {
            title:"case study",
            icon: <img className='w-4 h-4 object-contain' src={caseStudy} alt='case study' />
        },
        {
            title:"Messages",
            icon: <img className='w-4 h-4 object-contain' src={messages} alt='messages' />
        },
        {
            title:"Donate",
            icon: <img className='w-4 h-4 object-contain' src={donate} alt='donate' />
        },
        {
            title:"settings",
            icon: <img className='w-4 h-4 object-contain' src={settings} alt='settings' />
        },
        {
            title:"support",
            icon: <img className='w-4 h-4 object-contain' src={support} alt='support' />
        },
        {
            title:"logout",
            icon: <img className='w-4 h-4 object-contain' src={logout} alt='logout' />
        },
    ]

  return (
    <div className='flex flex-col h-[calc(100vh-5rem)]'>
        <Header dashboard />
        <div className='flex-1 flex'>
            <aside className={`${isDashboardOpen ? 'left-0' : 'left-[-350px]'} transition-all duration-500 fixed left-0 top-[80px] z-20 lg:static w-1/5 min-w-[300px] bg-primaryBlue text-white h-full`}>
                <div className='flex gap-3 justify-center py-5'>
                    <img className='w-10 h-10 rounded-full' src={suleiman} alt="suleiman" />
                    <div className='flex flex-col'>
                        <p className='font-medium text-sm'>Suleiman Abdullahi</p>
                        <p className="text-xs opacity-70">Student</p>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-5 mt-10'>
                        {
                            sidebarList.map((item,idx) => (
                                <li onClick={() => setActiveTab(item.title)}
                                 key={idx} className={`${activeTab === item.title && '!font-bold translate-x-[10%] shadow-md !opacity-100' } 
                                 opacity-80 transition-all duration-300 bg-primaryBlue cursor-pointer flex py-1 capitalize gap-3 items-center pl-20`}>
                                    { item.icon }
                                    <p>{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
            <main className='w-full lg:w-4/5 bg-[#DBDFEAA6] h-full'>
                <div className='ml-5 sm:ml-20 mt-7 sm:mt-20 mb-10 '>
                    <p className='text-2xl font-bold mb-10' >User Profile</p>
                    <div className="flex flex-col lg:flex-row gap-14 xl:gap-20">
                        <div className='flex flex-col lg:items-center'>
                            <div className='w-32 h-32 rounded-full'>
                                <img className='w-full object-cover' src={suleiman} alt='suleiman' />
                            </div>
                            <p className='ml-5 sm:ml-[unset] text-primaryBlue font-medium underline cursor-pointer'>change photo</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-3'>
                                <p className='font-semibold opacity-70 text-xl whitespace-nowrap'>Name :</p>
                                <p>Suleiman Abdullahi</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='font-semibold opacity-70 text-xl whitespace-nowrap'>Sex :</p>
                                <p>Male</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='font-semibold opacity-70 text-xl whitespace-nowrap'>Age :</p>
                                <p>30</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='font-semibold opacity-70 text-xl whitespace-nowrap'>Occupation :</p>
                                <p>Student</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='font-semibold opacity-70 text-xl whitespace-nowrap'>Marital Status :</p>
                                <p>Single</p>
                            </div>
                            <div className='flex items-start sm:items-center gap-3'>
                                <p className='font-semibold opacity-70 text-lg whitespace-nowrap'>Address :</p>
                                <p className='mt-1.5'>Off 143, Avenue, Number 443 Syd cresent.</p>
                            </div>
                            <button className='ml-[unset] px-20 mt-10 py-3 rounded-lg bg-primaryBlue text-white w-fit'>Edit</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default Profile