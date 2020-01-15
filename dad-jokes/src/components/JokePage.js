import React, { useState, useEffect } from "react";
import axios from "axios";
import JokeCard from "./JokeCard.js";
import EditJokeForm from "./EditJokeForm.js";

const JokePage = (props) => {
    const [joke, setJoke] = useState({});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        axios
            .get(
                `https://the-joker-spa.herokuapp.com/api/jokes/${props.match.params.id}`
            )
            .then((res) => {
                console.log(res.data);
                setJoke(res.data);
            })
            .catch((err) => console.log(err));
    }, [props.match.params.id]);

    if (!joke) {
        return <div>Loading joke...</div>;
    }

    return (
        <>
            <JokeCard joke={joke} />
            <button type="button" onClick={() => setEdit(!edit)}>
                EDIT
      </button>
            <button
                type="button"
                onClick={() => {
                    // deleteJoke();
                }}
            >
                DELETE
      </button>

            {edit && <EditJokeForm joke={joke} history={props.history} />}
        </>
    );
};

export default JokePage;