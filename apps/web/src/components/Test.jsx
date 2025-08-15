import React, { useEffect, useState } from "react";
function Test() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`Count is now: ${count}`);
    });
    return (
        <button className= "border-2 border-black " onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    );
}

export default Test;