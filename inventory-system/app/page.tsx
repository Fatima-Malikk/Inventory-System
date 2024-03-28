// "use client"
// import Header from "./../components/Header";
// import AddProduct from './../components/AddProduct';
// import DisplayProduct from './../components/DisplayProduct';
// import Homepage from './../components/Homepage';

// export default function Home() {
 

//   return (
//     <>
      
//       <Header />
//        <AddProduct />
//    <DisplayProduct/> 
     

//     </>
//   );
// }

"use client"

import React, { useState } from 'react';
import Header from './../components/Header';
import AddProduct from './../components/AddProduct';
import DisplayProduct from './../components/DisplayProduct';
import Homepage from './../components/Homepage';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Hardcoded credentials
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      setLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      {!loggedIn ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl mb-4">Login</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">Username</label>
              <input
                type="text"
                id="username"
                className="w-full border rounded py-2 px-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border rounded py-2 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <AddProduct />
          <DisplayProduct />
        </>
      )}
    </>
  );
}
