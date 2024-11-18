import React, { useState } from "react";
import "./Widget.css";

const Widget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleWidget = () => setIsOpen(!isOpen);

    return (
        <div className={`widget-container ${isOpen ? "open" : ""}`}>
            <button className="widget-toggle" onClick={toggleWidget}>
                {isOpen ? "close" : "open"}
            </button>
            {isOpen && (
                <div className="widget-content">
                    <h4>Your Widget</h4>
                    <p>Content</p>
                </div>
            )}
        </div>
    );
};

export default Widget;
