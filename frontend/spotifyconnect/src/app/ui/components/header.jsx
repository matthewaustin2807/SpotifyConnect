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
import Link from 'next/link';

const Header = ({userId}) => {
    const stringToColor = (string) => {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    const stringAvatar = (name) => {
        return {
            sx: {
              bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}`,
        };
    }

    const [drawerState, setDrawerState] = React.useState({
        left: false
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
                <Avatar className="m-5 place-self-center" {...stringAvatar(userId)}/>
                <h2 className='place-self-center'>{userId}</h2>
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
        <div id="headerContainer" className="sticky flex justify-between bg-spotifygreen w-screen max-w-screen" >
            <div id="appTitleContainer" className="place-self-center ml-1">
                <div id="dashboardIcon" className='inline'>
                    <React.Fragment key={"left"}>
                        <Button onClick={toggleDrawer("left", true)}>
                            <MenuIcon className="text-slate-50"/>
                        </Button>
                        <Drawer
                            anchor={"left"}
                            open={drawerState["left"]}
                            onClose={toggleDrawer("left", false)}
                        >
                            {list("left")}
                        </Drawer>
                    </React.Fragment>
                </div>                 
                <Button>
                    <h4 className="text-slate-50 text-xl inline font-black">Spotify</h4>
                    <h4 className="text-slate-50 text-xl inline font-thin">Connect!</h4>
                </Button>
            </div>
            <div id="logOutContainer" className="place-self-center m-3">
                <Button>
                    <Link className="text-slate-50" href={`/ui/pages/landingPage`}>
                        Log Out
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Header;