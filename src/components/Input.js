import React from 'react'
import axios from 'axios';
import "../styles/Input.css"
import { response } from 'express';

 const Input = () => {
    function handleChange(e){
        if(e.target.value == '') return;

        document.getElementById('output').value = "loading...";
        const file = document.querySelector('input[type = file').files[0];
        document.getElementById('label-id').innerHTML = file.name;
        const reader = new FileReader();

        if(file){
            reader.readAsDataURL(file);
        }
        reader.onload = function(){
            document,getElementById("previewImg").src = reader.result
            console.log("post request...")
            axios.post("http://api.ocr/space/parse/image" , {
                "base64Image" : reader.result
            },{
                headers:{
                    "Content-Type":"multipart/form-data;",
                    "apikey": "K82116924188957"
                }
            }).then((response)=>{
                document.getElementById("output").value = response.data.ParsedResults[0].ParsedText
            }).catch((err)=>{
                console.log("There was some error in api request : ",err);
                <h2 className="error">There was some error in api</h2>
            })
        }

    }

  return (
    <div>
        <div className="inputContainer">
            <div className="inputItem">
                Select any Image you want to extract text from:  
            </div>
            <label htmlFor='file-input' className='inputButton' id='lableId'>Select Image</label>
            <input id='file-input' style={{display:"none"}} type='file' onChange={handleChange}/>
        </div>
    </div>
  )
}
export default Input;
