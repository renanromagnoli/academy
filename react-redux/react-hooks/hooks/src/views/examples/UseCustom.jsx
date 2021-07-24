import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                    onClick={_ => inc()}>+1</button>
                    <button className="btn"
                    onClick={_ => dec()}>-1</button>
                </div>
            </div>
        </div>
    )
}

export default UseRef
