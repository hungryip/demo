import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
    state => state
)
export class AppContainer extends Component {

    render() {
        console.log('App: ', this.props)
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
