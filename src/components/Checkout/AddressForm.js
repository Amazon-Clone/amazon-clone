import React, {Component} from 'react';
import Modal from 'react-modal';

class AddressForm extends Component{

    constructor(props){
        super(props);
    }

    render(){

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

        return(

            <Modal
                    isOpen={this.props.addressOpen}
                    onAfterOpen={this.props.afterOpenAddress}
                    onRequestClose={this.props.closeAddress}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <form>
                        <div className="formElement">
                            <label for="recipent">Recipent:</label>
                            <input id="recipent" type="text" name="recipent" />
                        </div>

                        <div className="formElement">
                            <label for="address1">Address 1:</label>
                            <input id="address1" type="text" name="address1" />
                        </div>

                        <div className="formElement">
                            <label for="address2">Address 2:</label>
                            <input id="address2" type="text" name="address2" />
                        </div>

                        <div className="formElement">
                            <label for="state">State:</label>
                            <select name="state">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>

                        </div>
                        <div className="formElement">
                            <label for="zipcode">Postal Code:</label>
                            <input id="zipcode" type="text" name="zipcode" />
                        </div>

                        <div className="formElement">
                            <label for="phone">Phone Number:</label>
                            <input id="phone" type="text" name="phone" />
                        </div>

                        <div className="formElement"><button type="submit" form="form1" value="Submit">Submit</button></div>
                    </form>
                </Modal>

        )
    }


}

export default AddressForm;