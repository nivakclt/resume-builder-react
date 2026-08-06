import React from 'react';
import { useState, useRef } from 'react';
import { FaEdit } from 'react-icons/fa';
import { updateResumeApi } from "../services/allApiServices";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import jobRoles from '../assets/it_job_roles.json';

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


function Edit({ resume, setResumeData }) {
    const [updateForm, setUpdateForm] = React.useState({
        fullname: "",
        location: "",
        jobTitle: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        degree: "",
        college: "",
        graduationYear: "",
        skills: [],
        summary: ""
    }); const [open, setOpen] = React.useState(false);

    const inputRef = useRef(null);

    const addSkills = () => {
        console.log(resume);
        console.log(resume.skills);
        const skill = inputRef.current.value
        console.log(skill);
        if (skill) {
            if (resume?.skills?.map(item => item.toLowerCase()).includes(skill.toLowerCase())) {
                alert("Skill already exists");

            }
            else {

                setResumeData({ ...resume, skills: [...resume.skills, skill] });
            }
        }
        else {
            alert("Please enter a skill");
        }
    }

    const handleUpdate = async () => {
    const response = await updateResumeApi(resume.id, updateForm);

    if (response.status === 200) {
        setResumeData(response.data);
        alert("Resume Updated");
        handleClose();
    }
}

    const removeSkills = (skill) => {
        setResumeData({ ...resume, skills: resume.skills.filter((s) => s !== skill) });
    }

    React.useEffect(() => {
        setUpdateForm({
            fullname: resume?.fullname || "",
            location: resume?.location || "",
            jobTitle: resume?.jobTitle || "",
            email: resume?.email || "",
            phone: resume?.phone || "",
            linkedin: resume?.linkedin || "",
            github: resume?.github || "",
            degree: resume?.degree || "",
            college: resume?.college || "",
            graduationYear: resume?.graduationYear || "",
            skills: resume?.skills || [],
            summary: resume?.summary || ""
        });
    }, [resume]);


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
                            <TextField id="standard-basic" onChange={(e) => setUpdateForm({ ...updateForm, fullname: e.target.value })} value={updateForm.fullname} label="Full Name" variant="standard" />
                            <TextField id="standard-basic" onChange={(e) => setUpdateForm({ ...updateForm, location: e.target.value })} value={updateForm.location} label="Location" variant="standard" />
                            <FormControl variant="standard" sx={{ my: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                <Select
                                    value={updateForm.jobTitle || ""}
                                    onChange={(e) => setUpdateForm({ ...updateForm, jobTitle: e.target.value })}
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
                            <TextField id='standard-basic' value={updateForm.email} onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })} label="Email" variant='standard' />
                            <TextField id='standard-basic' value={updateForm.phone} onChange={(e) => setUpdateForm({ ...updateForm, phone: e.target.value })} label='Contact Number' variant='standard' />
                            <TextField id='standard-basic' value={updateForm.linkedin} onChange={(e) => setUpdateForm({ ...updateForm, linkedin: e.target.value })} label='LinkedIn' variant='standard' />
                            <TextField id='standard-basic' value={updateForm.github} onChange={(e) => setUpdateForm({ ...updateForm, github: e.target.value })} label='GitHub' variant='standard' />
                        </div>
                        {/* Educational details` */}
                        <h3>Educational Details</h3>
                        <div className="p-3 row">
                            <TextField id='standard-basic' value={updateForm.degree} onChange={(e) => setUpdateForm({ ...updateForm, degree: e.target.value })} label="Bachelor's Degree" variant='standard' />
                            <TextField id='standard-basic' value={updateForm.college} onChange={(e) => setUpdateForm({ ...updateForm, college: e.target.value })} label="University/College Name" variant='standard' />
                            <TextField id='standard-basic' value={updateForm.graduationYear} onChange={(e) => setUpdateForm({ ...updateForm, graduationYear: e.target.value })} label="Year of Graduation" variant='standard' />
                        </div>
                        {/* Technical skills */}
                        <div className='py-3'>
                            <h4>Technical Skills</h4>
                            <div className="d-flex gap-2">
                                <h4>Add Skills</h4>
                                <input type="text" ref={inputRef} placeholder='Enter Skills' className='form-control' />
                                <button className='btn btn-warning' onClick={addSkills}>+</button>
                            </div></div>
                        <div className="d-fex flex-wrap gap-2">
                            {
                                resume?.skills?.map(item => (
                                    <span className="px-2 py-1 border">{item} <span className="text-danger fw-bolder" style={{ cursor: 'pointer' }} onClick={() => { removeSkills(item) }}>X</span></span>
                                ))
                            }
                        </div>

                        {/* Summary */}
                        <div className='row p-3'>
                            <TextField
                                id="standard-basic-degree"
                                value={updateForm.summary}
                                onChange={(e) => setUpdateForm({ ...updateForm, summary: e.target.value })}
                                label="summery"
                                multiline
                                width={'100%'}
                                variant="standard"
                            />                        </div>
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