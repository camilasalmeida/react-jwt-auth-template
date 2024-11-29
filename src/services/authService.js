// src/services/authService.js
const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;                // Define our signin method. This is our Express API url.

const signup = async (formData) => {
try {
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),                       // JSON.stringify(formData) converts the JavaScript object formData into a JSON string.
    });
    const json = await res.json();
    console.log(json);
    if (json.err) {
        throw new Error(json.err);
    }
    return json;
} catch (err) {
    console.log(err);
    throw err;
}
}

const signin = async (user) => {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
        const json = await res.json();
        console.log(json);

        if (json.error) {
            throw new Error(json.error);
        }
        if (json.token) {
            const user = JSON.parse(atob(json.token.split('.')[1]));
            console.log(user);
            return user;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}


export {
    signup,
    signin,
};