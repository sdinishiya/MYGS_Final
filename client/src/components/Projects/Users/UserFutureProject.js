import React from "react";
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PresentProject1 from 'assets/img/PresentProject1.jpg' ; 
import UserProjectReviewCard from 'components/Projects/Cards/UserPresentProjects_admin';

// components
import FutureProjectNavbar from "components/Navbars/Users/Projects/FutureProjectNavbar.js";
import ProjectUserHeader from "components/Projects/Users/UserHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";



const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
          margin: theme.spacing(30),
          width: theme.spacing(30),
          height: theme.spacing(50),
      },
  },
  
}));

export default function UserFutureProject() {
  const classes = useStyles();
  const [viewList,setviewList]=useState([])
  const [future, setfuture] = useState([]);
  const [edit,setedit]=useState(true);

  useEffect(() => {
    getfuture();    
    console.log(edit);  
    },[edit]);

  
function getfuture(){

  axios.get(`http://localhost:3001/get_future_projects`)
    .then(function (response) {
        // handle success
        console.log(response.data);
        setfuture(response.data);

    })
    .catch(function (error) {
        // handle error
        // alert("error!!!!");
        console.log(error);
      //   alert(error.response.data.response);
    })
    .then(function () {
        // always executed

    });

}

  return (    
    <>
    
  <main>
    {/* <div className="relative md:ml-64 bg-blueGray-100"> */}
      <FutureProjectNavbar />
      {/* Header */}
      <ProjectUserHeader />
      <section className="pb-18 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br /> <br /> <br /> <br /> 
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                      <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                          <h3 className="uppercase text-center font-bold text-base text-blueGray-700 ">
                            Future Projects
                            <br/> <br/>
                          </h3>
                          <p><h3>Udapalatha Gramasewaka Niladhari office has taken its steps to ensure the welfare of the locality in terms of person wellbeing as well as small scale local business support.
                            Take a look at the future projects that are to be undertaken by the Udapalatha Pradeshiya Wasama.</h3></p> 
                            <br/>
                             <Grid container spacing={5} className="m-5">
                              {future.map(project=> <Grid item xs={12} lg={4}>
                                <UserProjectReviewCard edit={edit} setedit={setedit} title={project.title} id={project.project_id} subheader={project.date} image={PresentProject1} description={project.intro}
                                      readMore={project.read_more}  hovertitle={project.title}/>
                                  </Grid>
                               )}
                             </Grid>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <FooterAdmin />
      </section> 
      {/* </div>  */}
    </main> 
  </>
  );
}

