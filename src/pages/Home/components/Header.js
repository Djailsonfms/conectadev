import React from 'react'

export default function Header(){
    return (
        <header className="header">
            <div className="toolbar">
                <div>
                    <a href='/'>Conecta Dev</a>
                </div>
                <div className="">
                    <button>Novo Post</button>
                    <span>img1</span>
                    <span>img3</span>
                </div>
            </div>
        </header>
    )
}