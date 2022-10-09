import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Outer />
    </div>
  );
}

function Outer(){
  const [user, setUser] = useState({
    username: "sikaeducation",
  })
  const logout = () => setUser(null)

  return (
    <div className="Outer">
      <Middle user={user} logout={ logout } />
    </div>
  )
}

function Middle({ user, logout }){
  return (
    <div className="Middle">
      <Inner user={user} logout={ logout } />
    </div>
  )
}

function Inner({ user, logout }){
  return (
    <div className="Inner">
      {user && <p>{user.username} is logged in</p>} 
      {user && <button onClick={logout}>Logout</button>}
      {!user && <p>You have been logged out!</p>}
    </div>
  )
}

export default App;
