import React from 'react';
import './style.scss'
import PageSpeaker from '../assets/81Z-7PzoB9L 1.png'
import pageCharacter from '../assets/Group 22.png'

const SectionSpeakers = () => {
    return (
        <div className={'container'}>
            <div style={{display:'flex'}}>
                <div className={'sectionstyle'}>
                    <h2 className={'sectionstyle-title1'}>An exciting place</h2>
                    <h2 className={'sectionstyle-title2'}>for the whole family to shop.</h2>
                    <p className={'sectionstyle-p'}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    <div className={'sectionstyle-btnGroup'}>
                        <button className={'sectionstyle-btn'}>Shop Now</button>
                        <h5 className={'sectionstyle-price'}>$ 249.99</h5>
                        <p className={'sectionstyle-p2'}>$ 249.99</p>
                    </div>
                </div>
                <div style={{marginTop:'80px'}}>
                    <img src={PageSpeaker} alt=""/>
                </div>
            </div>
            <div>
                <img className={'sectionstyle-imgCharacter'} src={pageCharacter} alt=""/>
            </div>
        </div>
    );
};

export default SectionSpeakers;