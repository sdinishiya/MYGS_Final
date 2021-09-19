import React from "react";
import {Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

export const AddFeedbackDialog = (props) => {
    const {
        handleSaveFeedback,
        handleChange,
        complaintIsLoading,
        handleCloseFeedback,
        isFeedbackDialogOpen
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
            onClose={handleCloseFeedback}
            open={isFeedbackDialogOpen}
            fullWidth={true}
            maxWidth={'sm'}>
            <DialogTitle id="complaint" onClose={handleCloseFeedback}>
                Give Feedback
            </DialogTitle>
            <DialogContent dividers>
                <div className="relative w-full mb-1 mt-2">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                        Feedback
                    </label>
                    <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        name="feedback"
                        onChange={(event) => handleChange("feedback", event)}
                        required
                        placeholder="feedback..."
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    style={{backgroundColor: "rgba(28, 97, 100, 450)", color: "white", fontWeight: "bold"}}
                    onClick={handleSaveFeedback}
                    disabled={complaintIsLoading}
                    startIcon={complaintIsLoading ? <CircularProgress size={17.5} /> : null}
                    variant="contained"
                    color="primary">
                    ADD
                </Button>
                <Button
                    style={{backgroundColor: "rgba(255, 00, 00, 100)", color: "white", fontWeight: "bold"}}
                    onClick={handleCloseFeedback}
                    disabled={complaintIsLoading}
                    variant="contained"
                    color="primary">
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    );
}
