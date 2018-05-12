import React, {Component} from 'react';
import {connect} from 'react-redux'; //glue between react and redux
import  {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux'; //takes action object and makes sure it flows through all Reducers


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={ () => this.props.selectBook(book)}
                    className="list-group-item"
                    key={book.title}>
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as props for BookList component
    return {
        books: state.books
    }
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    //wehenever selectBook is called the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a function(mapStateToProps) and a component(BookList) to create a container
