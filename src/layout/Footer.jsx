import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="github-icon">
                <a
                    href="https://github.com/j471n"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Github Logo"
                    />
                </a>
            </div>

            <p className="credit">
                Created By
                <a
                    href="https://github.com/j471n"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Jatin Sharma
                </a>
            </p>
        </footer>
    );
};

export default Footer;
