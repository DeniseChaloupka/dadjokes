import React, { useState } from "react";
import axiosWithAuth from "../auth/axiosWithAuth";

const EditJokeForm = ({ joke, history }) => {
    const [newJoke, setNewJoke] = useState({});

    const handleChanges = (event) => {
        setNewJoke({ ...newJoke, [event.target.name]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();

        const updatedJoke = {
            id: joke.id,
            punch_line: newJoke.punch_line,
            setup: newJoke.setup
        };

        axiosWithAuth()
            .put(`/jokes/${joke.id}`, updatedJoke)
            .then(() => history.push("/dashboard"))
            .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="setup">Joke Title.</label>
            <br />
            <br />
            <input
                id="setup"
                type="text"
                name="setup"
                placeholder="Enter a title"
                onChange={handleChanges}
                value={newJoke.setup}
            />
            <label htmlFor="category">Category.</label>
            <br />
            <br />
            <input
                id="category"
                type="text"
                name="category"
                placeholder="Enter a category"
                onChange={handleChanges}
                value={newJoke.category}
            />
            <br />
            <br />
            <label htmlFor="joke"> Punchline </label>
            <br />
            <br />
            <textarea
                id="joke"
                name="punch_line"
                placeholder=" Enter the punchline"
                onChange={handleChanges}
                value={newJoke.punch_line}
            />
            <br />
            <br />
            <button type="submit"> Add Jokes </button>
        </form>
    );
};

export default EditJokeForm;