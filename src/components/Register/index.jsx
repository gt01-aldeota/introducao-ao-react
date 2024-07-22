import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [error, setError] = useState("");
    
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
        localStorage.setItem("token", "1234");
        navigate("/");
        } catch (error) {
        setError(error.response.data.error);
        }
    };
    
    return (
        <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
            <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            />
            <input
            type="text"
            placeholder="Zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
        {error && <p>{error}</p>}
        </div>
    );
}
