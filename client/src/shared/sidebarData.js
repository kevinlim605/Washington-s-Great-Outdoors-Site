import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export const SidebarData = [
    {
        title: "Home",
        path: '/home',
        icon: <HomeIcon />,
    },
    {
        title: "About",
        path: '/about',
        icon: <InfoIcon />,
    },
    {
        title: "Directory",
        path: '/directory',
        icon: <ExploreIcon />,
    },
    {
        title: "Favorites",
        path: '/favorites',
        icon: <FavoriteIcon />,
    },
    {
        title: "Contact",
        path: '/contact',
        icon: <ContactMailIcon />,
    },
];