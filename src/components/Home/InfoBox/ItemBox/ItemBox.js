import React from 'react'

export const ItemBox = ({it,i,styleBox}) => {
    return (
        <div className={`item-box it-${i} ${styleBox}`}>
            <div className={`background ${it.impar}`} style={{backgroundImage:`url(${require(`../../../../assets/img/home/${it.img}`)})`}}>
            </div>
            <div className={`info pr-4 pl-4 ${it.impar} info-${i}`}>
                <h2> {it.title} </h2>
                <p>
                    {it.p}
                </p>
            </div>
        </div>
    )
}

