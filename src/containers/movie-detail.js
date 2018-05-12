import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component {

    render() {
        if (this.props.movie) {
            return (
                <div>
                    <h3>{this.props.movie.title}</h3>
                </div>
            )
        } else {
            return <div>no movie selected</div>
        }



    }
}

function mapStateToProps(state) {
    return {
        movie: state.activeMovie
    }
}

export default connect(mapStateToProps)(MovieDetail)
