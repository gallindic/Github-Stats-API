import React, { Component } from 'react'
import SearchForm from '../components/SearchForm';
import UserCard from '../components/UserCard';
import Repositories from '../components/Repositories';

export default class Main extends Component {
    state = {
        userData: [],
        repositories: [],
        loaded: false,
    }

    getData = (githubData) => {
        this.setState({
            userData: [githubData.username, githubData.avatar, githubData.name, githubData.repositorieCounter, githubData.followersCounter, githubData.followingCounter],
            repositories: githubData.repositories,
            loaded: true,
        });

        console.log(this.state.userData[4]);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <SearchForm githubData={this.getData}/>
                    <div className={this.state.loaded ? "stats-container": "hidden"}>
                        <div className="user-container">
                            <UserCard userData={this.state.userData}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}