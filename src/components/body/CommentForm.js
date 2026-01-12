import { Form, Button, Input } from "reactstrap";
import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
      submitted: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addComment(
      parseInt(this.props.dishID, 10),
      this.state.author,
      this.state.rating,
      this.state.comment
    );

    this.setState({
      author: "",
      rating: "",
      comment: "",
      submitted: true,
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Submit Your Comment</h2>

          <Input
            type="text"
            name="author"
            value={this.state.author}
            placeholder="Your Name"
            onChange={this.handleInputChange}
            required
          />
          <br />

          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.handleInputChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
          <br />

          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            placeholder="Your Comment"
            onChange={this.handleInputChange}
            required
          />
          <br />

          {!this.state.submitted && (
            <Button type="submit" color="primary">
              Submit
            </Button>
          )}
        </Form>
      </div>
    );
  }
}

export default CommentForm;
