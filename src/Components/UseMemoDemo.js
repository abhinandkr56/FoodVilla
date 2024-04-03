import React, { memo, useMemo, useState } from 'react'

export const UseMemoDemo = () => {

    const [text, setText] = useState(0);
    const [colorDark, setColorDark] = useState(true)


    function isPrime(num) {

        if (num <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
           return false;
          }
        }
        return true;
       }
      
       //Function to find the nth prime number
       function findNthPrime(n) {
        console.log("find prime called")

        let count = 0;
        let num = 2;
        while (count < n) {
          if (isPrime(num)) {
           count++;
          }
          num++;
        }
        return num - 1;
       }

       const memoizedText = useMemo(() => findNthPrime(text), [text]);


  return (
    <>
        <div className={"px-2 py-2 border border-black flex flex-col h-20" + (colorDark ? " bg-black" : "")} >
            
            <input className='w-20 border border-blue-100' onChange={(e) => setText(e.target.value)} value={text} type='number'></input>
            <p className='mx-3 text-2xl font-bold'>{memoizedText}</p>
        </div>
        <button onClick={() => setColorDark(!colorDark)}>change color</button>
    </>
  )
}

export default memo(UseMemoDemo);