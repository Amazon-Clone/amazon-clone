import React, {Component} from "react";

class NgIf extends Component {
  render() {
    if (this.props.show) {
      return (
        this.props.children
      );
    } else {
      return null
    }
  }
}

export default NgIf;