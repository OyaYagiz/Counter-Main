import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

    return (
    <div className="d-flex justify-content-center align-items-center gap-5">
        <button onClick={() => setCount(count - 1)} className="btn btn-danger">Azalt</button>

        <p className="lead fs-1">{count}</p>

        <button onClick={() => setCount(count + 1)}className="btn btn-success">
            Arttır</button> 
    </div>
    );
};

export default Counter;

