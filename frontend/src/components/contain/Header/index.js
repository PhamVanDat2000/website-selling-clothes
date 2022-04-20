import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStyles } from './styles.js';
import { Button } from '@mui/material';
import Cart from '../../Cart/index.js';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import loginApi from '../../../api/loginApi.js';

import { StickyNav } from 'react-js-stickynav'

export default function Header() {
    const style = () => {
        return (
            <style jsx>{`
			.nav {
                top:0;
			  position: fixed;
			  z-index: 10;
			  padding: 0px;
			  width: 100%;
			}
			.scrollNav {
                top:0;
			  transition: all 0.5s ease-in;
			  z-index: 10;
			  background: #ffffff;
			  width: 100%;
			  border-bottom: 1px solid #dddddd;
			}
		  `}</style>
        )
    }

    const isLogin = JSON.parse(localStorage.getItem('login'))
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null); // close dialog account
        handleMobileMenuClose();
    };
    const handleLogin = () => {
        handleMenuClose()
        history.push('/login')
    }
    const handleLogout = () => {
        const data = JSON.parse(localStorage.getItem('login'))
        console.log(data)
        const id = data.Info.id
        const auth_token = data.auth_token.auth_token
        const logout = async () => {
            try {
                const data = await loginApi.Logout({ 'account_id': id, 'auth_token': auth_token });
                console.log('Fetch categories successfully: ', data);
                if (data.Status == "Success") {
                    if (localStorage) {
                        localStorage.removeItem('login');
                    }
                    history.push('/home')
                }

            } catch (error) {
                console.log('Failed to fetch categories list: ', error);
            }
        }
        logout()
        handleMenuClose()
    }
    const handleProfile = () => {
        if (isLogin) {
            history.push('/Profile')
        } else {
            alert('You need to login first. Go to login !')
            history.push('/Login')
        }
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            {isLogin == undefined ?
                <MenuItem onClick={handleLogin}>Login</MenuItem> :
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    const [showCart, setShowCart] = useState(false)
    const history = useHistory()
    const handleHome = () => {
        history.push('/home')
    }
    const handleNews = () => {
        history.push('/home')
    }
    const handleAbout = () => {
        history.push('/about')
    }
    const handleSearch = () => {

    }

    return (

        <div className={classes.grow}>
            {style()}
            <StickyNav StickyNav StickyNav length='100' >
                <AppBar position="static" style={{ background: "#007261" }}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Button style={{ color: "#fff",fontSize:'20px'}} onClick={handleHome} >Clothes Store</Button>
                        </Typography>

                        <Button className={classes.button} style={{ color: "#fff" }} onClick={handleHome}>Home</Button>
                        <Button className={classes.button} style={{ color: "#fff" }} onClick={handleNews} >News</Button>
                        <Button className={classes.button} style={{ color: "#fff" }} onClick={handleAbout}>About</Button>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                onClick={handleSearch}
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}
                            onClick={() => { setShowCart(true) }}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <Typography className={classes.title} variant="h6" noWrap >Cart</Typography>
                                <ShoppingCartIcon
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    color="inherit"
                                />
                            </IconButton>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <Typography className={classes.title} variant="h6" noWrap>Account</Typography>
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
                <Cart showCart={showCart} setShowCart={setShowCart} />
            </StickyNav >
        </div>
    );
}
