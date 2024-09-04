import * as React from 'react';

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';

import Box from '@mui/material/Box';

import MuiDrawer from '@mui/material/Drawer';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import List from '@mui/material/List';

import CssBaseline from '@mui/material/CssBaseline';

import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';

import ListItem from '@mui/material/ListItem';

import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';

import ListItemText from '@mui/material/ListItemText';

import { TableRows, ViewColumn } from '@mui/icons-material';

import PrimarySearchAppBar from './primary-search-app-bar';

import { routes } from './route';

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({

    width: drawerWidth,

    transition: theme.transitions.create('width', {

        easing: theme.transitions.easing.sharp,

        duration: theme.transitions.duration.enteringScreen,

    }),

    overflowX: 'hidden',

});

const closedMixin = (theme: Theme): CSSObject => ({

    transition: theme.transitions.create('width', {

        easing: theme.transitions.easing.sharp,

        duration: theme.transitions.duration.leavingScreen,

    }),

    overflowX: 'hidden',

    width: `calc(${theme.spacing(7)} + 1px)`,

    [theme.breakpoints.up('sm')]: {

        width: `calc(${theme.spacing(8)} + 1px)`,

    },

});

const DrawerHeader = styled('div')(({ theme }) => ({

    display: 'flex',

    alignItems: 'center',

    justifyContent: 'flex-end',

    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar

    ...theme.mixins.toolbar,

}));



interface AppBarProps extends MuiAppBarProps {

    open?: boolean;

}



const AppBar = styled(MuiAppBar, {

    shouldForwardProp: (prop) => prop !== 'open',

})<AppBarProps>(({ theme, open }) => ({

    zIndex: theme.zIndex.drawer + 1,

    transition: theme.transitions.create(['width', 'margin'], {

        easing: theme.transitions.easing.sharp,

        duration: theme.transitions.duration.leavingScreen,

    }),

    ...(open && {

        marginLeft: drawerWidth,

        width: `calc(100% - ${drawerWidth}px)`,

        transition: theme.transitions.create(['width', 'margin'], {

            easing: theme.transitions.easing.sharp,

            duration: theme.transitions.duration.enteringScreen,

        }),

    }),

}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(

    ({ theme, open }) => ({


        width: drawerWidth,

        flexShrink: 0,

        whiteSpace: 'nowrap',

        boxSizing: 'border-box',

        ...(open && {

            ...openedMixin(theme),

            '& .MuiDrawer-paper': openedMixin(theme),

        }),

        ...(!open && {

            ...closedMixin(theme),

            '& .MuiDrawer-paper': closedMixin(theme),

        }),

    }),

);

interface DrawerObjectProps {

    title: string

    children: React.ReactNode

}

export default function MiniDrawer({title, children}: DrawerObjectProps) {

    const theme = useTheme();

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {setOpen(true); };

    const handleDrawerClose = () => {setOpen(false); };
  
    const handleToggle = () => { setOpen(!open) }

    return (
    
    <Box sx={{ display: 'flex' }}>

        <CssBaseline />

        <PrimarySearchAppBar open={open} title={title} />

        <Drawer variant="permanent" open={open}>

            <DrawerHeader sx={{justifyContent:"flex-start"}}>
                
                <IconButton sx={{pl:1.5}} onClick={handleToggle}>

                    { open ? <TableRows /> : <ViewColumn /> }
            
                </IconButton>
                
                <Typography ml={2}>{title}</Typography>
            
            </DrawerHeader>
            
            <Divider />
            
            <List>
            
                {routes.map((route, index) => (
                    
                    <ListItem key={route.id} disablePadding sx={{ display: 'block' }}>
                        
                        <ListItemButton
            
                            component="a"
            
                            href={`/${route.name}`}
            
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
            
                        >
            
                            <ListItemIcon
            
                                sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}
                    
                            >
                        
                                <route.icon />
                    
                            </ListItemIcon>
                    
                            <ListItemText primary={route.name} sx={{ opacity: open ? 1 : 0 }} />
                
                            </ListItemButton>
                
                    </ListItem>
            
                ))}

            </List>
            
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 2.5 }}>
            
            <DrawerHeader />
            
            {children}
        
        </Box>
    
    </Box>
  
);

}
