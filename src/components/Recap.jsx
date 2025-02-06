import React from 'react';
import { ArrowRight, ArrowLeft,/* Message,*/ Image, Heart } from '../assets/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import '../index.css';

function Recap() {
  const navigate = useNavigate();
  const location = useLocation();
  const correctPasscode = location.state?.correctPasscode || sessionStorage.getItem('correctPasscode') === 'true';

  const valName = import.meta.env.VITE_VAL_NAME;
  const name = correctPasscode ? valName : 'Guest';

  return (
    <div className="inset-0 !z-10 fixed min-h-screen bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-white drop-shadow-lg">
          {name}, Let's recap our time together
        </h1>
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {[
            // { Icon: Message, label: 'Messages', path: '/recap/letter' },
            { Icon: Image, label: 'Pictures', path: '/recap/pictures' },
            // { Icon: Music, label: 'Music', path: '/recap/music' },
          ].map(({ Icon, label, path }) => (
            <div key={label} className="flex flex-col items-center">
              <button
                className="relative group w-20 h-20 sm:w-24 sm:h-24 cursor-pointer"
                onClick={() => navigate(path, { state: { correctPasscode } })}
              >
                <Heart className="absolute inset-0 w-full h-full z-0 cursor-pointer shadow-svg" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Icon color="#C67593" />
                </div>
              </button>
              <span className="mt-4 text-sm font-medium text-white animate-bounce">
                Click me!
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between w-full">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg cursor-pointer"
            onClick={() => navigate('/')}
          >
            <ArrowLeft /> Previous page
          </button>
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg cursor-pointer"
            onClick={() => navigate('/question')}
          >
            Next page <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recap;