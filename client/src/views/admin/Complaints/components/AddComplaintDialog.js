import React from "react";
import {Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

export const AddComplaintDialog = (props) => {
    const {
        handleChange,
        handleCloseComplaint,
        feedbackIsLoading,
        handleSaveComplaint,
        isComplaintDialogOpen
    } = props;
    return (
        <Dialog
            aria-labelledby="complaint"
            PaperProps={{
                style: {
                    backgroundColor: "#b2dedf",
                    boxShadow: 'none',
                },
            }}
            onClose={handleCloseComplaint}
            open={isComplaintDialogOpen}
            fullWidth={true}
            maxWidth={'sm'}>
            <DialogTitle id="complaint" onClose={handleCloseComplaint}>
                Add Complaint
            </DialogTitle>
            <DialogContent dividers>
                <div className="relative w-full mb-1 mt-1">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Topic
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           name="topic"
                           onChange={(event) => handleChange("complaint", event)}
                           required
                           placeholder="topic"/>
                </div>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                        Problem
                    </label>
                    <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        name="problem"
                        onChange={(event) => handleChange("complaint", event)}
                        required
                        placeholder="problem..."
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    style={{backgroundColor: "rgba(28, 97, 100, 450)", color: "white", fontWeight: "bold"}}
                    onClick={handleSaveComplaint}
                    disabled={feedbackIsLoading}
                    startIcon={feedbackIsLoading ? <CircularProgress size={17.5} /> : null}
                    variant="contained"
                    color="primary">
                    ADD
                </Button>
                <Button
                    style={{backgroundColor: "rgba(255, 00, 00, 100)", color: "white", fontWeight: "bold"}}
                    onClick={handleCloseComplaint}
                    disabled={feedbackIsLoading}
                    variant="contained"
                    color="primary">
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    );
}
