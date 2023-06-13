import React, { useState } from 'react'

export const Todolist = () => {

    const [todos, setTodos] = useState('');

    const [listToDo, setListToDo] = useState([
        {
            id: 1,
            todo: 'Playing game',

        },
        {
            id: 2,
            todo: 'Coding',

        }
    ]);
    const [editingItem, setEditingItem] = useState('');
    const [editTodo, setEditTodo] = useState('');


    const handleAddTodo = () => {
        if (!todos) {
            alert('Enter todo')
        }
        else {
            let newTodo = {
                id: Math.floor(Math.random() * 10000 + 1),
                todo: todos
            }
            setListToDo(
                [...listToDo, newTodo]
            )
        }

        setTodos('')
    }

    const handleDelete = (id) => {
        console.log("delete")
        let deleteTodo = listToDo.filter(item => item.id !== id);
        setListToDo(deleteTodo)
    }

    const handleKeyAdd = e => {
        if (e.keyCode === 13) {
            handleAddTodo();
        }
    };

    const handleEdit = (item) => {
        console.log(item)
        setEditingItem(item)
        setEditTodo(item.todo);

    }

    const handleSave = () => {
        const updateTodo = listToDo.map(item => {
            if (editingItem.id === item.id) {
                return { ...item, todo: editTodo }
            }
            return item;
        })
        setListToDo(updateTodo);
        setEditingItem(null);
        setEditTodo('')
    }

    const handleKeyEdit = e => {
        if (e.keyCode === 13) {
            handleSave();
        }
    };

    return (
        <div className='todolist'>
            <h1 className='mt-3'>ToDoList</h1>

            <div className='d-flex justify-content-center mt-4'>
                <div className="input-group mb-3 w-50">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Todo"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={todos}
                        onChange={(e) => setTodos(e.target.value)}
                        onKeyDown={(e) => handleKeyAdd(e)}
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="submit"
                        id="button-addon2"
                        onClick={() => { handleAddTodo() }}

                    >
                        <i className="fa fa-plus me-2" aria-hidden="true">&nbsp;&nbsp;AddTodo</i>
                    </button>
                </div>
            </div>

            <div className='me-5 ms-5 mt-3'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Todo</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {listToDo.map((item, index) => {
                        return (
                            <tbody key={item.id}>

                                {
                                    editingItem && editingItem.id === item.id ?
                                        (
                                            <tr>
                                                <td className='col-8'>
                                                    {index + 1} - <input
                                                        type='text'
                                                        value={editTodo}
                                                        onChange={(e) => setEditTodo(e.target.value)}
                                                        onKeyDown={(e) => handleKeyEdit(e)}
                                                        className='border border-warning-subtle rounded-3 p-2'
                                                        style={{ outline: 'none' }}
                                                    />
                                                </td>
                                                <td className='col-4'>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-warning me-3"
                                                        onClick={() => handleSave()}
                                                    >
                                                        <i className="fa fa-floppy-o" aria-hidden="true">
                                                            &nbsp;Save
                                                        </i>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <i className="fa fa-trash" aria-hidden="true">&nbsp;Delete</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <td className='col-8'>{index + 1} - {item.todo}</td>
                                                <td className='col-4'>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-warning me-3"
                                                        onClick={() => handleEdit(item)}
                                                    >
                                                        <i className="fa fa-pencil-square-o me-2" aria-hidden="true">
                                                            &nbsp;Edit
                                                        </i>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <i className="fa fa-trash" aria-hidden="true">&nbsp;Delete</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )

                                }

                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}
