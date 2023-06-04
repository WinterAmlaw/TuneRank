import React, {useState, useEffect, createContext} from 'react'

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || null);

  const provideUser = (user) => {
    setUsername(user);
  }
  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    } else {
      localStorage.removeItem('username');
    }
  }, [username]);

  return (
    <UserContext.Provider value={{username, provideUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider