import React,{ Component } from 'react';
import '../css/styles.css'

class Header extends Component {
    state = {
        keywords: ''
    };

    inputChangeHandler = (event) => {
        this.setState({
            keywords: event.target.value
        });
    };

    render() {
        return (
            <header>
                <div className="logo">Logo</div>
                <input
                    type="text"
                    onChange={this.inputChangeHandler}/>
            </header>
        );
    }
}

const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear()+'/'+newDate.getMonth()+'/'+newDate.getDay();
};

export default Header;