import React, { useContext, useEffect } from "react";
import JokeList from "./JokeList";
import CreateJokeForm from "./CreateJokeForm";
import axios from "axios";
import { JokeContext } from "../contexts/JokeContext.js";

function AppJokes() {
    const [jokes, setJokes] = useContext(JokeContext);

    useEffect(() => {
        axios.get("https://the-joker-spa.herokuapp.com/api/jokes").then((res) => {
            console.log(res);
            setJokes(res.data);
        });
    }, []);

    return (
        <div className="App">
            <h1>My Jokes</h1>
            <CreateJokeForm />
            <JokeList />
        </div>
    );
}

export default AppJokes;