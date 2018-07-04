import React, {Component} from 'react';
import './InputData.css';
import InputItems from './InputItems';

class InputData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItems = this.addItems.bind(this);
    }
    addItems(a) {
        if(this._inputElement.value !== '') {
            let newItems = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((b) => {
                return {
                    items: b.items.concat(newItems)
                };
            });
        }
        this._inputElement.value = '';
        a.preventDefault();
    };
    render() {
        return (
          <div className='input'>
              <form onSubmit={this.addItems}>
              <input ref={(i) => this._inputElement = i}
                    placeholder='enter contact'/>
              <button type='submit'>add</button>
              </form>
              <div>
                  <InputItems entries={this.state.items}/>
              </div>
          </div>
        );
    }

}

export default InputData;