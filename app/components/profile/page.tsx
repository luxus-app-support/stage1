"use client";
import React, { useEffect, useState } from 'react'
import SidebarMenu from '../SidebarMenu'
import axios from 'axios';
import Head from 'next/head';
import Button from '@mui/material/Button'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Modal, Box, Typography, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { todo } from 'node:test';

const ProfilePage = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: ' 1px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

  const [update, setUpdate] = React.useState(false);
  const updateOpen = () => setUpdate(true);
  const updateClose = () => setUpdate(false);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [posts, Setpost] = useState([]); 
  const ApiEndpoint = "https://jsonplaceholder.typicode.com/users"
  // const ApiEndpoint = "https://api.publicapis.org/entries"

  useEffect(() => {

    const getPost = async () => {
     const {data: res}  = await axios.get(ApiEndpoint);
     Setpost(res);
    };
    getPost();
  },[])

 

  const todoSchema = Yup.object({
      name: Yup.string().required('please provide the name').min(3, 'please give 3 characters long').max(15,'too long maximum is 15 letters only'),
      username: Yup.string().required('please provide the username').min(3, 'please give 3 characters long').max(15,'too long maximum is 15 letters only'),
      email: Yup.string().required('please provide the email').min(3, 'please give right syntax of email').max(50,'too long maximum is 15 letters only').email('lagay ka ng @ para di mag pula'),
      phone: Yup.number().required('please provide the number')
  })

  const AddUser =async () => {
 
    const post  = { name: "Arkaluxus" , username: "Luxus" , email: "christiantabang@gmail.com" , phone: '09083779951'};
    await axios.post(ApiEndpoint , post);
    Setpost([post, ...posts]);
  }
  
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email:'',
      phone:''
    },
    validationSchema: todoSchema,
    onSubmit: async (values) => {
      const post  = { name: values.name , username: values.username , email: values.email , phone: values.phone};
      await axios.post(ApiEndpoint , post);
      Setpost([post, ...posts]);
      alert(JSON.stringify(values.name, null, 2));
    },
  });

  const formikupdate = useFormik({
    initialValues: {
      name: '',
      username: '',
      email:'',
      phone:''
    },
    validationSchema: todoSchema,
    onSubmit: async (post) => {
      post.name = "update name"; 
      alert(JSON.stringify(post, null, 2));
      await axios.put(ApiEndpoint + "/" + post.id);
      const postsClone = [...posts];
      const index = postsClone.indexOf(post);
      postsClone[index] = {...post};
      Setpost(postsClone);
    },
  });

  const handleUpdate = async (post) => {
    post.name = "update name"; 
    alert(JSON.stringify(post, null, 2));
    await axios.put(ApiEndpoint + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = {...post};
    Setpost(postsClone);
   
  };


  return (
    <>

<div>
     
<Modal
        open={update}
        onClose={updateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style} >
           <h2 className='flex justify-center mb-3'>Edit Users</h2>

          <Formik 
            initialValues={{

              name: '',
              username: '', 
              email:''
              
            }}
            validationSchema={todoSchema}
            onSubmit={(valuess) => {
              console.log(valuess)
            }}
          >
            {
            (props) => (
            <Form onSubmit={ ()=> formikupdate.handleSubmit(posts)}>
      
              <Grid container spacing={2}>
              <Grid item xs={6}>
                
              <TextField id="outlined-basic" name='name' value={formikupdate.values.name}  onChange={formikupdate.handleChange}   onBlur={formikupdate.handleBlur}
                error={formikupdate.touched.name && Boolean(formikupdate.errors.name)}
               helperText={formikupdate.touched.name && formikupdate.errors.name}  label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
              <TextField id="outlined-basic" error = {formikupdate.touched.username && Boolean(formikupdate.errors.username)} helperText={formikupdate.touched.username && formikupdate.errors.username}  value={formikupdate.values.username} onChange={formikupdate.handleChange} onBlur={formikupdate.handleBlur} name='username' label="Username" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
              <TextField id="outlined-basic" error = {formikupdate.touched.email && Boolean(formikupdate.errors.email)} helperText={formikupdate.touched.email && formikupdate.errors.email} value={formikupdate.values.email} onChange={formikupdate.handleChange} onBlur={formikupdate.handleBlur} name='email' label="Email" type='email' variant="outlined" />
              </Grid>
              <Grid item xs={6}>
              <TextField id="outlined-basic" error = {formik.touched.phone && Boolean(formikupdate.errors.phone)} helperText={formikupdate.touched.phone && formikupdate.errors.phone} value={formikupdate.values.phone} onChange={formikupdate.handleChange}  onBlur={formikupdate.handleBlur} name='phone' label="Phone" type='number' variant="outlined" />
              </Grid>
              </Grid>
              <Button className='bg-blue-500 mt-3' size='small' type='submit' variant='contained' >Update</Button>
            </Form>
               )
            }
          </Formik>
  

   
  
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style} >
           <h2 className='flex justify-center mb-3'>Add Users</h2>

          <Formik 
            initialValues={{

              name: '',
              username: '', 
              email:''
              
            }}
            validationSchema={todoSchema}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {
               (props) => (
            <Form onSubmit={formik.handleSubmit}>
      
              <Grid container spacing={2}>
              <Grid item xs={6}>
                
              <TextField id="outlined-basic" name='name' value={formik.values.name}  onChange={formik.handleChange}   onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
               helperText={formik.touched.name && formik.errors.name}  label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
              <TextField id="outlined-basic" error = {formik.touched.username && Boolean(formik.errors.username)} helperText={formik.touched.username && formik.errors.username}  value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} name='username' label="Username" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
              <TextField id="outlined-basic" error = {formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' label="Email" type='email' variant="outlined" />
              </Grid>
              <Grid item xs={6}>
              <TextField id="outlined-basic" error = {formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} value={formik.values.phone} onChange={formik.handleChange}  onBlur={formik.handleBlur} name='phone' label="Phone" type='number' variant="outlined" />
              </Grid>
              </Grid>
              <Button className='bg-blue-500 mt-3' size='small' type='submit' variant='contained'>Submit</Button>
                </Form>
               )
            }
          </Formik>
  

   
  
        </Box>
      </Modal>

    </div>

    <div> 
      <Head>
        <title>Luxus Admin</title>
        <meta name="description" content="luxus" />
      </Head>

    
 

      <main className='mr-10 flex justify-end ... ' >
     
      <div className="order-first "> <SidebarMenu /></div>
        <div className=" "> 
          <h2 className='my-5 font-bold flex justify-center ...'>There are  {posts.length} post in the database</h2>
          <Button className='bg-blue-500 mb-3' onClick={handleOpen}  variant='contained'  endIcon={<AddOutlinedIcon/>} >Add User </Button>
          <table className="border-separate border border-gray-800 ...">
            <thead>
              <tr>
                <th className='px-2 border border-gray-600 ...'> Name</th>
                <th className='px-2 border border-gray-600 ...'> Username</th>
                <th className='px-2 border border-gray-600 ...'> Email</th>
                <th className='px-2 border border-gray-600 ...'> Phone</th>
                <th className='px-2 border border-gray-600 ...'>Update</th>
                <th className='px-2 border border-gray-600 ...'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map( post =>
                <tr key={post.id} className=''>
                  <td className='px-2 border border-gray-600 ...'>{post.name}</td>
                  <td className='px-2 border border-gray-600 ...'>{post.username}</td>
                  <td className='px-2 border border-gray-600 ...'>{post.email}</td>
                  <td className='px-2 border border-gray-600 ...'>{post.phone}</td>
                  <td className='px-2 border border-gray-600 ...'><button className='bg-sky-300 text-gray-800 border-gray-100 rounded-lg px-4' onClick={ ()=> updateOpen(post) } > Update</button></td>
                  <td className='px-2 border border-gray-600 ...'><button className='btn btn-danger bg-red-300 btn-sm rounded-lg px-4 my-1'> Delete</button></td>
                </tr>
                )}
            </tbody>
          </table>
        </div>
  
        
  
      </main>
    </div>
</>
  )
}

export default ProfilePage