import React from "react";
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@material-ui/core";

export const EditPeopleDialog = (props) => {
    const { updateIsLoading, handleCloseDialog, handleChange, updateViewOpen, handleUpdate, updateDetails} = props;
    return (
        <Dialog
            aria-labelledby="attendance"
            PaperProps={{
                style: {
                    backgroundColor: "#b2dedf",
                },
            }}
            onClose={handleCloseDialog}
            open={updateViewOpen}
            fullWidth={true}
            maxWidth={'sm'}>
            <DialogTitle id="attendance" onClose={handleCloseDialog}>
                Update People
            </DialogTitle>
            <DialogContent dividers>
                <div className="relative w-full mb-1 mt-1">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Reg ID
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="regId"
                           value={updateDetails.regId}
                           // onChange={handleChange}
                           required
                           placeholder="Reg ID"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        NIC
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="nic"
                           value={updateDetails.nic}
                           onChange={handleChange}
                           required
                           placeholder="NIC"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        First Name
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="firstName"
                           value={updateDetails.firstName}
                           onChange={handleChange}
                           required
                           placeholder="First Name"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Last Name
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="lastName"
                           value={updateDetails.lastName}
                           onChange={handleChange}
                           required
                           placeholder="Last Name"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Date of Birth
                    </label>
                    <input type="date"
                           name="dob"
                           value={updateDetails.dob}
                           onChange={handleChange}
                           required
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                        Address
                    </label>
                    <textarea
                        rows="2"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        name="address"
                        value={updateDetails.address}
                        onChange={handleChange}
                        required
                        placeholder="Address..."
                    />
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Phone Number
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="phone"
                           value={updateDetails.phone}
                           onChange={handleChange}
                           required
                           placeholder="Phone No"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Home Number
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="homeNo"
                           value={updateDetails.homeNo}
                           onChange={handleChange}
                           required
                           placeholder="Home No"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Status
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="status"
                           value={updateDetails.status}
                           onChange={handleChange}
                           required
                           placeholder="Status"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Income Status
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="incomeStatus"
                           value={updateDetails.incomeStatus}
                           onChange={handleChange}
                           required
                           placeholder="Income Status"/>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    style={{backgroundColor: "rgba(28, 97, 100, 450)", color: "white", fontWeight: "bold"}}
                    onClick={handleUpdate}
                    disabled={updateIsLoading}
                    startIcon={updateIsLoading ? <CircularProgress size={17.5} /> : null}
                    variant="contained">
                    UPDATE
                </Button>
                <Button
                    style={{backgroundColor: "rgba(255, 00, 00, 100)", color: "white", fontWeight: "bold"}}
                    onClick={handleCloseDialog}
                    disabled={updateIsLoading}
                    variant="contained"
                    color="primary">
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    );
}
