import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { CounterContext } from '../common/CountContext';

const Show = () => {
    // const { state } = useContext(CounterContext)
    // const [status, setStatus] =  useState(0)

    const ref = useRef(null)
    // useMemo(() => {
    //     setStatus(1)
    // }, [status, ])

    const status = useMemo(() => {
        return '1'
    }, [])


    const showName = (b) => {
       setTimeout(() => {
           if (b === ref.current) {
                console.log('ok nè!')
           } else {
               console.log('không ok')
           }
       }, 2000)
    }


    const handleClick = () => {
        const now = new Date().getTime()
        ref.current = now
        showName(now)
    }

    // showName() -> now là 1 
    // showName() -> now là 2 
    // showName() -> now là 3 
    // showName() -> now là 4 

    console.log(new Date().getTime())

    // const result = useMemo(() => showName(), [])

    // const result1 = useCallback(showName(), [])

    // console.log(result)
    // console.log(result1)
    console.log(ref.current)
    return (
        <div>
            <p>Tôi là SHow component</p>
            <p>{status}</p>
            <button onClick={handleClick}>click</button>
        </div>
    );
};

export default Show;