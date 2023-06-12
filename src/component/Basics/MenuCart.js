import React from 'react'

const MenuCart = ({ menuData }) => {
    console.log(menuData)
    return (
        <React.Fragment>
            {
                menuData.map((curElem) => {
                    return (
                        <>
                            <div className='card-container'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtitle'>1</span>
                                        <span className='card-author subtle'>
                                            BreakFast
                                        </span>
                                        <h2 className='card-title'>Maggie</h2>
                                        <span className='card-description subtle'>I love Maggie realy gkojn gkgnfg gdigkdf giognwgowt wgrghiof sf f9jfadf  fsdifhsdgksg sgioj </span>
                                        <div className="card-read">
                                            Read
                                        </div>
                                        <div>
                                            {/* <img src={image} alt="images" className="card-media" /> */}
                                        </div>
                                        <div className='card-tag subtle'>Order Now</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </React.Fragment>
    )
}

export default MenuCart