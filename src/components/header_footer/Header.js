import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    /* vanilla js*/
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    /*for making header transparent when scrolling*/
    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }

    }




    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: "10px, 0px"
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">der Platz</div>
                        <div className="header_logo_icon">MUSICAL EVENTS</div>

                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}

                    >
                        <MenuIcon />
                    </IconButton>
                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>


        );
    }
}
export default Header;