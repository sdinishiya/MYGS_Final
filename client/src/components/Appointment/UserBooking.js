import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

// components
import Navbarloglanding from "components/Navbars/Navbarlanding.js";
import UserHeader from "components/Headers/UserHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function UserBooking() {
    const { availID } = useParams();
  console.log(availID);
    const [gettopic,setgettopic] = useState ([])
    // const [topicID,settopicID] = useState("");

    const [nic, setNic] = useState("");
    const [name, setName] = useState("");
    const [home_no, setHome_no] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [topic, settopic] = useState("");
    const [book_status, setNewbook_status] = useState("Pending");
    

    const AddBook = ()=>{
      console.log(availID);

       axios.post('http://localhost:3001/add-booking',{
        nic: nic,
        name: name,
        home_no: home_no,
        address: address,
        phone: phone,
        email: email,
        topic: topic,
        book_status:book_status,
        availID: availID,

        }).then(()=>{
           console.log("success");
           alert(" Appointment Booked Successfully ");
          //  history.push("/ViewScheduled");
         });
    };

//dropdown
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/booktopics', {
            
        });
        setgettopic(response.data);
        console.log(response.data);
    };
    
    fetchData();
}, []);

const mystyle = {
    
  formControl: {
    minWidth: '454px',
  },
};

  return (
    <>
    
  <main>
    <Navbarloglanding />
      {/* Header */}
      <UserHeader />
      <section className="pb-18 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br />  
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h1 className="text-2xl font-semibold text-center justify-center">
                        MAKE APPOINTMENT BOOKINGS 
                    </h1>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        NIC
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" 
                        onChange={(event) => {
                          setNic(event.target.value);
                        }}
                        required
                        placeholder="NIC*"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Villager Name
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="name" 
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        required
                        placeholder="Name*"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Home No./ Home Name
                      </label>
                      <input type="text"
                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         name="home_no"
                         onChange={(event) => {
                           setHome_no(event.target.value);
                         }}
                         required
                         placeholder="House No. / House Name*"
                        />
                    </div>
                    
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Address
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="address"
                        onChange={(event) => {
                          setAddress(event.target.value);
                        }}
                        required
                        placeholder="Address"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Contact 
                      </label>
                      <input type="int"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="phone"
                        onChange={(event) => {
                          setPhone(event.target.value);
                        }}
                        required
                        placeholder="Contact No.*"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        E-mail 
                      </label>
                      <input type="text"
                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         name="email"
                         onChange={(event) => {
                          setEmail(event.target.value);
                         }}
                         required
                         placeholder="E-mail Address"
                        />
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                    <labe className="block uppercase text-blueGray-600 text-xs font-bold mb-2"> Topic </labe> 
                    <FormControl className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                           <Select
                               native
                               onChange={(event) => {settopic(event.target.value); }}
                               style={mystyle.search} >
                                    
                               <option aria-label="None" value="" />
                               {gettopic.map((record) => (
                                   <option Value={record.ID}>{record.topic}</option>
                               ))}

                           </Select>
                       </FormControl><br /> 
                    </div>

                    <box>
                    <div className="text-center mt-6">
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={AddBook}
                      > Book 
                      </button>
                      <button
                        className="bg-red-100 text-white active:bg-red-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      > 
                        Cancel  
                      </button>
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
        

      </main>
      
    </>
  );
}
