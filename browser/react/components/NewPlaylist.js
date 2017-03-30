import React from 'react'


const NewPlaylist = (props) => {
  console.log(props)
  return (
    <div className="well">
    {props.hasTyped && (props.inputValue.length === 0 || props.inputValue.length > 16) ? <div className="alert alert-warning">Please enter a name between 1 and 16 characters.</div> : null}
      <form className="form-horizontal" onSubmit={props.onSubmit}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input value={props.inputValue} className="form-control" onChange={props.handleChange} type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success"
              disabled={props.disabled}>Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    )
}


export default NewPlaylist
