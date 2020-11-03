import React,{useEffect} from "react";
import ReactDom from "react-dom";
import {_num} from "./src/lodash";

console.log(_num)

class App extends React.Component {
    render() {
        return (<div>Hello!</div>);
    }
}

const Demo=()=>{
    useEffect(()=>{
        console.log('useEffect')
    })
    return <div>Demo</div>
}

ReactDom.render(<Demo/>, document.getElementById("root"));