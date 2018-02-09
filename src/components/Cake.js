import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Dropdown, Responsive } from 'semantic-ui-react';
import EditCakeModal from '../components/EditCakeModal';

/*
  CakeSegment description
*/

export default class Cake extends Component {

  state = { editMode: false }

  render() {
    const { editMode } = this.state;
    const { image, title, desc } = this.props.item;
    return (
      <Item>
        <Item.Image size="small" src={image} />
        <Item.Content>
          <Item.Header className="capitalize">
            {title}
          </Item.Header>
          <Item.Meta className="capitalize">
            {desc}
          </Item.Meta>
          {/* Mobile only */}
          <Responsive
            {...Responsive.onlyMobile}
            as={Item.Extra}
          >
            <Dropdown
              icon="settings"
              floated="right"
              className="top left pointing dropdown"
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => this.setState({ editMode: true })}
                >
                  Edit
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.props.onRemove(this.props.item)}
                >
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Responsive>
        </Item.Content>
        {/* Non mobile */}
        <Responsive
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Dropdown
            icon="settings"
            floated="right"
            className="top right pointing dropdown"
          >
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => this.setState({ editMode: true })}
              >
                Edit
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => this.props.onRemove(this.props.item)}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
        <EditCakeModal
          cake={this.props.item}
          open={editMode}
          closeIcon
          closeOnDocumentClick
          onClose={() => this.setState({ editMode: false })}
          onSubmit={newCake => this.props.onEdit(newCake)}
        />
      </Item>
    );
  }

}

Cake.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

Cake.defaultProps = {
  onRemove: () => null,
  onEdit: () => null,
};
