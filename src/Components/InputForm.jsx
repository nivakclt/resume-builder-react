import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRoles from '../assets/it_job_roles.json'
import jobSkills from '../assets/jobskills.json'
import summery from '../assets/professional_summary.json'
import { addResumeApi } from '../services/allApiServices';
import { useNavigate } from 'react-router-dom';


const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Review & Submit'];


function InputForm({setRes}) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [age, setAge] = React.useState('');
    const [resumeData, setResumeData] = useState({
        fullname: "",
        location: "",
        jobtitle: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        degree: "",
        college: "",
        year: "",
        skills: [],
        summery: ""
    })

    const nav=useNavigate()

    console.log(resumeData)

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const handleReset = () => {
        setActiveStep(0);
    };

    const previousActiveStepRef = React.useRef(activeStep);
    const resetButtonRef = React.useRef(null);
    const nextButtonRef = React.useRef(null);

    // Manage focus when the active step changes.
    React.useEffect(() => {
        const previousActiveStep = previousActiveStepRef.current;
        previousActiveStepRef.current = activeStep;

        if (activeStep === steps.length) {
            // If the user has completed all steps and hits "Finish", focus the "Reset" button.
            resetButtonRef.current.focus();
            return;
        }
        if (activeStep === 0 && previousActiveStep === steps.length) {
            // If the user has completed all steps and hits "Reset", focus the "Next" button.
            nextButtonRef.current.focus();
            return;
        }
        

    }, [activeStep]);

    React.useEffect(()=>{
        setRes(resumeData)
    },[resumeData])

    const generate=()=>{
        setResumeData({...resumeData,
            skills:jobSkills[resumeData.jobtitle],
            summery:summery[resumeData.jobtitle]
        })
        
        handleNext()
    }

    const handleSubmit=async()=>{
        const {fullname,location,jobtitle,email,phone,linkedin,github,degree,college,year,skills,summery}=resumeData
        if(fullname && location && jobtitle && email && phone && linkedin && github && degree && college &&
            year && summery && skills){
                //api call
                const response=await addResumeApi(resumeData)
                console.log(response)
                if(response.status===201){
                    alert("Resume Created!!")
                    nav(`/view/${response?.data?.id}`)
                }
                else{
                    alert("Resume Creation Failed!!")
                }
            }
        else{
            alert("Please Fill in the form Completely!!")
        }
    }

    const renderStepContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <>
                    <h3>Personal Details</h3>
                    <div className='p-3 row'>
                        <TextField id="standard-basic" value={resumeData.fullname} onChange={(e) => { setResumeData({ ...resumeData, fullname: e.target.value }) }} label="Full Name" variant="standard" />
                        <TextField id="standard-basic" value={resumeData.location} onChange={(e) => { setResumeData({ ...resumeData, location: e.target.value }) }} label="Location" variant="standard" />
                        <FormControl variant="standard" sx={{ my: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={resumeData.jobtitle}
                                onChange={(e) => { setResumeData({ ...resumeData, jobtitle: e.target.value }) }}
                            >
                                {
                                    jobRoles.jobRoles.map(item => (
                                        <MenuItem value={item}>{item}</MenuItem>
                                    ))
                                }

                            </Select>
                        </FormControl>
                    </div>
                </>
            )
            case 1: return (
                <>
                    <h3>Contact Details</h3>
                    <div className='p-3 row'>
                        <TextField id="standard-basic" value={resumeData.email} onChange={(e) => { setResumeData({ ...resumeData, email: e.target.value }) }} label="Email" variant="standard" />
                        <TextField id="standard-basic" value={resumeData.phone} onChange={(e) => { setResumeData({ ...resumeData, phone: e.target.value }) }} label="Contact Number" variant="standard" />
                        <TextField id="standard-basic" value={resumeData.linkedin} onChange={(e) => { setResumeData({ ...resumeData, linkedin: e.target.value }) }} label="LinkedIn Link" variant="standard" />
                        <TextField id="standard-basic" value={resumeData.github} onChange={(e) => { setResumeData({ ...resumeData, github: e.target.value }) }} label="Github Profile Link" variant="standard" />
                    </div>
                </>
            )
            case 2: return (
                <>
                    <h3>Educational Details</h3>
                    <div className='p-3 row'>
                        <TextField id="standard-basic" value={resumeData.degree} onChange={(e) => { setResumeData({ ...resumeData, degree: e.target.value }) }} label="Bachelor's Degree" variant="standard" />
                        <TextField id="standard-basic" value={resumeData.college} onChange={(e) => { setResumeData({ ...resumeData, college: e.target.value }) }} label="University/College Name" variant="standard" />
                        <TextField id="standard-basic" value={resumeData.year} onChange={(e) => { setResumeData({ ...resumeData, year: e.target.value }) }} label="Year of Graduation " variant="standard" />
                    </div>
                </>
            )
            case 3: return (
                <>
                    <div className='p-3'>
                        Our AI will generate Skills & Summary according to your job role. Click the Generate AI Skill & Summary button to Proceed.
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleSubmit} ref={resetButtonRef}>
                                FINISH
                            </Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        <Box>
                            {renderStepContent(activeStep)}
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {
                                activeStep === steps.length - 1 ?
                                    <Button ref={nextButtonRef} onClick={generate}>
                                        GENERATE WITH AI SKILLS & SUMMERY
                                    </Button>
                                    :
                                    <Button onClick={handleNext} ref={nextButtonRef}>
                                        Next
                                    </Button>
                            }

                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </>
    )
}

export default InputForm