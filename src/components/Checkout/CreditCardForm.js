import React, { Component } from 'react';
import Modal from 'react-modal';
import './Form.css';

class CreditCardForm extends Component {
    render() {

        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };

        return (
            <Modal
                isOpen={this.props.cardOpen}
                onAfterOpen={this.props.cardAddress}
                onRequestClose={this.props.closeCard}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className = "formContainer">
                    <img className = "closex" src="./images/icons/cancel-music.svg" onClick = {this.props.closeCard} alt=""/>
                    <div>
                        <label htmlFor="name">Name on card: </label>
                        <input onChange = {this.props.handleChangeForm.bind(this, 'cardname')} type="text" name="cardname" placeholder="Name" />
                    </div>
    
                    <div>
                        <label htmlFor="cardnumber">Card Number: </label>
                        <input onChange = {this.props.handleChangeForm.bind(this, 'cardnumber')} type="text" name="cardnumber" placeholder="Card Number" />
                    </div>
    
                    <div>
                        <label htmlFor="cardnumber">CVC: </label>
                        <input onChange = {this.props.handleChangeForm.bind(this, 'cardcvc')} type="text" name="cardcvc" placeholder="CVC Number" />
                    </div>
    
                    <div>
                        <label htmlFor="expmo">Exp month: </label>
                        <input onChange = {this.props.handleChangeForm.bind(this, 'cardexpmo')} type="text" name="cardexpmo" placeholder="MM" />
                    </div>
    
                    <div>
                        <label htmlFor="expyr">Exp year: </label>
                        <input className="submit" onChange = {this.props.handleChangeForm.bind(this, 'cardexpyr')} type="text" name="cardexpyr" placeholder="YY" />
                    </div>
                    <div className="formElement"><button className="submit" onClick={this.props.closeCard} type="submit" form="form1" value="Submit">Submit</button></div>
                </div>
            </Modal>
        )
    }
}

export default CreditCardForm;