import React from "react";

const JokeCard = ({ joke }) => {
    return (
        <div>
            <h2>{joke.setup}</h2>
            {joke.punch_line ? <p>{joke.punch_line}</p> : <p>{joke.punchLine}</p>}
        </div>
    );
};

export default JokeCard;