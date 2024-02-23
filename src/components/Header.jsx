import React, { useState } from "react";


export default function FeedbackHeader(props) {
    const headerStyle = {
        background : props.bgColor,
        color: props.textColor
    }

    return (
        <header style={headerStyle}>
            <h2 className="text-center"  >{props.title}</h2>
        </header>
    );
}


FeedbackHeader.defaultProps = {
    title: 'Feedback app',
    bgColor: 'black',
    textColor: 'yellow'
}