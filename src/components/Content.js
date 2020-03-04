import React from 'react';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Projects from '../components/Projects';
import Snapshots from '../components/Snapshots';
import './Content.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { icons } from "../data/icons";
import { photos } from "../data/photos";
import { cards } from "../data/cards";


const slider = (
    <AwesomeSlider transitionDelay={0}>
        <div data-src="./assets/home/pic1.jpg" />
        {/* <div data-src="./assets/pic2.jpeg" /> */}
        <div data-src="./assets/home/pic3.jpg" />
        <div data-src="./assets/home/pic4.jpg" />
    </AwesomeSlider >
)

export default class Content extends React.Component {
    render() {
        return (
            <div className="content-container">
                <div id="home">{slider}</div>
                <div id="about"><About /></div>
                <div id="snapshots"><Snapshots photos={photos} /></div>
                <div id="projects"><Projects cards={cards} icons={icons} /></div>
                {/* <div id="contact"><ContactForm /></div> */}
            </div>
        )
    }
}