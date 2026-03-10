import React, { useRef, useState } from 'react';
import './MagneticButton.css'; // Import the CSS file below

const MagneticButton = ({ children, onClick, href, className = '', type = 'button', ...rest }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        // The multiplier (0.3) controls the strength of the magnetic pull
        const x = (e.clientX - left - width / 2) * 0.3;
        const y = (e.clientY - top - height / 2) * 0.3;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        // Reset position smoothly when the mouse leaves
        setPosition({ x: 0, y: 0 });
    };

    // Render an <a> tag if an href is provided, otherwise a <button>
    const Component = href ? 'a' : 'button';
    const buttonProps = href ? {} : { type };

    return (
        <Component
            href={href}
            ref={buttonRef}
            className={`dulcedo-btn ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            {...buttonProps}
            {...rest}
        >
            <span>{children}</span>
        </Component>
    );
};

export default MagneticButton;
