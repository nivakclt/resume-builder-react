import React,{useState} from 'react'
import { FaEdit } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stepper from '@mui/material';
import Step from '@mui/material';
import StepLabel from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import jobRoles from '../assets/it_job_roles.json'

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


function Edit({ resume = {} }) {

    const handleUpdate = () => {
        console.log("Update clicked");
        console.log("Update Form");
    }

    const [open, setOpen] = React.useState(false);
    const [updateForm, setUpdateForm] = React.useState({
        fullname: resume.fullname,
        location: resume.location,
        jobTitle: resume.jobTitle,
        email: resume.email,
        phone: resume.phone,
        linkedin: resume.linkedin,
        github: resume.github,
        degree: resume.degree,
        college: resume.college,
        graduationYear: resume.graduationYear,
        skills: resume.skills,
        summary: resume.summary
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div>
                <button className='btn text-warning' onClick={handleOpen}><FaEdit style={{ fontSize: "35px" }} /></button>
            </div>
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
                            <TextField id="standard-basic" onChange={(e) => setUpdateForm({ ...updateForm, fullname: e.target.value })} defaultValue={resume?.fullname} label="Full Name" variant="standard" />
                            <TextField id="standard-basic" onChange={(e) => setUpdateForm({ ...updateForm, location: e.target.value })} defaultValue={resume?.location} label="Location" variant="standard" />
                            <FormControl variant="standard" sx={{ my: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={resume.jobTitle}
                                    onChange={(e) => { }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {
                                        jobRoles.jobRoles.map((item) => (
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
                            <TextField id='standard-basic' defaultValue={resume?.email} onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })} label="Email" variant='standard' />
                            <TextField id='standard-basic' defaultValue={resume?.phone} onChange={(e) => setUpdateForm({ ...updateForm, phone: e.target.value })} label='Contact Number' variant='standard' />
                            <TextField id='standard-basic' defaultValue={resume?.linkedin} onChange={(e) => setUpdateForm({ ...updateForm, linkedin: e.target.value })} label='LinkedIn' variant='standard' />
                            <TextField id='standard-basic' defaultValue={resume?.github} onChange={(e) => setUpdateForm({ ...updateForm, github: e.target.value })} label='GitHub' variant='standard' />
                        </div>
                        {/* Educational details` */}
                        <h3>Educational Details</h3>
                        <div className="p-3 row">
                            <TextField id='standard-basic' defaultValue={resume?.degree} onChange={(e) => setUpdateForm({ ...updateForm, degree: e.target.value })} label="Bachelor's Degree" variant='standard' />
                            <TextField id='standard-basic' defaultValue={resume?.college} onChange={(e) => setUpdateForm({ ...updateForm, college: e.target.value })} label="University/College Name" variant='standard' />
                            <TextField id='standard-basic' defaultValue={resume?.graduationYear} onChange={(e) => setUpdateForm({ ...updateForm, graduationYear: e.target.value })} label="Year of Graduation" variant='standard' />
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
                            <TextField id="standard-basic-degree" defaultValue={resume?.summary} onChange={(e) => setUpdateForm({ ...updateForm, summary: e.target.value })} label="summery" multiline width={'100%'} variant='standard' />
                        </div>
                    </div>
                    {/* button */}
                    <div className='d-grid mb-3'>
                        <button className='btn btn-primary' onClick={handleUpdate}>UPDATE</button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Edit