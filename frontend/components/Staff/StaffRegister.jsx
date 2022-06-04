import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Avatar,
    Box,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {AddModerator, Man, Woman} from '@mui/icons-material'
import {LoadingButton} from "@mui/lab";
import PanelMember from "../../axios/PanelMemberAPI";
import api from "../../axios/PanelMemberAPI";
import ComputerIcon from '@mui/icons-material/Computer';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WorkIcon from '@mui/icons-material/Work';

const theme = createTheme();

export default function StaffRegister() {
    const navigate = useNavigate();
    const {register, handleSubmit, setError, formState: { isSubmitting, errors, isValid}} = useForm({
        mode: 'all'
    });
    const current = new Date();
    const NowDate = `${current.getFullYear()}-${current.getMonth()<10 ? 0:""}${current.getMonth()+1}-${current.getDate()}`;

    function handleApiErrors(errors) {
        if (errors) {
            errors.forEach((error) => {
                if (error.includes('MemberID')) {
                    setError('memberID', {message: error})
                } else if (error.includes('MemberName')) {
                    setError('memberName', {message: error})
                } else if (error.includes('MemberEmail')) {
                    setError('memberEmail', {message: error})
                }else if (error.includes('PanelID')) {
                    setError('panelID', {message: error})
                }
            });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <br/>
            <br/>
            <br/>
            <Container component={Paper} maxWidth="sm"
                       sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4}}>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <AddModerator/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Staff Member
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit((data) =>
                        api.Staff.addMember(data)
                            .then(() => {
                                toast.success('Successfully registered');
                                navigate('/login');
                            })
                            .catch(error => handleApiErrors(error))
                    )}
                    noValidate
                    sx={{mt: 1}}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Staff ID"
                                {...register('staff_id', {required: 'Staff ID is requird'})}
                                error={errors.staff_id}
                                helperText={errors?.staff_id?.message}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <FormControl fullWidth sx={{marginTop: 2}}>
                                <InputLabel>Faculty</InputLabel>
                                <Select
                                    label="faculty"
                                    margin="normal"
                                    {...register('faculty')}
                                    defaultValue={"FOC"}
                                    sx={{height: 55}}
                                >
                                    <MenuItem value={"FOC"}><><ComputerIcon/>&nbsp;&nbsp;Faculty Of Computing</></MenuItem>
                                    <MenuItem value={"FOE"}><><EngineeringIcon/>&nbsp;&nbsp;Faculty Of Engineering</></MenuItem>
                                    <MenuItem value={"FOB"}><><WorkIcon/>&nbsp;&nbsp;Faculty Of Business</></MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <TextField
                        margin="normal"
                        fullWidth
                        label="Full Name"
                        {...register('name', {required: 'Name is requird'})}
                        error={errors.name}
                        helperText={errors?.name?.message}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="NIC Number"
                                {...register('nic', {required: 'NIC Number is requird'})}
                                error={errors.nic}
                                helperText={errors?.nic?.message}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <TextField
                                type="date"
                                margin="normal"
                                fullWidth
                                InputProps={{ inputProps: { max: NowDate } }}
                                label="Date Of Birth"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register('dob', {required: 'Date Of Birth is requird'})}
                                error={errors.dob}
                                helperText={errors?.dob?.message}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <FormControl fullWidth sx={{marginTop: 2}}>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    label="Gender"
                                    margin="normal"
                                    {...register('gender')}
                                    defaultValue={"male"}
                                    sx={{height: 55}}
                                >
                                    <MenuItem value={"male"}><><Man/>&nbsp;&nbsp;Male</></MenuItem>
                                    <MenuItem value={"female"}><Woman/>&nbsp;&nbsp;Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Address"
                        {...register('address', {required: 'Address is requird'})}
                        error={errors.address}
                        helperText={errors?.address?.message}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                type="number"
                                margin="normal"
                                fullWidth
                                label="Phone Number"
                                {...register('phone_no', {required: 'Phone Number is requird'})}
                                error={errors.phone_no}
                                helperText={errors?.phone_no?.message}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <TextField
                                type="email"
                                margin="normal"
                                fullWidth
                                label="Email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Not a valid email address'
                                    }
                                })}
                                error={errors.email}
                                helperText={errors?.email?.message}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Profession"
                        {...register('profession', {required: 'Profession is requird'})}
                        error={!!errors.profession}
                        helperText={errors?.profession?.message}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                                message: 'password does not meet complexity requirements'
                            }
                        })}
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />
                    <LoadingButton
                        disabled={!isValid}
                        loading={isSubmitting}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Register
                    </LoadingButton>
                </Box>
            </Container>
            <br/>
            <br/>
            <br/>
        </ThemeProvider>
    );
}