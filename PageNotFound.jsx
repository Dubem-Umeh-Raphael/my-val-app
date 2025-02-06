import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <>
      <section className="text-center w-full h-full fixed inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center mb-auto">
        <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
        <h1 className="text-6xl font-bold mb-4 text-gray-100">404 Not Found</h1>
        <p className="text-xl mb-5 text-gray-300">This page does not exist</p>
        <Link
          to="/"
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4">Go Back
        </Link>
    </section>
    </>
  )
}

export default PageNotFound