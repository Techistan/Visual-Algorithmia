import React from 'react';
import axios from 'axios';
export default class extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {selectedFile:''}
    }

    API()
    {
        let formData = new FormData();
        formData.set('avatar', this.state.selectedFile);

        axios({
            method:'post',
            url:'http://localhost:9000/ocr',
            data:formData,
            headers:{
                  'Access-Control-Allow-Origin':'http://localhost:9000',
                  'Content-Type': 'multipart/form-data'
            }
         }).then((response)=>{
             console.log(response.data.data);
         }).catch((err)=>{
            alert('Server Server');
         })
    }
    render()
    {
        return(
        <main id="container">
            <h1 style={{color:'white'}}>OCR</h1>
            <p style={{color:'white'}}>Use character recognition to extract text from an image</p>
            <input name="avatar" id="image" type="file" onChange={(e) => {alert('File is Selected Click Submit button'); this.setState({ selectedFile: e.target.files[0]})} }/>
            <input id="submit" type="submit" onClick={this.API.bind(this)}/>
        </main>
        )
    }
}