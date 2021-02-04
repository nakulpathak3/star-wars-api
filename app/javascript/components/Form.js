import React from 'react';
import { withRouter } from 'react-router-dom'; 

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      query: '',
      resource: this.props.resource,
      searchBy: this.props.searchBy,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.query ==  "") return;
    
    if (this.state.searchBy == 'id') {
      console.log('/' + this.state.resource + '/' + this.state.query);
      this.props.history.push('/' + this.state.resource + '/' + this.state.query);
    } else {
      console.log('/' + this.state.resource + '/' + this.state.searchBy + '?query=' + this.state.query)
      this.props.history.push('/' + this.state.searchBy + '/' + this.state.resource  + '?query=' + this.state.query);
    }
    event.preventDefault();
  }

  render() {
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
