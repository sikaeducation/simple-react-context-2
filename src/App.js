import './App.css';
import {useState, useContext, createContext} from 'react';

function App() {
  return (
    <div className="App">
      <Outer />
    </div>
  );
}

const userContext = createContext()

function Outer(){
  const [user, setUser] = useState({
    username: "sikaeducation",
  })
  const logout = () => setUser(null)

  return (
    <div className="Outer">
      <userContext.Provider value={{ user, logout }}>
        <Middle />
      </userContext.Provider>
    </div>
  )
}

function Middle(){
  return (
    <div className="Middle">
      <Inner />
    </div>
  )
}

function Inner(){
  const {user, logout} = useContext(userContext)

  return (
    <div className="Inner">
      {user && <p>{user.username} is logged in</p>} 
      {user && <button onClick={logout}>Logout</button>}
      {!user && <p>You have been logged out!</p>}
    </div>
  )
}

export default App;
