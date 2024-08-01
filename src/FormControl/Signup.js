import React from 'react';
import { useState, MouseEvent } from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function Signup() {
    const [showPassword, setShowPassword] = React.useState(false);

    const [usernameInput, setUsernameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    //input errors
    const [usernameError, setusernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    //Validation for onBlur Username
    const handleUsername = () => {
        if (usernameInput.length < 5 || usernameInput.length > 20) {
            setusernameError(true);
            return ;
        }
        setusernameError(false);
        return true;
    }

    //Validation for onBlur Email
   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usernameInput);
        console.log(emailInput);
        console.log(passwordInput);
    }
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div>
            <p>
                <TextField
                    id="standard-basic"
                    label="Username"
                    value={usernameInput}
                    error={usernameError}
                    onChange={(event) => setUsernameInput(event.target.value)}
                    onBlur={handleUsername}
                    variant="standard"
                    fullWidth
                    size='small' />
            </p>

            <p>
                <TextField
                    id="standard-basic"
                    label="Email"
                    value={emailInput}
                    error={emailError}
                    onChange={(event) => setEmailInput(event.target.value)}
                    variant="standard"
                    fullWidth
                    size='small' />
            </p>

            <p>
                <FormControl sx={{ width: '100%' }} variant="standard">
                    <InputLabel error={passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        fullWidth
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        error={passwordError}
                        value={passwordInput}
                        onChange={(event) => setPasswordInput(event.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </p>

            <p>
                <Button onClick={handleSubmit} variant="contained" fullWidth startIcon={<LoginIcon />}>
                    Sign Up
                </Button>
            </p>



            password lorem 18
            username lorem 12
            email lorem 20@example.com
        </div>
    );
}