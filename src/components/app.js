import React, { Component } from 'react';
import SKAppBar from './sk_app_bar/index';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-toolbox/lib/commons.scss';           // Import common styles

export default class App extends Component {
  render () {
    return (
      <div>
        <SKAppBar />
        <Grid>
          {this.props.children}
        </Grid> 
      </div>
    );
  }
}
