import React from 'react';

import './Stories.css';
import Story from './Story'

function Stories() {
	return (
		<div className = 'stories'>
			<Story image = 'https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-limages-2.jpg'
			       dp = 'https://cdn.pastemagazine.com/www/blogs/lists/2020/10/29/johnny-bravo-sq.png'
			       name = 'Johny Bravo' />
			<Story image = 'https://images5.alphacoders.com/381/381244.jpg'
				   dp = 'https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg'
				   name = 'Mickey Mouse' />
			<Story image = 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/25/3/shutterstock_440493100_5-second-Studio_carrots.jpg.rend.hgtvcom.616.411.suffix/1524688181811.jpeg'
				   dp = 'https://www.loudegg.com/wp-content/uploads/2020/10/Bugs-Bunny.jpg'
				   name = 'Bugs Bunny' />
			<Story image = 'https://wallpapercave.com/wp/wp4105890.jpg'
				   dp = 'https://www.loudegg.com/wp-content/uploads/2020/10/Eric-Cartman.jpg'
				   name = 'Eric Cartman' />
			<Story image = 'https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/0/d6/0d6fce8e-ddb0-11eb-8f07-0f3d0a859094/60e33dfaab529.preview.jpg?crop=700%2C394%2C0%2C18&resize=540%2C304&order=crop%2Cresize'
				   dp = 'https://www.loudegg.com/wp-content/uploads/2020/10/Homer-Simpson.jpg'
				   name = 'Homer Simpson' />
			<Story image = 'https://assetsds.cdnedge.bluemix.net/sites/default/files/beta2/uploads/2013/07/stone-age.jpg'
				   dp = 'https://www.loudegg.com/wp-content/uploads/2020/10/Fred-Flintstone.jpg'
				   name = 'Fred Flintstone' />
			<Story image = 'https://wallpapercave.com/wp/wp2459897.jpg'
				   dp = 'https://www.loudegg.com/wp-content/uploads/2020/10/SpongeBob-SqaurePants.jpg'
				   name = 'SpongeBob SquarePants' />
			<Story image = 'https://wallpapercave.com/wp/wp2634189.jpg'
				   dp = 'https://www.nairaland.com/attachments/1539558_popey_jpeg306e258e8e12d26c158cadebf045c02a'
				   name = 'Popeye' />
			<Story image = 'https://images.hdqwalls.com/wallpapers/swimming-pool-water-dt.jpg'
				   dp = 'https://www.loudegg.com/wp-content/uploads/2020/10/Daffy-Duck.jpg'
				   name = 'Daffy Duck' />
		</div>
	)
}

export default Stories;