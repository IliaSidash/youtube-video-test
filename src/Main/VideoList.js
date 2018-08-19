import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Video from './Video';

const Loader = styled.div`
  padding: 10px 0;
  text-align: center;
`;

const ErrorText = Loader.extend`
  color: red;
`;

const getState = (state, errorText) => {
  if (state === 'pending') {
    return <Loader>Loading...</Loader>;
  }
  if (state === 'error') {
    return <ErrorText>{errorText}</ErrorText>;
  }
  return null;
};

class VideoListComponent extends Component {
  componentWillMount() {
    const { fetchVideos } = this.props.store;
    fetchVideos();
  }

  render() {
    const {
      videos, fetchVideos, hasMore, state, errorText,
    } = this.props.store;
    return (
      <InfiniteScroll pageStart={0} loadMore={fetchVideos} hasMore={hasMore} initialLoad={false}>
        <Grid>
          <Row>
            {videos.map(video => (
              <Col lg={4} key={video.id.videoId}>
                <Video video={video} />
              </Col>
            ))}
          </Row>
          {getState(state, errorText)}
        </Grid>
      </InfiniteScroll>
    );
  }
}

VideoListComponent.propTypes = {
  store: PropTypes.shape({
    fetchVideos: PropTypes.func,
    videos: PropTypes.array,
    hasMore: PropTypes.bool,
    state: PropTypes.string,
    errorText: PropTypes.string,
  }).isRequired,
};

export default inject('store')(observer(VideoListComponent));
