import React, { useContext, useRef, useReducer } from "react";
import {
  Container,
  Flex,
  Heading,
  Button,
  Input,
  Label,
  NavLink,
  Checkbox,
} from "theme-ui";
import { Router, Link } from "@reach/router";
import {IdentityContext} from '../../identity-context';


const todoReducer=()=>{
    switch(action.type){
        case 'addTodo':
            return [{done:false,value:action.payload},...state]
        case 'toggleTodoDone':
            const newState=[...state];
            newState[action.payload]={
                done:!state[action.payload].done,
                value:state[action.payload].value
            }
            return newState;
    }
}

export default()=>{
    const {user,identity:netlifyIdentity}=useContext(IdentityContext)
    cont [todo,setTodo]=useReducer(todoReducer,[])
    const inputRef=useRef();
    // const [addTodo]=


}



