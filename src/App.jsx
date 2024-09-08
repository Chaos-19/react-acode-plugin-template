import React, { useState, useRef } from "react";
import { JsonCrack as Graph } from "jsongraph-react";

const App = ({ cacheFile, cacheFileUrl }) => {
    const [count, setCount] = useState(0);
    const graphRef = useRef();

    const json = JSON.stringify({
        id: "1",
        name: "aykut"
    });

    return (
        <div>
            <h1>Hello from React inside Acode Plugin!</h1>
            <p>{count}</p>
            <div
                style={{
                    margin: "10px",
                    padding: "20px",
                    border: "2px solid red",
                    borderRadius: "5px",
                    width: "100%",
                    width: "280px"
                }}
            >
                >
                <Graph json={json} ref={graphRef} />
            </div>
            <button
                onClick={() => setCount(count + 1)}
                style={{
                    margin: "10px",
                    padding: "20px",
                    border: "2px solid red",
                    borderRadius: "5px"
                }}
            >
                Click
            </button>
        </div>
    );
};

export default App;
