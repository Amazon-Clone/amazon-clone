import React, { Component } from 'react';

class CreditCardForm extends Component {
    render() {
        return (
            <Modal>
                <div>
                    <label htmlFor="name">Name on card: </label>
                    <input type="text" name="name" placeholder="Name" />
                </div>

                <div>
                    <label htmlFor="cardnumber">Card Number: </label>
                    <input type="text" name="cardnumber" placeholder="Card Number" />
                </div>

                <div>
                    <label htmlFor="cardnumber">CVC: </label>
                    <input type="text" name="cvc" placeholder="CVC Number" />
                </div>

                <div>
                    <label htmlFor="expmo">Exp month: </label>
                    <input type="text" name="expmo" placeholder="MM" />
                </div>

                <div>
                    <label htmlFor="expyr">Exp year: </label>
                    <input type="text" name="expyr" placeholder="YY" />
                </div>
            </Modal>
        )
    }
}

export default CreditCardForm;