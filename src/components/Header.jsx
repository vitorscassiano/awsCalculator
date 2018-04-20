import React, { Component } from "react";
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
// import Popover from 'material-ui/Popover'
import { Link } from 'react-router'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { hashHistory } from 'react-router'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }

    handleTouchTap = (event) => {
        event.preventDefault()
        this.setState({
            open: true
        })
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div className="header-wrapper">
                <AppBar
                    title={
                        <span style={{ cursor: 'pointer' }}>AWS Calculator</span>
                    }
                    // iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={ this.handleTouchTap }
                    // onTitleTouchTap={ () => hashHistory.push('/experiments') }
                />
                <Drawer
                    open={ this.state.open }
                    onRequestChange={ (open) => this.setState({ open }) }
                    docked={ false }
                >
                    <Menu onItemTouchTap={ this.handleClose }>
                        <MenuItem
                            primaryText="S3"
                            // leftIcon={<ListIcon />}
                            // containerElement={<Link to='/s3' />}
                        />
                        <MenuItem
                            primaryText="Lambda"
                            // leftIcon={<NewIcon />}
                            // containerElement={<Link to='/lambda' />}
                        />
                    </Menu>
                </Drawer>
            </div>
        )
    }
}