
// // let Register=()=>{
// //     //1. Hook Variable Area
// //     //Every Component can its own data
// //     // const [variable,setVariable] = useState(initialValue);
// //     const [username,setUsername] = useState('');
// //     const [password,setPassword] = useState('');
// //     //2.function definition area

// //     const LoginForm = () => {
// //         const [username, setUsername] = useState('');
// //         const [password, setPassword] = useState('');

// //         const handleSubmit = async (e) => {
// //           e.preventDefault();
// //           const response = await fetch('http://localhost:5000/api/login', {
// //             method: 'POST',
// //             headers: { 'Content-Type': 'application/json' },
// //             body: JSON.stringify({ username, password }),
// //           });
// //           if (response.ok) {
// //             alert('Login successful!');
// //           } else {
// //             alert('Invalid credentials.');
// //           }
// //         };


// //     //3.return area


// //     //3. Return Statment
// //   return (
// //     <div>
// //         <form onSubmit={handleSubmit}>                    
// //             <input type="text" name="username" value={username} onChange={(e)=>{ setUsername(e.target.value)  }} id="username" placeholder="Username" />
// //             <input type="password" name="password" value={password} onChange={(e)=>{ setPassword(e.target.value)  }} id="password" placeholder="Password" />
// //             <input type="button" value="Login" name="login" id="login" onClick={submitData} />
// //         </form>
// //     </div>
// //   )
// // }

// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

// const LoginPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('https://localhost:5001/api/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password })
//         });
//         if (response.ok) {
//             const data = await response.json();
//             alert('Login successful!');
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     return (
//         <div className='flex justify-center items-center h-screen bg-gray-100'>
//             <h2 className='text-2xl mb-4'>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} id="username" placeholder="Username" />
//                 <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" placeholder="Password" />
//                 <input type="button" value="Login" name="login" id="login" onClick={submitData} />
//             </form>
//         </div>
//     );
// };

// export default LoginPage;
