import ApnaReact from "./apna-react";

class Counter extends ApnaReact.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            });
        }, 1000);
    }

    ComponentDidMount() {
        console.log("Component Mounted");
    }

    render() {
        return <p>Count: {this.state.count}</p>;
    }
}

export default Counter;
