import React, {Component} from 'react';

class InputItems extends Component {
    createTasks(c) {
        return <li className='contact-item'
                   key={c.key}>{c.text}</li>
    }
    render() {

        let newTasks = this.props.entries;
        let newContact = newTasks.map(this.createTasks);

        return (
            <ul className='contact'>
                {newContact}
            </ul>
        )
    }
}

export default InputItems;