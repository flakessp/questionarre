import React from 'react';

export default class Disclaimer extends React.Component {
    render() {
        let display = this.props.answerIsGiven ? 'disclaimer_show' : 'disclaimer_hide';
        let className = this.props.correct ? `${display} disclaimer disclaimer_correct` : `${display} disclaimer disclaimer_incorrect`;
        let textMessage = this.props.correct ? 'Это правильный ответ' : 'Ответ неправильный';

        return(
            <div className={className}>{textMessage}</div>
        )
    }
}

Disclaimer.propTypes = {
    correct: React.PropTypes.bool.isRequired,
    answerIsGiven: React.PropTypes.bool.isRequired
}