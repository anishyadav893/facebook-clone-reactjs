import React from 'react';

import './Post.css';

import { Avatar } from '@material-ui/core';
import { ExpandMoreOutlined } from '@material-ui/icons/';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({ dp, image, username, timestamp, message }) {
	return (
		<div className = 'post'>
			<div className = 'post__top'>
				<Avatar src = {dp} className = 'post__avatar' />
				<div className = 'post__topInfo'>
					<h3>{username}</h3>
					<p>{timestamp}</p>
				</div>
			</div>
			<div className = 'post__bottom'>
				<p>{message}</p>
			</div>
			<div className = 'post__image'>
				<img src = {image} alt = 'Upload' />
			</div>
			<div className = 'post__options'>
				<div className = 'post__option'>
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className = 'post__option'>
					<ChatBubbleIcon />
					<p>Comment</p>
				</div>
				<div className = 'post__option'>
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className = 'post__option'>
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	)
}

export default Post;