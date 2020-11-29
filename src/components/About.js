import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../styles/About.css';

export default function About() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        if (checked === false) {
            setChecked(true);
        }
    });
    
    return (
        <div className="about-container">
            <Paper elevation={4} className="about-item">
                <Typography variant="h5" component="h5" className="about-text">
                    Hey there, my name is Jeremy and I'm a third year Commerce/Computer Science student at UNSW.
                    My hobbies include photography, travel, niche indie bands, competing in Pokemon TCG and coding!
                    This website aims to document my journey as a developer, and showcase my numerous projects
                    (even those that couldn't come into fruition).
                </Typography>
            </Paper>
        </div>
    )
}