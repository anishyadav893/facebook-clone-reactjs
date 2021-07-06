import React from 'react';

import './SideBar.css';
import SideBarRow from './SideBarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import { ExpandMoreOutlined } from '@material-ui/icons';

function SideBar() {
	return (
		<div className = 'sidebar'>
			<SideBarRow src = 'https://miro.medium.com/fit/c/1360/1360/1*SriGhsmjfGzFv56eXNZT1w.jpeg' title = 'Anish Yadav' />
			<SideBarRow Icon = {LocalHospitalIcon} title = 'COVID-19 Information Center' />
			<SideBarRow Icon = {EmojiFlagsIcon} title = 'Pages' />
			<SideBarRow Icon = {ChatIcon} title = 'Friends' />
			<SideBarRow Icon = {StorefrontIcon} title = 'Marketplace' />
			<SideBarRow Icon = {VideoLibraryIcon} title = 'Videos' />
			<SideBarRow Icon = {ExpandMoreOutlined} title = 'Marketplace' />
		</div>
	)
}

export default SideBar;