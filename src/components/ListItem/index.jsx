import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    const {
      item: {
        _id,
        name: { first, last },
        age,
      },
      highlited,
      onClick,
    } = this.props;
    return (
      <li className={highlited ? 'highlited' : ''} onClick={e => onClick(_id)}>
        <div>
          <strong>{last}</strong> {first}
        </div>
        <div>
          age:<strong>{age}</strong>
        </div>
      </li>
    );
  }
}

export default ListItem;
