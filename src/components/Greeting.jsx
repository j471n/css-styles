import React from "react";

const Greeting = ({ title }) => {
    return (
        <div className="greeting">
            <h1>
                Hi there! <span role="img" aria-label="emoji">👋</span>
            </h1>
            <p>
                Here are some CSS {title} for you to use on your next work!
                Click on one of them to copy its style to your clipboard!
            </p>
        </div>
    );
};

export default Greeting;
