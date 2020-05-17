import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actFetchHighlightsRequest } from '../../redux/highlight/highlight.actions';
import './highlights.styles.css';

class HighLights extends Component {

    componentWillMount(){
        this.props.actFetchHighlights();
    }

    render() {

        const {highlights} = this.props;

        console.log(highlights)

        return (
            <div className="highlight_container">
                <div className="highlisht_title">
                    <h2 className="title">
                        <span>TIN NỔI BẬT</span>
                    </h2>
                </div>
                <div className="banner_hot">
                {
                    highlights.map((highlight,index) => {
                        return (
                            <div key={index} className="item_banner" style={{ backgroundImage: `url(${highlight.image})` }} ></div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        highlights: state.highlight.highlights
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actFetchHighlights: () => {
            return dispatch(actFetchHighlightsRequest());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HighLights)