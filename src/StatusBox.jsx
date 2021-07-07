import React, { useState } from 'react';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import './StatusBox.css'

import { Avatar } from '@material-ui/core';

function StatusBox() {
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		// some database stuff
		setInput('');
		setImageUrl('');
	};

	return (
		<div className = 'status'>
			<div className = 'status__top'>
				<Avatar />
				<form>
					<input value = {input} onChange = {(e) => setInput(e.target.value)} className = 'status__input' placeholder = {`What's on your mind?`} />
					<input value = {imageUrl} onChange = {(e) => setImageUrl(e.target.value)} placeholder = 'Image URL (Optional)' />
					<button type = 'submit' onClick = {handleSubmit}>
						Hidden Submit
					</button>
				</form>
			</div>
			<div className = 'status__bottom'>
				<div className = 'status__option'>
					<VideocamIcon style = {{ color: 'red' }} />
					<h3>Live Video</h3>
				</div>
				<div className = 'status__option'>
					<PhotoLibraryIcon style = {{ color: 'green' }} />
					<h3>Photo/Video</h3>
				</div>
				<div className = 'status__option'>
					<InsertEmoticonIcon style = {{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	)
}

export default StatusBox;