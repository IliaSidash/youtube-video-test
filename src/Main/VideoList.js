import React from 'react';
// import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Video from './Video';

const VideoListComponent = () => (
  <Grid>
    <Row>
      <Col lg={4}>
        <Video />
      </Col>
    </Row>
  </Grid>
);

export default VideoListComponent;
