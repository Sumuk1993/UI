
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

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from "../../assets/ISF-logo.svg";
// import leftimg from "../../assets/left-img.png";
// import footerlogo from "../../assets/ES-new-Logo.png";

// const Login: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         try {
//             const response = await fetch(process.env.REACT_APP_LOGIN_URL + '/login_old', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password, appcode: 'IS' }),
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 if (data.status === "S001") {
//                     navigate('/home', { state: { email } });
//                     sessionStorage.setItem('email', email);
//                     sessionStorage.setItem('password', password);
//                     sessionStorage.setItem('isLogin', 'true');
//                 }
//             } else {
//                 alert(data.message);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setError('An error occurred while logging in.');
//         }
//     };

//     return (
//         <div className="loginmain">
//             <header className="brline">
//                 <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white  box-shadow px-5 py-2">
//                     <div className="container-fluid">
//                         <div className="header-container pl-8 h-16 bg-white flex justify-between items-center">
//                             <img src={logo} alt="logo" aria-label="logo" width={160} />
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//             <div className="container-fluid">
//                 <div className="grid grid-cols-3 gap-4">
//                     <div className="...">
//                         <div className="img-blk">
//                             <img src={leftimg} />
//                         </div>
//                     </div>
//                     <div className="col-start-2 col-span-2 ... flex justify-center items-center">
//                         <div>
//                             <h1 className="signin-title">Sign in</h1>
//                             {/* <p class="signin-subtitle">
//                         Lorem ipsum dolor sit ame consectetur emet
//                     </p> */}
//                             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                                 {error && (
//                                     <div className="rounded-md bg-red-50 p-4">
//                                         <div className="flex">
//                                             <div className="flex-shrink-0">
//                                                 <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                                     <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-.707-5.707a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414L11.414 11l2.293 2.293a1 1 0 01-1.414 1.414L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 11 6.293 8.707a1 1 0 011.414-1.414L10 10.586z" clipRule="evenodd" />
//                                                 </svg>
//                                             </div>
//                                             <div className="ml-3">
//                                                 <h3 className="text-sm font-medium text-red-800">{error}</h3>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                                 <div className="mb-4">
//                                     {/* <input asp-for="Username" placeholder="Email" class="input-flds" />\ */}
//                                     <input id="email" name="email" type="text" autoComplete="email" required className="input-flds appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                                 </div>
//                                 <div className="mb-4">
//                                     {/* <input asp-for="Password" type="password" placeholder="Password" class="input-flds" /> */}
//                                     <input id="password" name="password" type="password" autoComplete="current-password" required className="input-flds appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                 </div>
//                                 <button type="submit" className="login-btn">Login</button>
//                                 <p className="frgpwd-txt">Forgot your password?</p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//                 <footer className="border-top footer text-muted">
//                     <div className="flex items-center">
//                         <div className="flex gap-4">
//                             <a href="https://www.excelsoftcorp.com/" rel='noreferrer' target='_blank'>Copyright © 2025 | Excelsoft Technology Ltd.</a>
//                             <a href="https://www.excelsoftcorp.com/privacy-policy/" rel='noreferrer' target='_blank'>Privacy and cookie policy</a>
//                         </div>
//                         <div className="flex align-items-center ml-auto">
//                             <div className="px-2">
//                                 <a href="#" className="flex justify-center items-center">
//                                     <div>Powered By:</div>
//                                     <div><img src={footerlogo} className="img-fluid frtlogo" /></div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//             <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 d-none">
//                 <div className="max-w-md w-full space-y-8">
//                     <div>
//                         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
//                     </div>
//                     <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                         {error && (
//                             <div className="rounded-md bg-red-50 p-4">
//                                 <div className="flex">
//                                     <div className="flex-shrink-0">
//                                         <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                             <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C20 4.477 15.523 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-.707-5.707a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414L11.414 11l2.293 2.293a1 1 0 01-1.414 1.414L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 11 6.293 8.707a1 1 0 011.414-1.414L10 10.586z" clipRule="evenodd" />
//                                         </svg>
//                                     </div>
//                                     <div className="ml-3">
//                                         <h3 className="text-sm font-medium text-red-800">{error}</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                         <div className="rounded-md shadow-sm -space-y-px">
//                             <div>
//                                 <label htmlFor="username" className="sr-only">Email</label>
//                                 <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="sr-only">Password</label>
//                                 <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                             </div>
//                         </div>
//                         <div>
//                             <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                                 <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                                     <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                         <path fillRule="evenodd" d="M10 0c2.757 0 5 2.243 5 5v2h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h2V5c0-2.757 2.243-5 5-5zm2 7V5c0-1.103-.897-2-2-2s-2 .897-2 2v2h4zm-2 5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm-2-5h4v2h-4V7zm0 5v3h4v-3h-4z" clipRule="evenodd" />
//                                     </svg>
//                                 </span>
//                                 Login
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

