import { Component } from "react";
//data = API
class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      avatar:
        "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
      name: "Rick and Morty",
      data: {},
      id: 1,
    };
  }

  request = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${this.state.id}`
    );
    const result = await response.json();
    this.setState({ data: result });
  };

  componentDidMount() {
    this.request();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.request();
    }
  }

  incrementId = (arg) => {
    if (arg === "prev") {
      this.setState((prevState) => ({ id: prevState.id - 1 }));
    } else if (arg === "next") {
      this.setState((prevState) => ({ id: prevState.id + 1 }));
    }
  };

  render() {
    return (
      <div>
        <img
          src={this.state.data.image}
          alt={this.state.data.name}
          style={{ width: "200px", height: "200px" }}
        />
        <p>Name: {this.state.data.name}</p>
        <div>
          <button onClick={() => this.incrementId("prev")}>Prev</button>
          <button onClick={() => this.incrementId("next")}>Next</button>
        </div>
      </div>
    );
  }
}

export default LifeCycle;
