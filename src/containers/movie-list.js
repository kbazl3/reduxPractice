import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMovie} from '../actions/select-movie';
import {bindActionCreators} from 'redux';

class MovieList extends Component {
    renderList() {
        return this.props.movies.map((movie) => {
            return (
                <li
                    key={movie.title}
                    onClick={() => this.props.selectMovie(movie)}
                    >{movie.title}
                </li>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMovie: selectMovie}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
