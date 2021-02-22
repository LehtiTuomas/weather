import './SearchBar.css';
import React from 'react';

// SearchBar component
class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        // prevent default form action
        event.preventDefault();

        // update search term to App component
        this.props.onSubmit(this.state.term)

        // empty searchbar after submit
        this.setState({ term: '' })

        // close mobile devise keyboard after submit
        document.activeElement.blur();

    };

    render() {
        return (
            <div className="search-bar-box">
                <div className="search-bar ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Kaupunki:</label>
                            {/*Set search value from state and send new search value to state*/}
                            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                        </div>
                    </form>

                </div>
            </div>
        );
    }

}

export default SearchBar;