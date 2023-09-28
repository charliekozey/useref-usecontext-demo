import React, { useState } from 'react'

function StateButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(value => value + 1)
    }

    return (
        <button onClick={handleClick}>
            state count: {count}
        </button>
    )
}

export default StateButton