import React from "react";
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


// components
import ProjectNavbar from "components/Navbars/Users/Projects/ProjectNavbar.js";
import ProjectHeader from "components/Projects/ProjectHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Sidebar from "components/Sidebar/Sidebar.js";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '50ch',
        },
      },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));


export default function AddProjects() {
    const classes = useStyles();
    const [val, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [type, settype] = useState('');
  
    const handleChange = (event) => {
      settype(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const [title, settitle] = useState('');
    const [date, setdate] = useState('');
    const [intro, setintro] = useState('');
    const [image, setimage] = useState('');
    const [readMore, setreadMore] = useState('');
    const history = useHistory();

  
    function submit(event){
      event.preventDefault();
      axios.post(`http://localhost:3001/add_projects`, {
          "type":type,
          "title":title,
          "date":date,
          "image":image,
          "intro":intro,
          "read_more":readMore, 
        })
        .then(function (response) {
            // handle success
            console.log(response.data.response);
            alert(response.data.response);
            settitle("");
            setdate("");
            setintro("");
            image("");
            setreadMore("");
            settype("");
  
        })
        .catch(function (error) {
            // handle error
            //alert("error!!!!");
           // alert(error.response.data.response);
        })
        .then(function () {
            // always executed
  
        });
    }
  return (
    <>
    
  <main>
  <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <ProjectNavbar />
      {/* Header */}
      <ProjectHeader />
      <section className="pb-18 relative block bg-white">

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br /> <br /> <br /> <br /> 
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h1 className="text-2xl font-semibold text-center uppercase justify-center">
                     Enter Project Details Here
                    </h1>
                     
                    <div className="relative w-full mb-3 mt-8">
                    <labe className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Project Type</labe> 
                    <FormControl className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={type}
                            onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"future_project"}>Future Project</MenuItem>
                            <MenuItem value={"past_project"}>Past Project</MenuItem>
                            <MenuItem value={"present_project"}>Present Project</MenuItem>
                        </Select>
                    </FormControl><br />    
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Project Title
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Donor Name" onChange={(event)=>{settitle(event.target.value);}} 
                        required
                        placeholder="Enter Title..."/>
                    </div>

                     <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Date
                      </label>
                      <input type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Date" onChange={(event)=>{setdate(event.target.value);}} 
                        required
                        placeholder="Date"/>
                    </div>
                        <br/>
                    <div className={classes.root}>
                    <input
                            accept="image/*"
                            className={classes.input}
                            id="upload-proj-picture"
                            multiple type="file"
                        />
                       
                        <label htmlFor="upload-proj-picture">

                       <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                >
                                Upload Project image
                            </button> 
                        </label>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Project Introduction
                      </label>
                      <input type="text"
                        className=" multiline maxRows={6} border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Introduction" onChange={(event)=>{setintro(event.target.value);}} 
                        required
                        placeholder="Introduction..."/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Read More
                      </label>
                      <input type="text"
                        className=" multiline maxRows={6} border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Read More" onChange={(event)=>{setreadMore(event.target.value);}} 
                        required
                        placeholder="Enter more things about the project..."/>
                    </div>

                    <box>
                    <div className="text-center mt-6">
                      {/* <button type="submit" onClick={add_fund} id="submitBtn"style={mystyle.submitBtn}> Add</button> */}
                      <Link to = '/PresentProjects'>
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={submit}>
                          ADD 
                      </button>
                      </Link>

                      <Link to = '/AddProjects'>
                      <button
                        className="bg-red-100 text-white active:bg-red-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"> 
                        CANCEL  
                      </button>
                      </Link>
                    </div>
                    </box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        </div>
        <FooterAdmin />
        </section>
        
        </div>
      </main>
                 
    </>
  );
}
