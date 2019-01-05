import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";

// ReactDOM is the virtual DOM we use in this application                                                                                            
const render =  Component => ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

render(App);