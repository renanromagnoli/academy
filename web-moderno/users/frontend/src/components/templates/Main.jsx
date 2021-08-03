import './Main.css'
import React from 'react'

import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-e mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
