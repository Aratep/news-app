import React, {Component} from "react"

export default function withUserName(WrappedComponent) {
    return class extends Component {

        render() {
            const username = localStorage.getItem('current_user')
                ? JSON.parse(localStorage.getItem('current_user')).username
                : "guest";

            return (
                <WrappedComponent username={username} {...this.props}/>
            );
        }
    }
}