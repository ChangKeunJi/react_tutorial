import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // gapi created since we added to script inside HTML
    window.gapi.load("client:auth2", () => {
      // Only gets called after 'auth2' library loaded up
      window.gapi.client
        .init({
          clientId:
            "1055417734521-1r3rjaqho25kkc3g3q3guhpukl76e2qs.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // Initializing also works asynchronously and returns promise
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // : To rerender content, Update a state.
          this.auth.isSignedIn.listen(this.onAuthChange);
          // Callback function gets called when value of isSignedIn has chagned
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    }

    if (this.state.isSignedIn) {
      return <div>I am signed in 😊</div>;
    }

    if (!this.state.isSignedIn) {
      return <div>I am not signed in 🤷‍♀️</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

// gapi : google api library for every service.
// It only has one method which is 'load'.

// gapi.load('client:auth2'); => Load a auth api
// Now gapi has multiple methods for oauth functions.

// gapi.client.init({clientId:'clientid});
