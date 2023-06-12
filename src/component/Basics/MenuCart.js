import React from 'react'

const MenuCart = ({ menuData }) => {
    return (
        <React.Fragment>
            <section className='main-card--cointainer'>
                {
                    menuData.map((curElem) => {
                        return (
                            <>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtitle'>{curElem.id}</span>
                                            <span className='card-author subtle'> {curElem.category}</span>
                                            <h2 className='card-title'>{curElem.name}</h2>
                                            <span className='card-description subtle'>{curElem.description} </span>
                                            <div className="card-read">Read</div>
                                            <div>
                                                <img src={curElem.image} alt="images" className="card-media" />
                                            </div>
                                            <div className='card-tag subtle'>Order Now</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </React.Fragment>
    )
}

export default MenuCart