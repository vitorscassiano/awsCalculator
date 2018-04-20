import React from 'react'
import Route from './routes'
import FlatButton from 'material-ui/FlatButton'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../src/components/Header';

export default props => (
    <div className='container'>
        <MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
            <Header />
            {/* <AppBar title="AWS Calculator" /> */}
        </MuiThemeProvider>
        {/* <Route /> */}
    </div>
)