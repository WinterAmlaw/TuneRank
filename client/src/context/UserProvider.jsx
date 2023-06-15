import React, {useState, useEffect, createContext} from 'react'

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedUserId = localStorage.getItem('user_id');
    
    if (storedUsername !== null) {
      setUsername(storedUsername);
    }
    if (storedUserId !== null) {
      setUserId(storedUserId);
    }
  }, []);

  const provideUser = (user) => {
    setUsername(user.username);
    setUserId(user.user_id);
  };

  useEffect(() => {
    if (username !== null) {
      localStorage.setItem('username', username);
      localStorage.setItem('user_id', userId);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('user_id');
    }
  }, [username, userId]);

  return (
    <UserContext.Provider value={{username, userId, provideUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider