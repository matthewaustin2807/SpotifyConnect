"use client";
import { Avatar} from '@mui/material';
import * as React from 'react';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Header = ({height}) => {
    const [drawerState, setDrawerState] = React.useState({
        open: false
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerState({ ...drawerState, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
          className='w-80'
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
           <div className='flex justify-start'>
                <Avatar className="m-5 place-self-center">M</Avatar>
                <h2 className='place-self-center'>matthewaustin2807</h2>
           </div>
          </List>
          <Divider />
          <List>
            {['Playlist Import'].map((text, input) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ImportExportIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItemButton>
                </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <div id="headerContainer" className="flex justify-between bg-spotifygreen w-screen max-w-screen" >
            <div id="appTitleContainer" className="place-self-center ml-1">
                <div id="dashboardIcon" className='inline'>
                    <React.Fragment key={"openDrawer"}>
                        <Button onClick={toggleDrawer("openDrawer", true)}>
                            <MenuIcon className="text-slate-50"/>
                        </Button>
                        <Drawer
                            anchor={"openDrawer"}
                            open={drawerState["openDrawer"]}
                            onClose={toggleDrawer("openDrawer", false)}
                        >
                            {list("openDrawer")}
                        </Drawer>
                    </React.Fragment>
                </div>                 
                <Button className="text-slate-50">
                    <h4 className="text-xl inline font-black">Spotify</h4>
                    <h4 className="text-xl inline font-thin">Connect!</h4>
                </Button>
            </div>
            <div id="logOutContainer" className="place-self-center m-3">
                <Button className="text-slate-50">Log Out</Button>
            </div>
        </div>
    )
}

export default Header;