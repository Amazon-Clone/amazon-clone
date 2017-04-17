import React, { Component } from 'react';
import './DepartmentMenu.css';

class DepartmentMenu extends Component {
    constructor(props) {
        super(props)
        
        this.state = {};

        for (var i = 0; i < 20; i ++){
            this.state['a' + i] = {width: '0px'};
        }
        
    }

    onHoverB(target) {
        this.setState({
            [target]: { 
                width: '485px',
                transition: 'width 150ms',
            }
        })
    }

     onHoverC(target) {
        this.setState({
            [target]: { 
                width: '485px',         
            }
        })
    }

    onExitB(target) {
        this.setState({
            [target]: { 
                width: '0px'
            }
        })
    }

    render() {

        var titles = [
            "Amazon Video",
            "Amazon Music",
            "Appstore for Android",
            "Prime Photos and Prints",
            "Kindle E-readers & Books",
            "Fire Tablets",
            "Fire TV",
            "Echo & Alexa",
            "Books & Audible",
            "Movies, Music & Games",
            "Electronics & Computers",
            "Home, Garden & Tools",
            "Beauty, Health & Food",
            "Toys, Kids & Baby",
            "Clothing, Shoes & Jewelry",
            "Handmade",
            "Sports & Outdoors",
            "Automotive & Industrial",
            "Home Services",
            "Credit & Payment Products",
            "Credit & Payment Products"
            ];

            var ctx = this;

            var itemsB = titles.map(function(t, i) {
                var id = ('a' + i);
                console.log(ctx);
            return React.createElement('div', {
                onMouseOver: "this.onHoverB.bind(this,'" + id + "')", 
                onMouseOut: "this.onExitB.bind(this,'" + id + "')",
                style: ctx.state[id],
                className: 'sliding-slider sliding-slider' + (i + 1)
            }, t)
            
            });

            var items = titles.map(function(t, i) {
                var id = ('a' + i);
            return React.createElement('h1', {
                onMouseOver: "this.onHoverB.bind(this,'" + id + "')", 
                onMouseOut: "this.onExitB.bind(this,'" + id + "')",
                style: ctx.state[id]
            }, t)
            
            });

        return (
            <div>
                <div className='dmenu'></div>
                    <div className='menu1' >
                        <div className='menu2'>
                            {items}
                        </div>
                            {itemsB}
                        
                    </div>
                </div>
                
        );
    }
}

export default DepartmentMenu;