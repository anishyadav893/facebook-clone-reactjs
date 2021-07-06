import React from 'react';

import './Story.css';

import { Avatar } from '@material-ui/core';

function Story({image, dp, name}) {
	return (
		<div style={{ backgroundImage: `url(${image})` }} className = 'story'>
			<Avatar className = 'story__avatar' src = {dp} />
			<h4>{name}</h4>
		</div>
	)
}

export default Story