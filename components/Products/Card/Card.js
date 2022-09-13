import React from "react";


const Card = ( price, image, description ) => {
    return (
        <CardComponent>
            <div>
                {image}
            </div>
            <div>
                {description}
            </div>
            <div>
                {price}
            </div>
        </CardComponent>
    )
}



export default Card