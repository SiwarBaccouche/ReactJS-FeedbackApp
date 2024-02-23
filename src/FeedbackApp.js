import React, { useState } from "react";
import './App.css';
import FeedbackHeader from "./components/Header";
export default function FeedbackApp() {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
       setLoading(false)
    }, 3000);
    if (loading) return <h2>Loading ...</h2>
    return (
        <div className='container'>
           < FeedbackHeader/>
        </div>
    );
}

