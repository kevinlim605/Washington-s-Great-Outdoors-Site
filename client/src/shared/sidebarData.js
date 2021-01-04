import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export const SidebarData = [
    {
        title: "Home",
        path: '/home',
        icon: <HomeIcon />,
        iconClosed: <ExpandMoreIcon />,
        iconOpened: <ExpandLessIcon />,
    },
    {
        title: "About",
        path: '/about',
        icon: <InfoIcon />,
        iconClosed: <ExpandMoreIcon />,
        iconOpened: <ExpandLessIcon />,
    },
    {
        title: "Directory",
        path: '/directory',
        icon: <ExploreIcon />,
        iconClosed: <ExpandMoreIcon />,
        iconOpened: <ExpandLessIcon />,
        subNav: [
            {
                title: "Hiking",
                path: '/directory/hiking',
                icon: <KeyboardArrowRightIcon />, 
            },
            {
                title: "Biking",
                path: '/directory/biking',
                icon: <KeyboardArrowRightIcon />, 
            },
            {
                title: "Kayaking",
                path: '/directory/kayaking',
                icon: <KeyboardArrowRightIcon />, 
            },
            {
                title: "Fishing",
                path: '/directory/fishing',
                icon: <KeyboardArrowRightIcon />, 
            },
            {
                title: "Camping",
                path: '/directory/camping',
                icon: <KeyboardArrowRightIcon />, 
            },
            {
                title: "Climbing",
                path: '/directory/climbing',
                icon: <KeyboardArrowRightIcon />, 
            },
        ],
    },
    {
        title: "Favorites",
        path: '/favorites',
        icon: <FavoriteIcon />,
        iconClosed: <ExpandMoreIcon />,
        iconOpened: <ExpandLessIcon />,
    },
    {
        title: "Contact",
        path: '/contact',
        icon: <ContactMailIcon />,
        iconClosed: <ExpandMoreIcon />,
        iconOpened: <ExpandLessIcon />,
    },
];