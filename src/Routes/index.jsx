import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Tool from "../components/Tool";

const index = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="home__main">
                <h1>css style</h1>
                <p>
                    Hi there
                    <span role="img" aria-label="emoji">
                        👋
                    </span>
                    , By this website you can copy the styles and paste in your
                    project, Hope you'll like it.
                </p>
            </main>

            <section className="tools">
                <h1>Tools & Utilities</h1>

                <div className="tools_tool">
                    <Tool name="box-shadow" />
                    <Tool name="buttons" />
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default index;
