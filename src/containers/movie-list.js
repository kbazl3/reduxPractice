import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieList extends Component {
    renderList() {
        return this.props.movies.map(function(movie) {
            return (
                <li key={movie.title}>{movie.title}</li>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Movies</h3>
                <ul> {this.renderList()}</ul>
            </div>

        )
    }
}

function mapStateToProps(state) {

    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList)
