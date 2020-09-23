import React, { useEffect, useState } from 'react';
import axios from './axios'
import './App.css';
import Video from './Video';

function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			const response = await axios.get('/v2/posts');
			setVideos(response.data)
			
			return response
		}
		
		fetchPosts()
	}, [])
	
  return (
	<div className="app">
      <div className='app__videos'>
		{videos.map(({ 
			_id,
			url,
			channel,
			messages,
			description,
			song,
			likes,
			shares
		 }) => (
			<Video 
			key={_id}
			url={url}
			channel={channel}
			messages={messages}
			description={description}
			song={song}
			likes={likes}
			shares={shares}
		/>
		))}
      </div>
	</div>
);
}

export default App;
