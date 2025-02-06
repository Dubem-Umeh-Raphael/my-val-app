import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pics from '../assets/picture.png';
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { ArrowLeft } from '../assets/icons';

function Picture() {
  const navigate = useNavigate();
  const location = useLocation();
  const correctPasscode = location.state?.correctPasscode || sessionStorage.getItem('correctPasscode') === 'true';

  const val_1 = import.meta.env.VITE_VAL_1;
  const val_2 = import.meta.env.VITE_VAL_2;
  const val_3 = import.meta.env.VITE_VAL_3;

  const defaultPictures = [
    { Image: pics, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},   
    { Image: pics, title: 'September 3, 2024', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!"},
  ];

  const userPictures = [
    { Image: val_1, title: 'January 8, 2025'},
    { Image: val_2, title: 'January 6, 2025'},
    { Image: val_3, title: 'January 6, 2025'},
  ];

  const pictures = correctPasscode ? userPictures : defaultPictures;

  return (
    <div className="min-h-screen bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center py-10" style={{ width: '100%', height: '100%' }}>
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Pictures
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description }, index) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>
        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg cursor-pointer"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;