import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <h6>Вопрос {this.props.current} из {this.props.total}</h6>
        )
    }
}

Header.propTypes = {
    current: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired
}