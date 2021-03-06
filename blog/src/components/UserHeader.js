import { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    if (!this.props.user) return <div>Loading ...</div>;

    return <div className="header">{this.props.user.name}</div>;
  }
}

// By convention, Named a second argument as a ownProps.
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, {
  fetchUser: fetchUser,
})(UserHeader);
