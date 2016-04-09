/**
 * Created by shishirarora on 16/03/16.
 */
import React, { PropTypes, Component }  from 'react';
import dataFactory from '../utils/data';
import Header from './Header';
import SliderWindow from './SliderWindow';
import Section from './Section';

class Trigger extends React.Component{

    render() {
        return (

            <div className="container">
                <div className="inner-container">
                    <Header header={dataFactory.header}/>
                    {dataFactory.sections.map(
                        (section,i)=><Section key={i} section={section}/>
                    )}
                    <SliderWindow images={dataFactory.images}/>
                </div>
            </div>
        );
    }
}

export default Trigger
