import React, { Component } from 'react';
import '../css/NavBar.css';
class NavBar extends Component {
    state = {
        value: ''
    }

    handleChangeAction = e => {
        e.preventDefault();
        this.setState({value: e.target.value})
    }

    render() {
        const { value } = this.state
        return (
            <div className='NavBar--container'>
                <div>
                    <h4>Ma liste de choses à faire</h4>
                </div>
                <div className='NavBar'>
                    <input className='NavBar--input'
                        type='text'
                        placeholder='Ajouter une action'
                        value= {value}
                        onChange={this.handleChangeAction}
                    />
                    <div
                    className='NavBar--submit'
                    >
                        <button  onClick={() => this.props.addNewAction(value)} type="button" className="btn btn-primary">Click</button>
                    </div>
                </div>
            </div>
        )
    }
}

export { NavBar };