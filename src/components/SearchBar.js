import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e){
    console.log(this.props.onFilterTextChange);
    this.props.onFilterTextChange(e.target.value);
}

  handleInStockChange(e){
    this.props.onInStockChange(e.target.checked);
  }

  render(){
    return(
      <form>
        <input
          placeholder="Search..."
          type="text"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />

        <label>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
        </label>
        {''}
        Only show products in stock
      </form>
    )
  }

}

export default SearchBar;