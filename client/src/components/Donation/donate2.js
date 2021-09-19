import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Donate1 from './donate1';
// import Donate3 from './donate3';
// import Donate4 from './donate4';

import FooterAdmin from "components/Footers/FooterAdmin.js";
import DonationNavbar from "components/Navbars/Users/DonationNavbar.js";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

// const steps = ['Donor Details', 'Payment details', 'Review your Donation!'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Donate1 />;
    // case 1:
    //   return <Donate3 />;
    // case 2:
    //   return <Donate4 />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Donate2() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
     <DonationNavbar/>
     <br/><br/><br/>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Make Donations
          </Typography>

          <React.Fragment>

              <React.Fragment>
                {getStepContent(activeStep)}
                <div className="text-center mt-6">
                </div>
              </React.Fragment>
            
          </React.Fragment>
        </Paper>
        
      </main>
    
      <FooterAdmin />
    </React.Fragment>
  );
}