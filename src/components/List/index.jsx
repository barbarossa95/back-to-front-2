import React, { Component } from 'react';

import ListItem from '../ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    const { items } = props;
    this.state = {
      activeItemId: null,
      items,
    };
  }

  handleSelect = activeItemId => this.setState({ activeItemId });

  render() {
    const { items } = this.props,
      { activeItemId } = this.state,
      rows = items.map(item => {
        const isActive = item._id === activeItemId;
        return (
          <ListItem
            key={item._id}
            item={item}
            highlited={isActive}
            onClick={this.handleSelect}
          />
        );
      });

    return <ul>{rows}</ul>;
  }
}

export default List;
