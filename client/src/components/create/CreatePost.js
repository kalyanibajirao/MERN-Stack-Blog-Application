import styled from "@emotion/styled";
import { Box, Button, FormControl, InputBase, TextareaAutosize,  } from "@mui/material";
import React, {  useContext, useEffect, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useLocation , useNavigate} from "react-router-dom";
import { DataContext } from "../../context/dataprovider";
import { API } from "../../service/api";


const Container = styled(Box)`
    margin: 50px 100px;
  `;

  const Image = styled("img")({
    height: "50vh",
    width: "100%",
    objectFit: "cover",
  });

  const InitialPost = {
    title :'',
    description: '',
    picture: '',
    categories: '',
    createdDate: new Date()
  }

  const TextareaAuto = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 50px;
  font-size: 18px;
  border: none;
  & focus-visible{
    outline: none;
  }`

  const StyleFormControl = styled(FormControl)`
  margin-top : 14px;
  display: flex;
  flex-direction: row;
  `;

  const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 20px;
  `

const CreatePost = () => {

  const [post, setpost] = useState(InitialPost);
  const [file, setFile] = useState('');

  const {account} = useContext(DataContext);

  const location = useLocation();
  const navigate = useNavigate();

  const url = post.picture ? post.picture :"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";


  useEffect(() =>{
    const getImage =  async () => {
        if (file) {
            const data= new FormData();
            data.append("name", file.name);
            data.append("file",file);

            //API CALL
            const response = await API.uploadFile(data);
            post.picture = response.data;

        }
    }
 
   getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
  }, [file])
  
  const handleChange = (e) => {
    setpost({...post, [e.target.name]: e.target.value})
  }

  const savePost = async () => {
    let response = await API.createPost(post);
    if (response.isSuccess) {
      navigate('/');
    }
  }

  return (
    <Container>
      <Image src={url} alt="banner" />

      <StyleFormControl>
        <label htmlFor="fileinput">
          <AddCircleIcon fontSize="large" color="action" />
        </label>
        <input type="file" id="fileinput"
        style={{display :"none"}} onChange={(e) => setFile(e.target.files[0])}/>

        <InputTextField placeholder="Title" onChange={(e) => handleChange(e)} name="title"/>
        <Button variant="contained" onClick={() => savePost()}> Publish</Button>
      </StyleFormControl>
      <TextareaAuto onChange={(e) => handleChange(e)} name="description"
      minRows={5}
      placeholder="Tell Your Story..."/>
    </Container>
  );
};

export default CreatePost;
