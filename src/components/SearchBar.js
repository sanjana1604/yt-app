import React from 'react';

class SearchBar extends React.Component {
  state={term:''}
  inputChange(e){
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={(e)=>this.inputChange(e)} className='ui form' >
          <div className="field">
          <label>
            <h1>Search Videos</h1>
          </label>
          <br />
          <input type='text' 
          value={this.state.term} 
          onChange={(e)=>this.setState({term:e.target.value})}
          />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
