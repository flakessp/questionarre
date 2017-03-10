import React from 'react';

export default class Header extends React.Component {
    static PropTypes = {
        current: React.PropTypes.number.isRequired,
        total: React.PropTypes.number.isRequired
    }

    render() {
        return (
            <h6>Вопрос {this.props.current} из {this.props.total}</h6>
        )
    }
}