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
            url:'http://localhost:9000/nudity',
            data:formData,
            headers:{
                  'Access-Control-Allow-Origin':'http://localhost:9000',
                  'Content-Type': 'multipart/form-data'
            }
         }).then((response)=>{
             console.log(response.data.data);
         }).catch((err)=>{
            console.log(err);
         })
    }

    render()
    {
        return(
            <main>
                
                <h1 style={{color:'white'}}>Nudity Detection</h1>
                <p style={{color:'white'}}>Detect nudity in pictures</p>
                <input name="avatar" id="image" type="file" onChange={(e) => {alert('File is Selected Click Submit button'); this.setState({ selectedFile: e.target.files[0]})} }/>
                <input type="submit" onClick={this.API.bind(this)}/>
            </main>)
    }
}