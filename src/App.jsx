import React, { useState } from 'react';
import './App.css';
import profilepic from '../public/images/neta_dror.jpg';

function App() {
    const responses = [
        "Wouldn't you like to know? 😏",
        "It's a mystery! 🧩",
        "I'm still debugging 🐛",
        "Depends on who's asking 🙃",
        "Maybe my image below has a clue 🤔",
        "Why? What did you hear? 😅",
        "Error 404: cute smart guy not found (yet) 💻",
        "That's classified information 🔐",
        "The universe hasn't decided yet 🌌",
        "Bits me 🤖",
        "Currently accepting applications 📝",
        "I'm waiting for [?] 🕵️",
        "Maybe he's waiting for the loading screen to finish 🕙",
        "It's a secret 🤫",
        "I think the HUH cat knows 🐱",
        "I'll go ask my plants 🌱",
        "Maybe the next chapter still buffering? 💻",
        "I ask myself the same question 🤔",
        "Maybe he's too nervous to ask 💘",

    ];

    const [currentResponse, setCurrentResponse] = useState("");
    const [responseGenerated, setResponseGenerated] = useState(false);
    const [responseIndex, setResponseIndex] = useState(0);
    const [copyMessage, setCopyMessage] = useState(false);

    const generateResponse = () => {
        setResponseIndex((prevIndex) => {
            const newIndex = prevIndex === responses.length - 1 ? 0 : prevIndex + 1;
            setCurrentResponse(responses[newIndex]);
            return newIndex;
        });
        setResponseGenerated(true);
    };

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopyMessage(true);
            setTimeout(() => {
                setCopyMessage(false);
            }, 2000);
        } catch (error) {
            console.log('Error copying to clipboard:', error);
            alert('Could not copy link. Please try again!');
        }
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
                                Wanna help solve the mystery?
                            </p>
                            <div className="socials">
                                <a href="https://x.com/netadror" target="_blank">Twitter</a>
                                <a href="https://www.linkedin.com/in/netadror/" target="_blank">LinkedIn</a>
                                <a href="https://www.instagram.com/neta_dror/" target="_blank">Instagram</a>
                                <a href="https://www.facebook.com/netadror" target="_blank">Facebook</a>
                                {/* share */}

                            </div>

                            <div className="share-links">
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
                    </div>
                )}
                <div className="share-container">

                    <button onClick={handleShare} className="share-button">Copy link 🔗</button>
                    {copyMessage && (
                        <div className="copy-message">
                            Link copied to clipboard! 📋
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default App;
