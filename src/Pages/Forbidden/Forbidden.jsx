import React from 'react';
import { FaBan } from 'react-icons/fa';
import { useNavigate } from 'react-router';


const Forbidden = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full text-center p-8">
        <FaBan className="text-red-500 text-6xl mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-secondary mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You do not have permission to access this page. Please contact an administrator if you think this is a mistake.
        </p>
        <button
          onClick={handleGoHome}
          className="btn btn-primary text-white w-full"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Forbidden;
