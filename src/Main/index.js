import React, { Fragment } from 'react';

import SearchBarComponent from './SearchBar';
import VideoListComponent from './VideoList';

const MainComponent = () => (
  <Fragment>
    <SearchBarComponent />
    <VideoListComponent />
  </Fragment>
);

export default MainComponent;
