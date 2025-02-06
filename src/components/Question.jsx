import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { LogSnag } from "@logsnag/node";
import { useNavigate } from "react-router-dom";
import MessageMe from "./MessageMe";
import "./Question.css"; // Import the CSS file

// import heart from '../../public/'
const TOKEN = import.meta.env.VITE_LOGSNAG_TOKEN;
const PROJECT = import.meta.env.VITE_LOGSNAG_PROJECT;

const logsnag = new LogSnag({
  token: TOKEN,
  project: PROJECT,
});

const track = async () => {
  await logsnag.track({
    channel: "yes",
    event: "Valentine's Day",
    description: "She said yes!",
    icon: "💖",
    notify: true,
  });
};

function Question() {
  const navigate = useNavigate();

  const [noButtonSize, setNoButtonSize] = useState(100); // Initial size in percentage
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveNoButton = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setNoButtonSize((prevSize) => Math.max(prevSize - 10, 20)); // Decrease size by 10% but not less than 20%
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
    }, 8000); // Duration of the animation
  };

  const steps = [
    {
      content: "Heyy, baby.",
      image: "../../character/one.png",
    },
    {
      content: `You're always on my mind 🥺`,
      image: "/character/two.png",
    },
    {
      content: `And in my heart, I knew I’ve found the one I’ve been longing for. This girl, forever and always ❤
      `,
      image: "/character/three.png",
    },
    {
      content: `You're beautiful, you're smart, you're fun,
      and you make spending time together feel too short.`,
      image: "/character/four.png",
    },
    {
      content: `I look forward to when I'll see you again,
      hold your hands, and look into your pretty eyes.`,
      image: "/character/five.png",
    },
    {
      content: "Distance has kept us apart but you'll always have a special place in my heart 🥰",
      image: "/character/six.png",
    },
    {
      content: `Will you be my Valentine this year and make my heart feel closer to yours?\n Please don't say No 😏`,
      image: "/character/seven.png",
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [sheWantsToBeMyValentine, setSheWantsToBeMyValentine] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const imagePaths = [
      ...steps.map((step) => step.image),
      "/character/yayyyy.png",
    ];

    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  }, []);

  return (
    <div className="inset-0 fixed z-10 bg-black/60 backdrop-blur-sm">
      {sheWantsToBeMyValentine ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-20"
        >
          <Confetti width={width} height={height} />
          <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <img
              src="/character/yayyyy.png"
              alt=""
              className="w-40 animate-bounce"
            />
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-white text-4xl font-bold text-center"
            >
              Yayyyyyyy!!!!!
              <div className="w-full">
                <button onClick={() => navigate('/recap')} className="bg-white text-[#8d1430] py-3 text-xl rounded-xl w-full mt-10 font-semibold tracking-wider cursor-pointer">Go Back</button>
                <MessageMe />
              </div>
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <div className="min-h-screen w-full mx-auto text-white p-5 flex flex-col items-center justify-center overflow-hidden"> 
          <div className='max-w-md'>
            <motion.img
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={steps[currentStep].image}
              alt=""
              className="w-40"
            />
            <motion.div
              key={currentStep + "-text"}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-josefin text-4xl font-bold"
            >
              {steps[currentStep].content}
            </motion.div>
            {currentStep < 6 && (
              <div className="mx-2 md:mx-0">
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-white text-[#8d1430] cursor-pointer leading-8 tracking-wider py-3 text-xl rounded-xl w-full mt-10 font-bold"
                >
                  Next
                </button>
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-white text-[#8d1430] cursor-pointer leading-8 tracking-wider py-3 text-xl rounded-xl w-full mt-2 font-bold opacity-90"
                  >
                    Back
                  </button>
                )}
              </div>
            )}
            {currentStep === 6 && (
              <>
                <button
                  onClick={async () => {
                    setSheWantsToBeMyValentine(true);
                    await track();
                  }}
                  className="bg-[#0c7915] ring-2 text-[#d3d3d3] cursor-pointer leading-8 tracking-wider py-3 text-xl rounded-xl w-full mt-10 font-semibold"
                >
                  Yes
                </button>
                <motion.button
                  onClick={moveNoButton}
                  style={{ width: `${noButtonSize}%`, height: `${noButtonSize}%` }}
                  className={`bg-red-500 ring-1 text-[#d3d3d3] cursor-pointer leading-8 tracking-wider py-3 text-xl rounded-xl mt-2 font-semibold ${isAnimating ? 'explosion' : ''}`}
                  initial={{ scale: 1 }}
                  animate={isAnimating ? { scale: [1, 1.2, 0], opacity: [1, 0.5, 0] } : {}}
                  transition={{ duration: 1 }}
                >
                  No
                </motion.button>
                {showMessage && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-red-500 text-xl font-bold mt-0"
                  >
                    Choose the available option
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;