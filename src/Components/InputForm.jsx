import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Preview and Submit'];

function InputForm() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = React.useCallback((step) => {
        return step === 1;
    }, []);

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
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
        if (isStepOptional(previousActiveStep) && !isStepOptional(activeStep)) {
            // If the user hits "Skip" and the next step is not optional, focus the "Next" button.
            nextButtonRef.current.focus();
        }
    }, [activeStep, isStepOptional]);

    const renderStepContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <>
                    <h3>Personal Details</h3>
                    <div className="p-3 row">
                        <TextField id="standard-basic" label="Full Name" variant="standard" />
                        <TextField id="standard-basic" label="Location" variant="standard" />


                    </div>
                </>
            )
            case 1: return (
                <>
                    <h3>Contact Details</h3>
                    <div className="p-3 row">
                        <TextField id="standard-basic" label="Email" variant="standard" />
                        <TextField id="standard-basic" label="Contact Number:" variant="standard" />
                        <TextField id="standard-basic" label="LinkedIn Link" variant="standard" />
                        <TextField id="standard-basic" label="Github Profile" variant="standard" />
                    </div>
                </>
            )
            case 2: return (
                <>
                    <h3>Educational Details</h3>
                    <div className="p-3 row">
                        <TextField id="standard-basic" label="Bachelor's Degree" variant="standard" />
                         <TextField id="standard-basic" label="University/College Name" variant="standard" />
                          <TextField id="standard-basic" label="Year of Graduation" variant="standard" />

                    </div>
                </>
            )
            case 3: return (
                <>
                    <div className='p-3'>
                        Our AI will generate Skills & Summary according to your job role.
                        Click the Generate AI Skill & Summary button to Proceed.
                    </div>
                </>
            )
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
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
                        <Button onClick={handleReset} ref={resetButtonRef}>
                            Reset
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
                       
                        <Button onClick={handleNext} ref={nextButtonRef}>
                            {activeStep === steps.length - 1 ? 
                            <Button>GENERATE AI SKILLS</Button>
                         : 'Next'}
                        </Button>

                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
export default InputForm