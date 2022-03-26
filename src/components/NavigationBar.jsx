import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import logo from '../assets/logo.png'
import { NavMenuItems } from './consts/navbaritems';
import { useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export default function NavigationBar() {

    const navigate = useNavigate();


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "rgb(63,63,63,1)" }}>
                    <Toolbar>
                        <img width={40} height={40} src={logo} >
                        </img>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: "Roboto", marginLeft: 1 }}
                        >
                            Megalife
                        </Typography>

                        {/* MENU ITEMS */}
                        <Box sx={{ display: "flex", flexDirection: "row" }}>

                            {NavMenuItems.map((navItems) => (

                                <Box>
                                    <Typography key={navItems.id} sx={{
                                        marginX: 3, '&:hover': {
                                            color: "rgb(171, 219, 227)",
                                            cursor: "pointer"

                                        }
                                    }}

                                        onClick={() => navigate(navItems.route)}
                                    >
                                        {navItems.label}
                                    </Typography>
                                </Box>

                            ))}
                        </Box>



                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
