import React, { Component } from 'react';
import './The_dress_shop.css'
import { connect } from 'react-redux';
import { getUser } from '../../actions/get_user'

class TheDressShop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      real: { display: 'block' },
      fake: { display: 'none' }
    }
  }

  componentDidMount() {
    this.props.getUser();
}

  onHo(target) {
        if (this.props.user.userfirstname == 'jacob'){
          console.log('mistana')
        this.setState({
            [target]: { 
                display: 'block'       
            }
        })
    }
  }

    offHo(target) {
        this.setState({
            [target]: { 
                display: 'none'
            }
        })
    }

  render() {

            // console.log('forjacob:', this.props.user)

            const user = this.props.user || {}

    return (
      <div className='the-dress-shop-main-container' onMouseOver={this.onHo.bind(this, 'fake')} onMouseOut={this.offHo.bind(this, 'fake')}>
        <h3>The dress shop</h3>
        <div className='dress-shop-video'>
          <video style={this.state.real} preload="auto" autoPlay='true' src="https://images-na.ssl-images-amazon.com/images/G/01/gateway/yiyiz/A1n7tUBAEvS._CB531406799_.mp4" className='dress-shop-vid-cont' loop>
          </video>
          <video style={this.state.fake} preload="auto" autoPlay='true' src="./images/homeimages/tinko.mp4" className='dress-shop-vid-cont1' loop>
          </video>
            <div className='leftcover-home'></div>
            <div className='leftcover-home2'></div>
            <div className='rightcover-home'></div>
            <div className='rightcover-home2'></div>
        </div>
        <div className='dress-shop-base-link'>
          <hr></hr>
          <a href='#'>Shop women's dresses</a>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        user: state.user.all
    }
}


export default connect(mapStateToProps, { getUser })(TheDressShop);