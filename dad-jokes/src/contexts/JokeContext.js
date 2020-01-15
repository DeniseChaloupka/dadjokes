import React, { createContext, useState } from "react";

export const JokeContext = createContext();

const JokeProvider = (props) => {
    const [jokes, setJokes] = useState([{ id: 1, setup: "", punch_line: "" }]);

    return (
        <JokeContext.Provider value={[jokes, setJokes]}>
            {props.children}
        </JokeContext.Provider>
    );
};

export default JokeProvider;