import React from "react"

class UsersClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            useInfo: {
                name: "test",
                location: "test"
            }
        }
        console.log("Child Contructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/rashmi21");
        const jsonData = await data.json();
        this.setState({
                useInfo: jsonData
            })
        console.log("Child componentDidMount");
    }

    componentDidUpdate(){
        console.log("Child componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Child componentWillUnmount");
    }
    

    render() {
        const {name, location} = this.state.useInfo;
        console.log("Child Render");
        return (
        <div className="user-card">
            <h2>User Name: {name} (Class)</h2>
            <h3>Location: {location}</h3>
        </div>
    )
    }
}

export default UsersClass