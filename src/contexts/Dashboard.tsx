import { createContext, useState } from "react";


interface DashboardContextProps{
    children:React.ReactNode;
}

interface DashboardContextValue {
    isDashboardOpen:boolean,
    setIsDashboardOpen:Function
}

export const Dashboard = createContext({} as DashboardContextValue);

const  DashboardContext:React.FC<DashboardContextProps> = ({ children }) => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    return (
    <Dashboard.Provider value={{ isDashboardOpen, setIsDashboardOpen }}>
        { children }
    </Dashboard.Provider>)
}

export default DashboardContext;