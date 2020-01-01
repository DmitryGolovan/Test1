import React, { Component } from "react";

export default class App extends Component {
  constructor({ list }) {
    super({ list });
    this.state = {
      list: list,
      changedList: list,
      check: false,
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeText = this.changeText.bind(this);
    this.filter = this.filter.bind(this);
    this.resetChanges = this.resetChanges.bind(this);
  }

  handleChange(e) {
    let arr = this.state.changedList;
    let arr1 = arr.slice();
    let sortedArr;
    this.setState({
      check: e.target.checked
    });

    if (e.target.checked) {
      arr1.filter(item => item.match(this.state.changedList));
      sortedArr = arr1.sort(function(a, b) {
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        } else if (a.toLowerCase() < b.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      });

      this.setState({
        changedList: sortedArr
      });
    } else {
      let filteredArr;
      let basicArr = this.state.list;
      filteredArr = basicArr.filter(item =>
        item.toLowerCase().match(this.state.text.toLowerCase())
      );
      this.setState({
        changedList: filteredArr
      });
    }
  }

  changeText(e) {
    this.setState({
      text: e.target.value
    });
  }
  filter(e) {
    let arr = this.state.list;
    let filteredArr = arr.filter(item =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      changedList: filteredArr,
      text: e.target.value
    });
    if (this.state.check) {
      let sortedArr = filteredArr.sort(function(a, b) {
        if (a.toLowerCase() > b.toLowerCase()) {
          return 1;
        } else if (a.toLowerCase() < b.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      });
      this.setState({
        changedList: sortedArr
      });
    }
  }

  resetChanges() {
    this.setState({
      check: false,
      changedList: this.state.list,
      text: ""
    });
  }

  render() {
    const { changedList, check, text } = this.state;
    return (
      <div>
        <input onChange={this.handleChange} type="checkbox" checked={check} />
        <input
          type="text"
          onChange={this.changeText}
          onKeyUp={this.filter}
          value={text}
        />
        <input type="submit" onClick={this.resetChanges} value="Reset" />
        <div style={styles}>
          {changedList.map(item => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}
const styles = {
  border: "1px solid black",
  width: "175px",
  height: "75px",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
  overflow: "scroll"
};
