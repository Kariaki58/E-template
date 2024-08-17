import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useContext } from 'react';
import { context } from '../../contextApi/Modal';

const LoginPage = () => {
    const { handleToggle } = useContext(context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        if (email === '' || password === '') {
            setError('Please fill in all fields');
        } else {
            setError('');
            // Proceed with login
            console.log('Logging in with', { email, password });
        }
    };

    return (
        <div 
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full md:inset-0 max-h-full bg-gray-900 bg-opacity-50"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="m-10 flex items-center justify-center w-full">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                    {error && (
                        <p className="text-red-500 text-center mb-4">{error}</p>
                    )}
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="w-full bg-gray-950 text-white py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                    <p className="text-center mt-6">
                        Don’t have an account? <Link to="/sign-up" className="text-blue-500 hover:underline">Sign Up</Link>
                    </p>
                    <Link className='text-blue-500 hover:underline'>
                        <p className='text-center mt-2'>
                            forgot password ?
                        </p>
                    </Link>
                    <RxCross1 className='absolute top-10 right-10 text-2xl hover:cursor-pointer' onClick={handleToggle}/>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
