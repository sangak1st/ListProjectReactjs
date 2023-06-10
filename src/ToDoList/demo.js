import React, { useState } from 'react';

const initialList = [
    { id: 1, task: 'Learn React', isComplete: false },
    { id: 2, task: 'Build an app', isComplete: false },
    { id: 3, task: 'Deploy to production', isComplete: false },
];

const Demo = () => {
    const [list, setList] = useState(initialList);
    const [editingItem, setEditingItem] = useState(null);
    const [editedTask, setEditedTask] = useState('');


    const handleEdit = (item) => {
        console.log(item)
        setEditingItem(item);
        setEditedTask(item.task);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedList = list.map((item) => {
            if (item.id === editingItem.id) {
                return { ...item, task: editedTask };
            }
            return item;
        });

        setList(updatedList);
        setEditingItem(null);
        setEditedTask('');
    };

    return (
        <div>
            <h1>My Todo List</h1>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {editingItem && editingItem.id === item.id ? (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={editedTask}
                                    onChange={(e) => setEditedTask(e.target.value)}
                                />
                                <button type="submit">Save</button>
                            </form>
                        ) : (
                            <div>
                                <span>
                                    {item.task}
                                </span>
                                <button type="button" onClick={() => handleEdit(item)}>
                                    Edit
                                </button>

                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Demo;