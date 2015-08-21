import React from "react";

export default React.createClass({
  propTypes: {
    onSave: React.PropTypes.func.isRequired
  },
  handleChange: function(event) {
    this.state.task.name = event.target.value;
    this.setState({task: this.state.task});
  },
 saveClick: function(event) {
    if(this.state.task.name) {
      this.props.onSave(this.state.task);
      this.setState({task:{}});
    }
  },
  cancelClick: function(event) {
    this.setState({task:{}});
  },
  getInitialState: function() {
    return {task:{}};
  },
  render: function() {
      var name = this.state.task.name;
      return (
        <div className='row'>
          <div className="col-sm-3 col-sm-offset-4">
            <input type="text" className="form-control" placeholder='Task Name' value={name} onChange={this.handleChange} />
          </div>
          <div className="col-sm-2 pull-right">
            <button className='btn btn-success btn-sm' onClick={this.saveClick}>Save</button>
            <button className='btn btn-danger btn-sm' onClick={this.cancelClick}>Cancel</button>
          </div>
        </div>
    );
  },
});