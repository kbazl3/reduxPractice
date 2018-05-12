import React, {Component} from 'react';
import BookList from '../containers/book-list'
import MovieList from '../containers/movie-list';
import BookDetail from '../containers/book-detail';
import MovieDetail from '../containers/movie-detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <BookList/>
                <BookDetail/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <MovieList/>
                <MovieDetail/>
            </div>
        );
    }
}
