import React, { useContext } from "react";
import JokeCard from "./JokeCard.js";
import { Link } from "react-router-dom";
import { JokeContext } from "../contexts/JokeContext.js";

const JokeList = () => {
    const [jokes, setJokes] = useContext(JokeContext);

    return (
        <div>
            {jokes.map((joke) => {
                return (
                    <>
                        <Link to={`/dashboard/${joke.id}`} key={joke.id}>
                            <JokeCard joke={joke} />
                        </Link>
                        <button
                            type="button"
                            onClick={() =>
                                setJokes(jokes.filter((item) => item.id !== joke.id))
                            }
                        >
                            DELETE
            </button>
                        <hr />
                    </>
                );
            })}
        </div>
    );
};

export default JokeList;