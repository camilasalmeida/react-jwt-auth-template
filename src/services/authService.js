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



export {
    signup,
};