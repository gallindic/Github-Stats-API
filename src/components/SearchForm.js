import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

export default class SearchForm extends Component {
    state = {
        username: '',
    }

    onChange = (e) => this.setState({ username: e.target.value });

    getJSON = () => {
        fetch ('http://127.0.0.1:5000/scrape', {
            method: 'POST',
            body: this.state.username,
            json: true,
        }).then(res => res.json())
        .then((response) => {
            this.props.githubData(response);
        })
        .catch(console.log);
    }

    render() {
        return (
            <div className="search-form">
                <input type="text" placeholder="Enter your username" name="username" onChange={this.onChange}/>
                <button type="submit" onClick={this.getJSON}><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        )
    }
}
