import React from "react";

export default class TodoForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.saveClick = this.saveClick.bind(this);
    this.cancelClick = this.cancelClick.bind(this);

    this.state = {
      todo: this.props.todo
    };

    this.propTypes = {
      todo: React.PropTypes
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      todo: nextProps.todo
    });
  }

  handleChange(event) {
    this.state.todo.name = event.target.value;
    this.setState({todo: this.state.todo});
  }

  saveClick (event) {
    this.props.onSave(this.state.todo);
    this.setState({todo:{}});
  }

  cancelClick (event) {
    this.setState({todo:{}});
  }

  render() {
      var name = this.state.todo.name;
      return (
        <div className='row'>
          <div className="col-sm-3 col-sm-offset-4">
            <input type="text" className="form-control" placeholder='Todo' value={name} onChange={this.handleChange} />
          </div>
          <div className="col-sm-2 pull-right">
            <button className='btn btn-success btn-sm' onClick={this.saveClick}>Save</button>
            <button className='btn btn-danger btn-sm' onClick={this.cancelClick}>Cancel</button>
          </div>
        </div>
    );
  }
}