import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Provider/AuthProvider';

const Home = () => {
     const {user} = useContext(AuthContext)
     console.log(user);
     return (
          <div className=''>
               <h1 className='text-4xl text-center text-blue-700'> {user?.displayName} </h1>
              hii
          </div>
     );
};

export default Home;