// buyer page
import React from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { FaRegAddressBook } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { GrLogout } from 'react-icons/gr';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const localtoken = localStorage.getItem('_auth')
const Buyer = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      signOut();
      const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_BASEURL}/signout`, {}, { headers: { 'Authorization': `Bearer ${localtoken}` }, });
      
      if (response.data.error) {
        toast.error(response.data.error || 'An error occurred while signing out.');
      } else {
        toast.success(response.data.message || 'Signed out successfully!');
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error)
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="flex">
      <div className="h-screen flex-2 xl:w-72 border-gray-300 border-r-2">
        <ul className="leading-10 px-4">
          <Link to="/dashboard/user">
            <li className="flex items-center text-xl gap-4 mt-10 cursor-pointer bg-gray-950 text-white sm:bg-gray-950 sm:text-white rounded-lg p-4">
              <BsCartCheck className="text-2xl" />
              <p className="hidden md:block">My Orders</p>
            </li>
          </Link>
          <Link to="/dashboard/user/address">
            <li className="flex items-center text-xl gap-4 mt-5 cursor-pointer bg-gray-950 text-white sm:bg-gray-950 sm:text-white rounded-lg p-4">
              <FaRegAddressBook className="text-2xl" />
              <p className="hidden md:block">Account</p>
            </li>
          </Link>
          <li onClick={handleSignOut} className="flex items-center text-xl gap-4 mt-72 cursor-pointer bg-gray-950 text-white sm:bg-gray-950 sm:text-white rounded-lg p-4">
            <GrLogout />
            <p className="hidden md:block">Sign Out</p>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4 overflow-x-auto">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Buyer;
