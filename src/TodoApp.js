import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TodoList from './TodoList';
import CountDisplay from './CountDisplay';
// import logo from './logo.svg';
import './App.css';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      countTodo: 0,
      countDone: 0,
    };
    this.handleAddList = this.handleAddList.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveList = this.handleRemoveList.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleEditList = this.handleEditList.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleShowItem = this.handleShowItem.bind(this);
    this.handleCheckItem = this.handleCheckItem.bind(this);
  }

  handleAddList() {
    const lists = this.state.lists.slice();
    const newList = {
      title: 'New Todo List',
      items: [],
      editMode: false,
      inputValue: '',
    };
    lists.push(newList);
    this.setState({ lists });
  }

  handleAddItem(listid, inputItem) {
    const lists = this.state.lists.slice();
    const item = {
      content: inputItem,
      checked: false,
    };
    lists[listid].items.push(item);
    lists[listid].inputValue = '';
    this.setState({ lists });
    this.handleCount();
  }

  handleRemoveList(listid) {
    const lists = this.state.lists.slice();
    lists.splice(listid, 1);
    this.setState({ lists });
    this.handleCount();
  }

  handleRemoveItem(listid, itemid) {
    const lists = this.state.lists.slice();
    lists[listid].items.splice(itemid, 1);
    this.setState({ lists });
    this.handleCount();
  }

  handleEditMode(listid) {
    const lists = this.state.lists;
    lists[listid].editMode = !(lists[listid].editMode);
    this.setState({ lists });
  }

  handleEditList(listid, title) {
    const lists = this.state.lists;
    lists[listid].title = title;
    this.setState({ lists });
  }

  handleShowItem(listid, inputVal) {
    const lists = this.state.lists.slice();
    lists[listid].inputValue = inputVal;
    this.setState({ lists });
  }

  handleCheckItem(listid, itemid) {
    const lists = this.state.lists.slice();
    lists[listid].items[itemid].checked = true;
    this.setState({ lists });
    this.handleCount();
  }

  handleCount() {
    const lists = this.state.lists.slice();
    let countTodo = 0;
    let countDone = 0;
    for (let i = 0; i < lists.length; i += 1) {
      for (let j = 0; j < lists[i].items.length; j += 1) {
        if (lists[i].items[j].checked) {
          countDone += 1;
        } else { countTodo += 1; }
      }
    }
    this.setState({ countTodo, countDone });
  }

  renderList(i) {
    return (
      <TodoList
        key={i}
        id={i}
        list={this.state.lists[i]}
        onEditMode={this.handleEditMode}
        onEditList={this.handleEditList}
        onShowItem={this.handleShowItem}
        onAddItem={this.handleAddItem}
        onRemoveList={this.handleRemoveList}
        onRemoveItem={this.handleRemoveItem}
        onCheckItem={this.handleCheckItem}
      />
    );
  }

  render() {
    return (
      <div className="App-Container">
        <div className="App-Header">
          <h1 className="App-header1"> TO DO LIST </h1>
          <div className="App-count">
            <CountDisplay countDone={this.state.countDone} countTodo={this.state.countTodo} />
          </div>
          <div className="App-add-list">
            <FloatingActionButton onClick={this.handleAddList}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <p className="App-header2">Add <br /> New <br /> List</p>
        </div>
        <div>
          <ul className="App-Todolist">
            {this.state.lists.map((list, i) => this.renderList(i))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoApp;
