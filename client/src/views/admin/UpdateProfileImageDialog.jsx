import React, {useCallback, useMemo} from "react";
import {Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {useDropzone} from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

export const UpdateProfileImageDialog = (props) => {
    const { handleSetProfileImage, handleUpdate, handleCloseDialog, isDialogOpen} = props;

    const handleDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length !== 0) {
            handleSetProfileImage(acceptedFiles[0]);
        }
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles
    } = useDropzone({
        accept: "image/jpeg, image/png",
        onDrop: handleDrop,
        multiple: false
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <Dialog
            aria-labelledby="attendance"
            // PaperProps={{
            //     style: {
            //         backgroundColor: "#b2dedf",
            //     },
            // }}
            onClose={handleCloseDialog}
            open={isDialogOpen}
            fullWidth={true}
            maxWidth={'sm'}>
            <DialogTitle id="attendance" onClose={handleCloseDialog} style={{backgroundColor: "rgba(28, 97, 100, 450)", color: "white", fontWeight: "bold"}}>
                Update People
            </DialogTitle>
            <DialogContent dividers>
                <section className="container">
                    <div className="container">
                        <div {...getRootProps({style})}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </div>
                    <br/>
                    <aside>
                        <h4>Selected Image</h4>
                        <ul>{files}</ul>
                    </aside>
                </section>
            </DialogContent>
            <DialogActions>
                <Button
                    style={{backgroundColor: "rgba(28, 97, 100, 450)", color: "white", fontWeight: "bold"}}
                    onClick={handleUpdate}
                    // disabled={updateIsLoading}
                    // startIcon={updateIsLoading ? <CircularProgress size={17.5} /> : null}
                    variant="contained">
                    UPDATE
                </Button>
                <Button
                    style={{backgroundColor: "rgba(255, 00, 00, 100)", color: "white", fontWeight: "bold"}}
                    onClick={handleCloseDialog}
                    // disabled={updateIsLoading}
                    variant="contained"
                    color="primary">
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    );
}
