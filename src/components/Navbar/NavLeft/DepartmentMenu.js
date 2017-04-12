import React, { Component } from 'react';
import './DepartmentMenu.css';

class DepartmentMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            b: { width: '0px' },
            c: { width: '0px' },
            d: { width: '0px' },
            e: { width: '0px' },
            f: { width: '0px' },
            g: { width: '0px' },
            h: { width: '0px' },
            i: { width: '0px' },
            j: { width: '0px' },
            k: { width: '0px' },
            l: { width: '0px' },
            m: { width: '0px' },
            n: { width: '0px' },
            o: { width: '0px' },
            p: { width: '0px' },
            q: { width: '0px' },
            r: { width: '0px' },
            s: { width: '0px' },
            t: { width: '0px' },
            u: { width: '0px' },
            v: { width: '0px' },
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
        console.log(this.state.b)
        return (
            <div>
                <div className='dmenu'></div>
                    <div className='menu1' >
                        <div className='menu2'>
                            <h1 onMouseOver={this.onHoverB.bind(this, 'b')} onMouseOut={this.onExitB.bind(this, 'b')}>Amazon Video</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'c')} onMouseOut={this.onExitB.bind(this, 'c')}>Amazon Music</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'd')} onMouseOut={this.onExitB.bind(this, 'd')}>Appstore for Android</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'e')} onMouseOut={this.onExitB.bind(this, 'e')}>Prime Photos and Prints</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'f')} onMouseOut={this.onExitB.bind(this, 'f')}>Kindle E-readers & Books</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'g')} onMouseOut={this.onExitB.bind(this, 'g')}>Fire Tablets</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'h')} onMouseOut={this.onExitB.bind(this, 'h')}>Fire TV</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'i')} onMouseOut={this.onExitB.bind(this, 'i')} className='dmenuBorder'>Echo & Alexa</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'j')} onMouseOut={this.onExitB.bind(this, 'j')}>Books & Audible</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'k')} onMouseOut={this.onExitB.bind(this, 'k')}>Movies, Music & Games</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'l')} onMouseOut={this.onExitB.bind(this, 'l')}>Electronics & Computers</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'm')} onMouseOut={this.onExitB.bind(this, 'm')}>Home, Garden & Tools</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'n')} onMouseOut={this.onExitB.bind(this, 'n')}>Beauty, Health & Food</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'o')} onMouseOut={this.onExitB.bind(this, 'o')}>Toys, Kids & Baby</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'p')} onMouseOut={this.onExitB.bind(this, 'p')}>Clothing, Shoes & Jewelry</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'q')} onMouseOut={this.onExitB.bind(this, 'q')}>Handmade</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'r')} onMouseOut={this.onExitB.bind(this, 'r')}>Sports & Outdoors</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 's')} onMouseOut={this.onExitB.bind(this, 's')}>Automotive & Industrial</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 't')} onMouseOut={this.onExitB.bind(this, 't')} className='dmenuBorder'>Home Services</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'u')} onMouseOut={this.onExitB.bind(this, 'u')}>Credit & Payment Products</h1>
                            <h1 onMouseOver={this.onHoverC.bind(this, 'v')} onMouseOut={this.onExitB.bind(this, 'v')}>Credit & Payment Products</h1>
                        </div>

                        <div onMouseOver={this.onHoverB.bind(this, 'b')} onMouseOut={this.onExitB.bind(this, 'b')} className='sliding-slider' style={this.state.b}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'c')} onMouseOut={this.onExitB.bind(this, 'c')} className='sliding-slider sliding-slider2' style={this.state.c}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'd')} onMouseOut={this.onExitB.bind(this, 'd')} className='sliding-slider sliding-slider3' style={this.state.d}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'e')} onMouseOut={this.onExitB.bind(this, 'e')} className='sliding-slider sliding-slider4' style={this.state.e}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'f')} onMouseOut={this.onExitB.bind(this, 'f')} className='sliding-slider sliding-slider5' style={this.state.f}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'g')} onMouseOut={this.onExitB.bind(this, 'g')} className='sliding-slider sliding-slider6' style={this.state.g}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'h')} onMouseOut={this.onExitB.bind(this, 'h')} className='sliding-slider sliding-slider7' style={this.state.h}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'i')} onMouseOut={this.onExitB.bind(this, 'i')} className='sliding-slider sliding-slider8' style={this.state.i}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'j')} onMouseOut={this.onExitB.bind(this, 'j')} className='sliding-slider sliding-slider9' style={this.state.j}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'k')} onMouseOut={this.onExitB.bind(this, 'k')} className='sliding-slider sliding-slider10' style={this.state.k}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'l')} onMouseOut={this.onExitB.bind(this, 'l')} className='sliding-slider sliding-slider11' style={this.state.l}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'm')} onMouseOut={this.onExitB.bind(this, 'm')} className='sliding-slider sliding-slider12' style={this.state.m}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'n')} onMouseOut={this.onExitB.bind(this, 'n')} className='sliding-slider sliding-slider13' style={this.state.n}></div>
                        <div  onMouseOver={this.onHoverC.bind(this, 'o')} onMouseOut={this.onExitB.bind(this, 'o')} className='sliding-slider sliding-slider14' style={this.state.o}></div>
                        <div onMouseOver={this.onHoverC.bind(this, 'p')} onMouseOut={this.onExitB.bind(this, 'p')} className='sliding-slider sliding-slider15' style={this.state.p}></div>
                        <div onMouseOver={this.onHoverC.bind(this, 'q')} onMouseOut={this.onExitB.bind(this, 'q')} className='sliding-slider sliding-slider16' style={this.state.q}></div>
                        <div onMouseOver={this.onHoverC.bind(this, 'r')} onMouseOut={this.onExitB.bind(this, 'r')} className='sliding-slider sliding-slider17' style={this.state.r}></div>
                        <div onMouseOver={this.onHoverC.bind(this, 's')} onMouseOut={this.onExitB.bind(this, 's')} className='sliding-slider sliding-slider18' style={this.state.s}></div>
                        <div onMouseOver={this.onHoverC.bind(this, 't')} onMouseOut={this.onExitB.bind(this, 't')} className='sliding-slider sliding-slider19' style={this.state.t}></div>
                        <div onMouseOver={this.onHoverC.bind(this, 'u')} onMouseOut={this.onExitB.bind(this, 'u')} className='sliding-slider sliding-slider20' style={this.state.u}></div>
                    </div>
                </div>
                
        );
    }
}

export default DepartmentMenu;