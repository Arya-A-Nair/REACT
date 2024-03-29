import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  }

  return (
    <div>

      <AddUser addUser={handleAddUser}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
