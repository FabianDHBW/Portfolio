import './day.css'

import React, { useEffect, useState } from "react";

const DayView = ({ myDictionary, updateDictionary, myKey }) => {

    const [todoList, setTodoList] = useState(myDictionary[myKey]);

    const addEntry = () => {
        const newlist = {
            ...todoList,
            "": false
        }
        const updDict = {
            ...myDictionary,
            [myKey]: newlist
        }
        updateDictionary(updDict)
        setTodoList(newlist)

    }

    const handleCheckboxChange = (event) => {
        const key = event.target.id;
        const value = event.target.checked;

        const newDict = { ...todoList };
        newDict[key] = value;

        const updDict = {
            ...myDictionary,
            [myKey]: newDict
        }
        updateDictionary(updDict)
        setTodoList(newDict)
    };

    const deleteEntry = (event) => {
        const key = event.target.id;
        const newDict = { ...todoList };
        delete newDict[key];

        const updDict = {
            ...myDictionary,
            [myKey]: newDict
        }
        updateDictionary(updDict)
        setTodoList(newDict)
    }

    const inputChange = (event) => {
        const key = event.target.id;
        const newKey = event.target.value

        for (const item in myDictionary[myKey]) {
            if (item === newKey) {
                alert("To-Do already exists!");
            }
            else {
                const newDict = { ...todoList, [newKey]: todoList[key] }
                delete newDict[key]
                const updDict = {
                    ...myDictionary,
                    [myKey]: newDict
                }
                updateDictionary(updDict)
                setTodoList(newDict)
            }
        }
    }

    return (
        <div class='container'>
            {Object.entries(todoList).map(([todo, checked]) => (
                <div class="todo-div" key={todo}>
                    <input id={todo} type='checkbox' defaultChecked={checked} onClick={handleCheckboxChange}></input>
                    <input id={todo} type='text' defaultValue={todo} onBlur={inputChange} className={checked ? 'strikethrough' : ''}></input>
                    <button id={todo} class="delete-button" onClick={deleteEntry}>X</button>
                </div>
            ))}
            <div class="add-button-div">
                <button className="add-button" onClick={addEntry}>+</button>
            </div>
        </div>
    );
}
export default DayView;