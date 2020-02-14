
import React, { Component } from 'react'

export default class RepositoryItem extends Component {
    render() {
        return (
            <div className="repository-container">
                <p>{this.props.repositoryData[0]}</p>
                <p>{this.props.repositoryData[1]}</p>
                <p>{this.props.repositoryData[2]}</p>
            </div>
        )
    }
}
