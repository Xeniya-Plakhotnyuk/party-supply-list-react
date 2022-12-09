import { Component } from "react";
import popper from "./popper.png";

export class List extends Component {
  state = {
    userInput: "",
    groceryList: [],
  };

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Please, type something");
    } else {
      let listArray = this.state.groceryList;
      listArray.push(input);
      this.setState({ groceryList: listArray, userInput: "" });
    }
  }

  crossedWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({ groceryList: listArray });
  }
  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="mainField">
          <input
            type="text"
            placeholder="What we need to rock the party?"
            onChange={(e) => this.onChangeEvent(e.target.value)}
            value={this.state.userInput}
          />
          <button className = "animate__animated animate__backInUp add"
            onClick={() => this.addItem(this.state.userInput)}
                      >
            ADD
          </button>

          <ul>
            {this.state.groceryList.map((item, index) => (
              <li onClick={this.crossedWord} key={index}>
                <img src={popper} width="20px" alt="popper" />
                {item}
              </li>
            ))}
          </ul>
          <button onClick={() => this.deleteItem()} className="animate__animated animate__backInUp del">
            CLEAR
          </button>
        </div>
      </form>
    );
  }
}
