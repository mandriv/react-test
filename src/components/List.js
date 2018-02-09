import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

/*
  List container
*/

export default class List extends Component {

  render() {
    const { items, RowComponent, onRowEdit, onRowRemove } = this.props;
    const listItems = items.map(item => (
      <RowComponent
        key={item.id}
        item={item}
        onEdit={row => onRowEdit(row)}
        onRemove={row => onRowRemove(row)}
      />
    ));
    return (
      <Item.Group divided>
        {listItems}
      </Item.Group>
    );
  }

}

List.propTypes = {
  items: PropTypes.array.isRequired,
  RowComponent: PropTypes.func.isRequired,
  onRowEdit: PropTypes.func,
  onRowRemove: PropTypes.func,
};

List.defaultProps = {
  onRowEdit: () => null,
  onRowRemove: () => null,
};
