import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LoaderWrapper, LoginLogo, LoginPageImg } from './styles';
import { CircularProgress, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import img from '../../imgs/login_namuna.png'
import login from '../../imgs/login.svg'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getToken } from './requests';
import { token_url } from '../../utils/API_urls';
import { setUser } from '../../redux/action/userActions';

const LoadingPage = () => {
    return (
        <LoaderWrapper>
            <CircularProgress color="success" />
        </LoaderWrapper>
    )
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignInSide() {

    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [pageLoading, setPageLoading] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const [haveatoken, setHaveatoken] = useState(false)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    const successfulFunctionGetToken = (response) => {
        // console.log(response.data, "<--<--<--");
        dispatch(setUser(response.data))
        sessionStorage.setItem('access_token', response.data.token)
        if (response.data.token) {
            navigate(`/`)
        }
        setPageLoading(false)
        setHaveatoken(true)
    }

    const errorFunctionGetToken = (error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
        navigate(`/login`)
        setPageLoading(false)
        setOpenAlert(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        getToken(token_url, {
            username: data.get('username'),
            password: data.get('password'),
        }, successfulFunctionGetToken, errorFunctionGetToken)
        setPageLoading(true)
    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            {pageLoading ? <LoadingPage /> : <></>}
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {haveatoken ? <p>Foydalanuvchi topilmadi</p> : <p>Login yoki password noto'g'ri kiritildi</p>}
                </Alert>
            </Snackbar>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    // backgroundImage: `url(${login_pahe_img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: "relative",
                    '@media screen and (max-width: 456px)': {
                        display: 'none'
                    },
                }}
            >
                <LoginPageImg>
                    <img src={img} alt="logo" />
                </LoginPageImg>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        //   my: 8,
                        //   mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: "100vh",
                        padding: "20px",
                        zIndex: 1
                    }}
                    style={{ zIndex: 1 }}
                >
                    <LoginLogo>
                        <img width={"80px"} src={login} alt="main logo" />
                    </LoginLogo>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            // label="User name"
                            placeholder='login'
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            name="password"
                            placeholder='password'
                            margin="normal"
                            required
                            fullWidth
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Tizimga Kirish
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}