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
import { MdHeight } from 'react-icons/md';

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

function Edit() {
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
                            <TextField id="standard-basic" label="Full Name" variant="standard" />
                            <TextField id="standard-basic" label="Location" variant="standard" />
                            <FormControl variant="standard" sx={{ my: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={""}
                                    onChange={""}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Software Developer</MenuItem>
                                    <MenuItem value={20}>UI Developer</MenuItem>
                                    <MenuItem value={30}>QA Engineer</MenuItem>
                                    <MenuItem value={10}>Devops Engineer</MenuItem>
                                    <MenuItem value={10}>Generative AL Engineer</MenuItem>
                                    <MenuItem value={10}>Cybersecurity Analyst</MenuItem>
                                    <MenuItem value={10}>Penetration Tester</MenuItem>
                                    <MenuItem value={10}>Prompt Engineer</MenuItem>
                                    <MenuItem value={10}>Network Engineer</MenuItem>
                                    <MenuItem value={10}>Security Consultant</MenuItem>
                                    <MenuItem value={10}>Node.js Developer</MenuItem>
                                    <MenuItem value={10}>Express.js Developer</MenuItem>
                                    <MenuItem value={10}>API Developer</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                        {/* contact details */}
                        <h3>Contact Details</h3>
                        <div className="p-3 row">
                            <TextField id="standard-basic" label="Email" variant="standard" />
                            <TextField id="standard-basic" label="Contact Number:" variant="standard" />
                            <TextField id="standard-basic" label="LinkedIn Link" variant="standard" />
                            <TextField id="standard-basic" label="Github Profile" variant="standard" />
                        </div>
                        {/* Educational details` */}
                        <h3>Educational Details</h3>
                        <div className="p-3 row">
                            <TextField id="standard-basic" label="Bachelor's Degree" variant="standard" />
                            <TextField id="standard-basic" label="University/College Name" variant="standard" />
                            <TextField id="standard-basic" label="Year of Graduation" variant="standard" />

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
                        <TextField id='standard-basic-degree' label='Summury' multiline variant="standard" width={'100'}/>  
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