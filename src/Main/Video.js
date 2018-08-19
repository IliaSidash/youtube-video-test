import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Video = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Image = styled.img``;

const Header = styled.h2`
  flex: 1 0 auto;
`;

const VideoComponent = ({ video }) => {
  const { title, thumbnails } = video.snippet;
  return (
    <Video>
      <Header>{title}</Header>
      <Image src={thumbnails.medium.url} />
    </Video>
  );
};

VideoComponent.propTypes = {
  video: PropTypes.shape({
    title: PropTypes.string,
    thumbnails: PropTypes.shape({
      medium: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default VideoComponent;
