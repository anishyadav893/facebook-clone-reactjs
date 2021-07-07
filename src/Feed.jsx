import React from 'react';
import './Feed.css';

import Stories from './Stories';
import StatusBox from './StatusBox';
import Post from './Post'

function Feed() {
	return (
		<div className = 'feed'>
			<Stories />
			<StatusBox />
			<Post dp = 'https://media-exp1.licdn.com/dms/image/D5635AQFxIf59a_fMQA/profile-framedphoto-shrink_200_200/0/1625469170763?e=1625727600&v=beta&t=daFXcmLH_mIfo8p6VG1_0gDH3SxdTBE2M50LaQuGO5w'
			message = 'Wow! Whatta pic!'
			timestamp ='July 7, 2021'
			username = '_anishyadav_'
			image = 'https://iitb-wustl.org/images/banner-2.jpg' />
			<Post dp = 'https://wallpaperaccess.com/full/2213427.jpg'
			message = 'What is that dude!!!!'
			timestamp ='July 7, 2021'
			username = 'binarybrooder' />
			<Post />
			<Post />
		</div>
	)
}

export default Feed;