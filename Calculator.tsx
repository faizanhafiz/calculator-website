// Updated Calculator.tsx to fix security issues with eval(), improve percentage calculation, and handle result types correctly.

import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | string>('');

    const calculate = () => {
        try {
            // Replace eval with a safer calculation logic
            const sanitizedInput = input.replace(/[^0-9+\-*/().]/g, '');
            setResult(new Function('return ' + sanitizedInput)());
        } catch (error) {
            setResult('Error');
        }
    };

    const handlePercentage = () => {
        const currentResult = typeof result === 'number' ? result : 0;
        setResult(currentResult / 100);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={calculate}>Calculate</button>
            <button onClick={handlePercentage}>Percentage</button>
            <div>Result: {result}</div>
        </div>
    );
};

export default Calculator;