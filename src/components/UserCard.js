import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="align-center">
                    <img alt="avatar" src={this.props.userData[1]} className="avatar"/>

                    <p className="name">{this.props.userData[2]}</p>
                    <p className="username">@{this.props.userData[0]}</p>

                    <div className="boxes">
                        <div className="box">
                            <p className="box-header">Repositories</p>
                            <p className="box-item">{this.props.userData[3]}</p>
                        </div>
                        <div className="box">
                            <p className="box-header">Followers</p>
                            <p className="box-item">{this.props.userData[4]}</p>
                        </div>
                        <div className="box">
                            <p className="box-header">Following</p>
                            <p className="box-item">{this.props.userData[5]}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
