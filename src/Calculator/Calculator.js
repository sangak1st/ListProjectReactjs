import React, { useState } from 'react';
import './Calculator.css'

export const Calculator = () => {

    const [result, setResult] = useState('');

    const handleClick = (e) => {

        e.preventDefault();
        let input = result.concat(e.target.value);
        setResult(input);
    }

    const handleDelete = () => {
        let Delete = result.slice(0, 1);
        setResult(Delete)
    }

    const handleResult = () => {
        try {
            if (result !== '^' || result !== '%') {
                let Result = eval(result)
                setResult(Result.toString())
            }
        }
        catch (err) {
            setResult(`Click 'AC' and Re-Enter`)
        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleResult()
        }
    }

    return (
        <div className='calculator '>
            <div className='d-flex justify-content-center align-items-enter w-50'>
                <input
                    type='text'
                    value={result}
                    className='display w-100'
                    onChange={(e) => setResult(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
            </div>
            <div className='button'>
                <button
                    className='btn btn-outline-warning w-50'
                    onClick={() => { setResult('') }}
                >
                    AC
                </button>
                <button
                    className='btn btn-outline-warning w-25'
                    value='^'
                    onClick={(e) => { handleDelete(e) }}
                >
                    Delete
                </button>
                <button
                    className='btn btn-outline-warning w-25'
                    value='/'
                    onClick={(e) => { handleClick(e) }}
                >
                    /
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='7'
                    onClick={(e) => { handleClick(e) }}
                >
                    7
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='8'
                    onClick={(e) => { handleClick(e) }}
                >
                    8
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='9'
                    onClick={(e) => { handleClick(e) }}
                >
                    9
                </button>
                <button
                    className='btn btn-outline-warning w-25'
                    value='*'
                    onClick={(e) => { handleClick(e) }}
                >
                    x
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='4'
                    onClick={(e) => { handleClick(e) }}
                >
                    4
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='5'
                    onClick={(e) => { handleClick(e) }}
                >
                    5
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='6'
                    onClick={(e) => { handleClick(e) }}
                >
                    6
                </button>
                <button
                    className='btn btn-outline-warning w-25'
                    value='-'
                    onClick={(e) => { handleClick(e) }}
                >
                    -
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='1'
                    onClick={(e) => { handleClick(e) }}
                >
                    1
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='2'
                    onClick={(e) => { handleClick(e) }}
                >
                    2
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='3'
                    onClick={(e) => { handleClick(e) }}
                >
                    3
                </button>
                <button
                    className='btn btn-outline-warning w-25'
                    value='+'
                    onClick={(e) => { handleClick(e) }}
                >
                    +
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='0'
                    onClick={(e) => { handleClick(e) }}
                >
                    0
                </button>
                <button
                    className='btn btn-outline-secondary w-25'
                    value='.'
                    onClick={(e) => { handleClick(e) }}
                >
                    .
                </button>
                <button
                    className='btn btn-outline-warning w-50'
                    onClick={() => handleResult()}
                >
                    =
                </button>
            </div>
        </div>
    )
}
