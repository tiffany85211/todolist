import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';

injectTapEventPlugin();

class TodoItem extends Component {

  render() {
    let itemClass = '';
    if (this.props.item.checked) {
      itemClass = 'item-checked';
    } else {
      itemClass = 'items';
    }
    return (
      <div className="Item-Container">
        <div className="Item-List">
          <Checkbox
            className={itemClass}
            label={this.props.item.content}
            style={{ marginTop: 10, width: '80%' }}
            checked={this.props.item.checked}
            onCheck={() => { this.props.onCheckItem(this.props.listid, this.props.itemid); }}
          />
          <IconButton
            iconClassName="material-icons item-delete-btn"
            tooltip="Delete"
            onClick={() => this.props.onRemoveItem(this.props.listid, this.props.itemid)}
          >clear</IconButton>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  listid: PropTypes.number.isRequired,
  itemid: PropTypes.number.isRequired,
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onCheckItem: PropTypes.func.isRequired,
};

export default TodoItem;
