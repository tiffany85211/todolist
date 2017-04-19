import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


class TodoList extends Component {

  renderAddItem() {
    const listid = this.props.id;
    return (
      <div className="add-item">
        <TextField
          id={`item${listid}`}
          hintText="Add todo item"
          value={this.props.list.inputValue}
          onChange={e => this.props.onShowItem(listid, e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { this.props.onAddItem(listid, e.target.value); } }}
        />
      </div>
    );
  }

  renderListTitle() {
    const title = this.props.list.title;
    const id = this.props.id;
    const editMode = this.props.list.editMode;
    if (editMode) {
      return (
        <div className="list-title-edit">
          <TextField
            id={`list${id}`}
            defaultValue={title}
            style={{ fontSize: '24px' }}
            onKeyDown={(e) => { if (e.key === 'Enter') { this.props.onEditList(id, e.target.value); this.props.onEditMode(id); } }}
          />
        </div>
      );
    } else {
      return (
        <div className="list-title">
          <h2>{title}</h2>
        </div>
      );
    }
  }

  renderItem(i) {
    const item = this.props.list.items[i];
    return (
      <TodoItem
        listid={this.props.id}
        key={i}
        itemid={i}
        item={item}
        onRemoveItem={this.props.onRemoveItem}
        onCheckItem={this.props.onCheckItem}
      />
    );
  }

  render() {
    const listid = this.props.id;
    return (
      <div className="List-Container">
        <div className="List-Header">
          <div className="list-btn">
            <IconButton
              iconClassName="material-icons"
              tooltip="Edit"
              onClick={() => this.props.onEditMode(listid)}
            >edit</IconButton>
            <IconButton
              iconClassName="material-icons"
              tooltip="Delete"
              onClick={() => this.props.onRemoveList(listid)}
            >delete</IconButton>
          </div>
          {this.renderListTitle()}
        </div>
        <div className="Item Container">
          <div className="List-AddItem">
            {this.renderAddItem()}
          </div>
          <div className="Items">
            <ul>
              {this.props.list.items.map((item, i) => this.renderItem(i))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}


TodoList.propTypes = {
  id: PropTypes.number.isRequired,
  list: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })).isRequired,
    editMode: PropTypes.bool.isRequired,
    inputValue: PropTypes.string.isRequired,
  }).isRequired,
  onEditMode: PropTypes.func.isRequired,
  onEditList: PropTypes.func.isRequired,
  onRemoveList: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onShowItem: PropTypes.func.isRequired,
  onCheckItem: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
};

export default TodoList;
