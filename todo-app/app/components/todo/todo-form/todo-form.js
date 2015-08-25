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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      todo: nextProps.todo
    });
  }

  handleChange(event) {
    this.state.todo.name = event.target.value;
    this.setState(this.state);
  }

  saveClick (event) {
    if(this.state.todo.name && this.state.todo.name.length > 0) {
      this.props.onSave(this.state.todo);
    } else {
      alert('Please enter todo!!');
    }
  }

  cancelClick (event) {
    this.props.cancelClick();
  }

  render() {
      var name = this.state.todo.name;
      return (
        <div className='row'>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder='Todo' value={name} onChange={this.handleChange} />
          </div>
          <div className="col-sm-2 pull-right">
            <button className='btn btn-success btn-sm' onClick={this.saveClick}>Save</button>
            &nbsp;&nbsp;
            <button className='btn btn-danger btn-sm' onClick={this.cancelClick}>Cancel</button>
          </div>
        </div>
    );
  }
}

TodoForm.propTypes = {
 todo: React.PropTypes.object,
 cancelClick: React.PropTypes.func.isRequired,
};