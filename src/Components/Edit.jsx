import React from 'react'
import { FaEdit } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import jobRoles from "../assets/job_roles.json";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'auto',
    maxHeight: "90vh",
    width: '50vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({resume}) {
    const [jobTitle, setJobTitle] = React.useState("");
    
    console.log("From resume",resume)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button className='btn text-warning' onClick={handleOpen}><FaEdit style={{ fontSize: "35px" }} /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='text-center'>  Edit Resume Details</div>
                    </Typography>
                    <div>
                        {/* personal details */}
                        <h3>Personal Details</h3>
                        <div className="p-3 row">
                            <TextField id="standard-basic" onChange={} value={resume?.fullname} label="Full Name" variant="standard" />
                            <TextField id="standard-basic" value={resume?.location} label="Location" variant="standard" />
                            <FormControl variant="standard" sx={{ my: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"

                                        value={jobTitle}
                                        onChange={(e)=>setJobTitle(e.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        jobRoles.jobRoles.map((item)=>(
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>

                        </div>

                        {/* contact details */}
                        <h3>Contact Details</h3>
                        <div className="p-3 row">
                            <TextField id="standard-basic" label="Email" value={resume?.email} variant="standard" />
                            <TextField id="standard-basic" label="Contact Number:" value={resume?.phone} variant="standard" />
                            <TextField id="standard-basic" label="LinkedIn Link" value={resume?.linkedin} variant="standard" />
                            <TextField id="standard-basic" label="Github Profile" value={resume?.github}variant="standard" />
                        </div>
                        {/* Educational details` */}
                        <h3>Educational Details</h3>
                        <div className="p-3 row">
                            <TextField id="standard-basic" label="Bachelor's Degree"  value={resume?.degree}variant="standard" />
                            <TextField id="standard-basic" label="University/College Name" value={resume?.college} variant="standard" />
                            <TextField id="standard-basic" label="Year of Graduation" value={resume?.graduationYear} variant="standard" />

                        </div>
                        {/* Technical skills */}
                        <h4 className='py-3'>Technical Skills</h4>
                        <div>
                            <button className='btn btn-primary m-2'>HTML</button>
                            <button className='btn btn-primary m-2'>CSS</button>
                            <button className='btn btn-primary m-2'>JS</button>
                        </div>
                        {/* Summary */}
                        <div className='row p-3'>
                        <TextField id='standard-basic-degree' label='Summary' multiline variant="standard" sx={{ width: "100%" }}/>  
                        </div>
                        </div>
                        {/* button */}
                    <div className='d-grid mb-3'>
                        <button className='btn btn-dark'style={{ backgroundColor: ' rgba(4, 28, 73, 0.93)'}}>Update</button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Edit