import React, { Component } from 'react';
import './NavLeft.css'
import DepartmentMenu from './DepartmentMenu.js'

class NavLeft extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showordont: { display: 'none' }
        }
    }

    onEnter(target) {
        this.setState({
            [target]: { display: 'block' 
            }
        })
    }

    onExit(target) {
        this.setState({
            [target]: { 
                display: 'none'
            }
        })
    }

    render() {
        return (
            <div>
              <div className='navLeft'>
                <div className='navLeft-Dep' onMouseOver={this.onEnter.bind(this, 'showordont')} onMouseOut={this.onExit.bind(this, 'showordont')} >
                   <button className="depBtn">
                        <h2 >Departments</h2>
                        <div className='navArrow'></div>
                        <div className='depMenu' style={this.state.showordont}><DepartmentMenu style={this.state.showordont} /></div>
                    </button>
                </div>
                <div className='left-text'>
                    <h1>Your Amazon.com</h1>
                    <h1>Todays Deals</h1>
                    <h1 className='h1c'>Gift Cards & Registry</h1>
                    <h1 className='h1b'>Sell</h1>
                    <h1 className='h1a'>Help</h1>
                </div>
                </div>
            </div>
        );
    }
}

export default NavLeft;