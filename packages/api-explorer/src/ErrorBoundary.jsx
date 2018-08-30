const React = require('react');
const PropTypes = require('prop-types');

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // TODO add bugsnag here?
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ paddingLeft: '2%' }}>
          <h3>
            There was an error rendering the API Explorer. If you are the owner of this project
            please contact{' '}
            <a href="mailto:support@readme.io?subject=API Explorer Error">support@readme.io</a> with
            the following error:
          </h3>
          <pre>
            {this.state.error && this.state.error.toString()}
            {this.state.info.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

module.exports = ErrorBoundary;