import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";

// ACTION
import { addJoke } from "../contexts/JokeContext";

const AddJokeForm = ({ values, errors, touched, status }) => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        status && setJokes(jokes => [...jokes, status]);
    }, [status]);

    return (
        <div className="user-form">
            <Form>
                <h1>Add A Joke</h1>
                <Field component="textarea" name="question" placeholder="Question" />
                {touched.question && errors.question && <p>{errors.question}</p>}
                <Field component="textarea" name="punchline" placeholder="Punch line" />
                {touched.punchline && errors.punchline && <p>{errors.punchline}</p>}
                <FormGroup check>
                    <Label check>
                        <Field
                            name="privateJoke"
                            type="checkbox"
                            checked={values.privateJoke}
                        />
                        Set to private
          </Label>
                </FormGroup>

                <Button type="submit">Submit</Button>
            </Form>

            {jokes.map(joke => {
                return (
                    <ul key={joke.id}>
                        <li>Question: {joke.question}</li>
                        <li>Punchline: {joke.punchline}</li>
                    </ul>
                );
            })}
        </div>
    );
};

const FormikAddJokeForm = withFormik({
    mapPropsToValues({ question, punchline, privateJoke, user_id }) {
        return {
            question: question || "",
            punchline: punchline || "",
            privateJoke: privateJoke || false,
            user_id: Number(localStorage.getItem('user_id'))
        };
    },
    validationSchema: Yup.object().shape({
        question: Yup.string().required("QUESTION IS REQUIRED"),
        punchline: Yup.string().required("PUNCHLINE IS REQUIRED")
    }),
    handleSubmit(values, { props }) {

        props.addJoke(values, props.history);
        console.log("submitting", values, props);
    }
})(AddJokeForm);
export default connect(null, { addJoke })(FormikAddJokeForm);
