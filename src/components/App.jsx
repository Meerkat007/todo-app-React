import React from 'react';
import ToDoList from './ToDoList';

export default class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>TODO APP lol</h1>
                    <ToDoList />
                </div>
            )
        }
}