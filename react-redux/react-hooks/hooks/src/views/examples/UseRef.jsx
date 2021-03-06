import React, {useRef, useEffect, useState} from 'react'
// import { useEffect } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const count = useRef(0)

    useEffect( _ => {
        count.current++
    }, [value1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title='Exercício #01'/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text red">]</span>
                </div>
                <input type="text" className="input" 
                    value={value1} onChange={e => setValue1(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef
