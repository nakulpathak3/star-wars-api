import React from 'react';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      query: null,
      resource: this.props.resource,
      searchBy: this.props.searchBy,
    };
    console.log("Form constructor: Got called with " + this.state.query + this.state.searchBy + this.state.resource);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    const { query, searchBy, resource } = this.state;
    console.log("Form Submit: Got called with " + query + searchBy + resource);

    if (searchBy == 'id') {
      this.props.history.push('/' + resource + '/' + query);
    } else {
      this.props.history.push('/' + searchBy + '/' + resource  + '?query=' + query);
    }
    event.preventDefault();
  }

  render() {
    console.log("Form Render: Got called with " + this.state.query);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Query by {this.state.searchBy}:
            <input type="text" value={this.state.query} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
