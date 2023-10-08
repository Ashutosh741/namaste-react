import React from 'react'


class UserClass extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <>
        <h1>Name : {this.props.name} </h1>
        <h2>Age : {this.props.age}</h2>
        <h2>Qualification : BTECH</h2>
        <h2>Institute : KCC Insitute of Technology and Management</h2>

        </>
    }
}


export default UserClass