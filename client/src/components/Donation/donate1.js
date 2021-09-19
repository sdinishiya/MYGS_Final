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
  const [date, setdate] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [donationAmt, setdonationAmt] = useState('');
  const [description, setdescription] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [country, setcountry] = useState('');
  const [phoneno, setphoneno] = useState('');
  const [email, setemail] = useState('');

  function submit(event){
    // event.preventDefault();
    axios.post(`http://localhost:3001/add_donation`, {
        "date":date,
        "first_name":firstName,
        "last_name":lastName,
        "donation_amt":Number(donationAmt),
        "description":description,
        "address":address, 
        "city":city,  
        "country":country,
        "phoneno":phoneno, 
        "email":email,  
      })
      .then(function (response) {
          // handle success
         // console.log(response.data.response);
          //alert(response.data.response);
          setdate("");
          setfirstName("");
          setlastName("");
          setdonationAmt("");
          setdescription("");
          setaddress("");
          setdescription("");
          setcity("");
          setphoneno("");
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
          value={description}
          onChange={(event) => setdescription(event.target.value)}
            required
            id="description"
            name="description"
            label="Description"
            fullWidth
            autoComplete="Description"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          value={address}
          onChange={(event) => setaddress(event.target.value)}
            id="address"
            name="address"
            label="Address line "
            fullWidth
            autoComplete="Donor address-line"
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
          value={phoneno}
          onChange={(event) => setphoneno(event.target.value)}
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