import { useRef, useState } from "react";
const UseRefDemo = (prop) => {
    const [s, setS] = useState(1);
    let abc = 10;
    const ref = useRef(0);

    console.log("rendering...")
  return (
    <div>
        <p>{"let :" +abc}</p>
        <p>{"state:" + s}</p>
        <p>{"ref:" + ref.current}</p>
        <button className="border border-black z-10" onClick={() => {
                abc = abc+1; 
                setS(s+1);
                ref.current = ref.current+1;  
            }}>Increment</button>
    </div>

  )
}

export default UseRefDemo