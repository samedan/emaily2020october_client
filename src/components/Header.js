import React, {
  Component,
} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <li>
            <a href="/auth/google">
              Login with Google
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">
              Logout
            </a>
          </li>
        );
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={
                this.props.auth
                  ? "/surveys"
                  : "/"
              }
              className="left brand-logo"
            >
              Emaily
            </Link>
            <ul
              id="nav-mobile"
              className="right"
              // class="hide-on-med-and-down"
            >
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth: auth };
}

export default connect(mapStateToProps)(
  Header
);
