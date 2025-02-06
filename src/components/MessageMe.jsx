import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MessageMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const navigate = useNavigate()

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendToWhatsapp = () => {
    if (!whatsappMessage.trim()) return; // Prevent sending empty message

    const phoneNumber = '233559956394';
    const encodeMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleOnContinue = () => {
    sendToWhatsapp()
    setIsOpen(false);
    navigate('/recap')
    setWhatsappMessage('')
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={openModal} 
        className="bg-[#0ad1c8] text-[#000] py-3 text-xl rounded-xl w-full mt-5 font-semibold tracking-tight leading-8 cursor-pointer"
      >
        Message Me 🥺
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center !z-[200]"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-[#bebea8e8] rounded-lg p-9 w-11/12 h-auto max-w-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="space-y-6">
                <p className="text-base sm:text-xl font-medium text-gray-700 tracking-tight mb-5">
                  <span>
                    Send Message 💝
                  </span>
                </p>
                
                {/* Well Wishing Message */}
                <div className="">
                  <textarea 
                    name="message" 
                    id="w-w-message"
                    placeholder='Type Your Message...'
                    value={whatsappMessage}
                    onChange={(e) => setWhatsappMessage(e.target.value)}
                    className='w-full font-mono p-3 text-base sm:text-lg rounded-lg text-gray-800 columns-10 h-36 border border-black' 
                  />
                </div>
                {/* <p className="text-base sm:text-xl font-medium text-gray-700 tracking flex items-center justify-center">
                  <span>
                    Please check your mail after submission!
                  </span>
                </p> */}

                {/* The Submit Button */}
                <div className="mt-6 flex justify-center relative">
                  <button 
                    className="absolute bottom-[-60px] left-[50%] translate-x-[-50%] px-2 py-1 bg-[#328f70] text-[#d3d3d] transition-colors shadow-xl rounded-lg border border-gray-900 text-3xl md:text-4xl cursor-pointer"
                    onClick={handleOnContinue}
                    type='button'
                  >
                    <span className='flex flex-row items-center justify-center'>
                      <span>Send</span>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MessageMe;