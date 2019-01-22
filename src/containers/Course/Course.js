import React, { Component } from 'react';

class Course extends Component {
  state = {
    id: null,
    title: null
  }

	componentDidMount () {
    this.updateCoursehandler()
	}

  componentDidUpdate () {
    this.updateCoursehandler()
  }

  updateCoursehandler = () => {
    if (this.props.match.params.id != this.state.id ) {
      const query_params = new URLSearchParams(this.props.location.search);
      const title = query_params.get('title');
      this.setState({id: this.props.match.params.id})
      this.setState({title: title})
    }
  }

  render () {
      return (
          <div>
              <h1>{this.state.title}</h1>
              <p>You selected the Course with ID: {this.state.id}</p>
          </div>
      );
  }
}

export default Course;