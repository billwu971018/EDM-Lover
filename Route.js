import React from 'react';
import {Platform} from 'react-native';
import {
	Router,
	Stack,
	Scene
} from 'react-native-router-flux';

import Playlist from './views/Playlist';
import WatchVideo from './views/WatchVideo';
import Festivals from './views/Festivals';

export default class Routes extends React.Component {
	render() {
		return(
			<Router>
				<Stack key="root">
					<Scene key="festivals" component={Festivals} title="Upcoming Festivals" />
					<Scene key="playlist" component={Playlist} title="Hot EDM Videos" />
					<Scene key="watchvideo" component={WatchVideo} title="View Video" />
				</Stack>
			</Router>
			)
	}
}
