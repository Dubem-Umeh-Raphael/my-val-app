import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Passcode() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const FN = 'chidubem';
    const LN = 'umeibekwe';
    const PS = import.meta.env.VITE_VAL_PASS;

    const contBtn = (first, last, pass) => {
        first = first.trim().toLowerCase();
        last = last.trim().toLowerCase();
        pass = pass.trim().toLowerCase();

        if (first === FN && last === LN && pass === PS) {
            console.log('Credentials Correct');
            sessionStorage.setItem('correctPasscode', 'true');
            navigate('/recap', { state: { correctPasscode: true } });
        } else {
            console.log('Credentials error');
            sessionStorage.setItem('correctPasscode', 'false');
            navigate('/recap', { state: { correctPasscode: false } });
        }
    };

    return (
        <div className="fixed inset-0 !z-10 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center overflow-hidden">
            <div className="max-w-xl h-auto p-5 bg-white/10 backdrop-blur-sm rounded-2xl w-auto mx-2">
                <div className="flex flex-col items-center justify-center p-3">
                    <div className="text-2xl mb-10 -mt-2 font-sans tracking-tight">Enter Your Partner's Details to Continue</div>
                    <div className='flex flex-col w-full items-center justify-center mt-5 gap-12'>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='w-full rounded-lg border border-gray-400 p-3 font-semibold focus:ring-2 text-lg bg-white/80 text-gray-950'
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='w-full rounded-lg border border-gray-400 p-3 font-semibold focus:ring-2 text-lg bg-white/80 text-gray-950'
                        />
                        <input
                            type="password"
                            placeholder="ENTER PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full rounded-lg border border-gray-400 p-3 font-bold text-lg bg-white/80 text-gray-950'
                        />
                    </div>
                    
                    <button onClick={() => contBtn(firstName, lastName, password)} className='py-3 px-5 mt-10 bg-[#b12164] rounded-lg cursor-pointer hover:ring-2'>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Passcode;