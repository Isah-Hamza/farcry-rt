import {createContext, useState} from 'react'

interface Props {
  children: React.ReactNode;
}

interface UsersContextValue {
  loggedInUser: Object,
  setLoggedInUser: Function,
}

export const UsersContext = createContext({} as UsersContextValue )

const Users:React.FC<Props> = ({children}) => {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UsersContext.Provider value={{loggedInUser, setLoggedInUser}}>
      { children }
    </UsersContext.Provider>
  )
}

export default Users