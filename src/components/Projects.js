import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
// import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import './Projects.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function Projects(props) {
    const[checked, setChecked] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        if (checked === false) {
            setChecked(true);
        }
    });

    const projects = props.cards;

    function getIcon(target) {
        for (var i = 0; i < props.icons.length; i++) {
            if (target === props.icons[i].name) {
                console.log(target + " true");
                return props.icons[i].thumbnail;
            }
        }

        return null;

    }

    return (
        projects.map((project, key) => {
            return (
                <Slide direction={key % 2 ? "left" : "right"} in={checked} mountOnEnter unmountOnExit timeout={{ enter: 1000 }}>
                    <div className="projects-container">
                        <Paper elevation={4} className="projects-item">
                            <Typography component="img" src={project.thumbnail} style={{ height: '20%', width: '20%' }}/>
                            <Typography variant="h4" component="h4" style={{ color: 'black', fontFamily: 'Frutiger' }}>
                                {project.title}
                            </Typography>
                            <Typography variant="h4" component="h4">
                                {project.skills.map((skill, key) => {
                                    var image = getIcon(skill);
                                    return(
                                        <Tooltip title={skill}>
                                            <img src={image} style={{ width: '1.2em', height: '1.2em' }}></img>
                                        </Tooltip>
                                    )
                                })}
                            </Typography>
                            <Typography component="h5" className="text">
                                {project.text}
                            </Typography>
                            <Typography variant="h4" component="h4">
                                {project.github !== '' && <Tooltip>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <img src="./assets/logos/github-brands.svg" style={{ width: '1em', height: '1em' }}></img>
                                    </a>
                                </Tooltip>}
                                {project.website !== '' && <Tooltip>
                                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                                        <img src="./assets/logos/at-solid.svg" style={{ width: '1em', height: '1em' }}></img>
                                    </a>
                                </Tooltip>}
                            </Typography>
                        </Paper>
                    </div>
                </Slide>
            )
        })
    );
}