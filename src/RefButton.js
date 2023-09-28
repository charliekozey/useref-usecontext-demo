import React, { useContext, useRef } from 'react'
import UserContext from './context/UserContext'

function RefButton() {
    const countRef = useRef(0)
    const { num } = useContext(UserContext)

    console.log(num)

    function handleRefClick() {
        countRef.current = countRef.current + 1
        console.log(countRef)
    }

    return (
        <button onClick={handleRefClick}>
            ref count: {countRef.current}
        </button>
    )
}

export default RefButton