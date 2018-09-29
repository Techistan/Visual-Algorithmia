import React, { Component } from 'react';
import {Carousel} from 'antd';
import '../node_modules/antd/dist/antd.css';
import OCR from './ocr';
import Colorful from './colorful';
import DeepFashion from './deepfashion';
import Nudity from './nudity'; 


class App extends Component 
{

  render() 
  {
    return (

      <main style={{marginTop:'20%'}}>

      <Carousel vertical>
           <div><OCR/></div>
           <div><Colorful/></div>
           <div><DeepFashion/></div>
           <div><Nudity/></div>
      </Carousel>
      
      </main>
    );
  }
}


export default App;