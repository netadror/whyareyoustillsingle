import React, { useState } from 'react';
import './App.css';
import profilepic from '../public/images/neta_dror.jpg';

function App() {
    const responses = [
        "Wouldn't you like to know? 😏",
        "Depends on who's asking 🙃",
        "Why? Why did you hear? 😅",
        "It's a mystery! 🧩",
        "I'll ask the cat 🐱",
        "That's classified information 🔐",
        "The universe hasn't decided yet 🌌",
        "Bits me, bytes me 🤖",
        "I'm waiting for [?] 🕵️",
        "Maybe he's waiting for the loading screen to finish 🕙",
        "It's a secret 🤫",
        "I think the HUH cat knows 🐱",
        "Maybe my image below has a clue 🤔",
        "I'll go ask my plants 🌱",
        "Maybe the next chapter still buffering? 💻",
    ];

    const [currentResponse, setCurrentResponse] = useState("");
    const [responseGenerated, setResponseGenerated] = useState(false);
    const [responseIndex, setResponseIndex] = useState(0);

    const generateResponse = () => {
        setResponseIndex((prevIndex) => {
            const newIndex = prevIndex === responses.length - 1 ? 0 : prevIndex + 1;
            setCurrentResponse(responses[newIndex]);
            return newIndex;
        });
        setResponseGenerated(true);
    };

    return (
        <div className="App">
            <div className="main-container">
                <div className="header">
                    {!responseGenerated && (
                        <img src="https://media1.tenor.com/m/7l4PXSCFjjQAAAAd/huh-cat.gif" alt="cat-gif" />
                    )}
                    {!responseGenerated ? <h1>Neta, Why Are You Still Single?</h1> : <p className="response">{currentResponse}</p>}
                </div>
                <button style={{ margin: !responseGenerated ? "30px" : "0px" }} onClick={generateResponse}>
                    {responseGenerated ? "Get Another Reason" : "Find Out Why"}
                </button>
                {currentResponse && (
                    <div className="response-container">
                        <div className="profile">
                            <div className="image-container">
                                <img className="main-image" src={profilepic} alt="neta" />
                                <img className="hover-image" src="https://media1.tenor.com/m/1MfIiC1yllEAAAAC/cat-huh-cat-huh-etr.gif" alt="Huh cat" />
                            </div>
                            <p>
                                Help solve the mystery!
                            </p>
                            <div className="socials">
                                <a href="https://x.com/netadror" target="_blank">Twitter</a>
                                <a href="https://www.linkedin.com/in/netadror/" target="_blank">LinkedIn</a>
                                <a href="https://www.instagram.com/neta_dror/" target="_blank">Instagram</a>
                                <a href="https://www.facebook.com/netadror" target="_blank">Facebook</a>
                                <a href="https://github.com/netadror" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                )}
                <a
                    href="https://github.com/netadror/whyareyoustillsingle.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clone-link"
                >
                    💻 Clone this repo & make your own!
                </a>
            </div>
        </div>
    );
}

export default App;
