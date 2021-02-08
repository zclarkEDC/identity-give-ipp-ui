import React from 'react';

const LineItem = ({
        address,
        city,
        state,
        postalCode,
        className,
        phone,
        ...props
      }) => {
    return (
        <p>{address}<br />{city}, {state} {postalCode}<br /><a href="url">{phone}</a></p>
       
        );
}
export default LineItem;