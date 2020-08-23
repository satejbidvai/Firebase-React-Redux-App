import React, { useState } from 'react';

const SignIn = () => {
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formFields);
    };

    return (
        <div className="container">
            <form onSubmit={submitHandler} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={changeHandler}
                        value={formFields.email}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={changeHandler}
                        value={formFields.password}
                    />
                </div>

                <div className="input-field">
                    <button
                        className="btn pink lighten-1 z-depth-0"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
