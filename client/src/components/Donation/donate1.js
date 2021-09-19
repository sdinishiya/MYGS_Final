import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, FormControl, MenuItem } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { Input } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

}));

export default function Donate1() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [donationAmt, setdonationAmt] = useState('');
  const [address1, setaddress1] = useState('');
  const [address2, setaddress2] = useState('');
  const [city, setcity] = useState('');
  const [country, setcountry] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const [email, setemail] = useState('');

  function submit(event){
    // event.preventDefault();
    axios.post(`http://localhost:3001/add_donation`, {
        "first_name":firstName,
        "last_name":lastName,
        "donation_amt":Number(donationAmt),
        "address1":address1,
        "address2":address2, 
        "city":city, 
        "country":country,
        "phoneno":phoneNo, 
        "email":email,  
      })
      .then(function (response) {
          // handle success
         // console.log(response.data.response);
          //alert(response.data.response);
          setfirstName("");
          setlastName("");
          setdonationAmt("");
          setaddress1("");
          setaddress2("");
          setcity("");
          setcountry("");
          setphoneNo("");
          setemail("");

      })
      .catch(function (error) {
          // handle error
          // alert("error!!!!");
          // alert(error.response.data.response);
      })
  }

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Make Donation
      </Typography> */}
    <form method="post" action="https://sandbox.payhere.lk/pay/checkout" 
    >
    <input type="hidden" name="merchant_id" value="1218494" />  
    <input type="hidden" name="return_url" value="http://localhost:3000" />
    <input type="hidden" name="cancel_url" value="http://localhost:3000" />
    <input type="hidden" name="notify_url" value="http://localhost:3000" /> 
      
    <input type="hidden" name="order_id" value="ItemNo12345" />
    <input type="hidden" name="items" value="Door bell wireless" />
    <input type="hidden" name="currency" value="LKR" />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          value={firstName}
          onChange={(event) => setfirstName(event.target.value)}
            required
            id="firstName"
            name="first_name"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={lastName}
          onChange={(event) => setlastName(event.target.value)}
            required
            id="lastName"
            name="last_name"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth className={classes.margin}>
            
          <InputLabel htmlFor="standard-adornment-amount">Donation Amount</InputLabel>
          <Input
          value={donationAmt}
          onChange={(event) => setdonationAmt(event.target.value)}
            required
            id="standard-adornment-amount"
            name="amount"
            startAdornment={<InputAdornment position="start">LKR</InputAdornment>}
          />
        </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
          value={address1}
          onChange={(event) => setaddress1(event.target.value)}
            required
            id="address1"
            name="address"
            label="Address line 1"
            fullWidth
            autoComplete="Donor address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          value={address2}
          onChange={(event) => setaddress2(event.target.value)}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="Donor address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={city}
          onChange={(event) => setcity(event.target.value)}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="Donor address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={country}
          onChange={(event) => setcountry(event.target.value)}
          required id="country" name="country" label="country" fullWidth  autoComplete="Donor country"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={phoneNo}
          onChange={(event) => setphoneNo(event.target.value)}
            required
            id="donor_phoneno"
            name="phone"
            label="Phone number"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={email}
          onChange={(event) => setemail(event.target.value)}
            required
            id="donor_email"
            name="email"
            label="Donor e-mail"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for donation details"
          />
        </Grid>
      </Grid>
      <br/>
       <button
          className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          onClick={submit}>
            {"Next"}
       </button>
    </form>
    
    </React.Fragment>
  );
}