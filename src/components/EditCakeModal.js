import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Button, Icon } from 'semantic-ui-react';

/*
  EditCakeModal description
*/

export default class EditCakeModal extends Component {

  constructor(props) {
    super(props);
    const { cake } = props;
    this.state = {
      title: cake.title,
      desc: cake.desc,
      image: cake.image,
      id: cake.id, // eslint-disable-line
    };
  }

  render() {
    const { open, closeIcon, closeOnDocumentClick, onClose } = this.props;
    const { title, desc, image } = this.state;
    return (
      <Modal
        open={open}
        closeIcon={closeIcon}
        closeOnDocumentClick={closeOnDocumentClick}
        onClose={onClose}
      >
        <Modal.Header>Edit cake</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label htmlFor="cakeTitle">
                Title
                <Form.Input
                  placeholder="Cake's title"
                  value={title}
                  onChange={(ev, data) => this.setState({ title: data.value })}
                  id="cakeTitle"
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label htmlFor="cakeDescription">
                Description
                <Form.TextArea
                  placeholder="Cake's description"
                  value={desc}
                  onChange={(ev, data) => this.setState({ desc: data.value })}
                  id="cakeDescription"
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label htmlFor="cakeImg">
                Image URL
                <Form.Input
                  placeholder="Cake's image URL"
                  value={image}
                  onChange={(ev, data) => this.setState({ image: data.value })}
                  id="cakeImg"
                />
              </label>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            icon
            negative
            onClick={() => this.props.onClose()}
          >
            <Icon name="remove" />
            Cancel
          </Button>
          <Button
            icon
            positive
            onClick={() => {
              this.props.onSubmit(this.state);
              this.props.onClose();
            }}
          >
            <Icon name="checkmark" />
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

}

EditCakeModal.propTypes = {
  cake: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  closeOnDocumentClick: PropTypes.bool,
  closeIcon: PropTypes.bool,
  open: PropTypes.bool,
};

EditCakeModal.defaultProps = {
  onSubmit: () => null,
  onClose: () => null,
  closeOnDocumentClick: false,
  closeIcon: false,
  open: false,
};
