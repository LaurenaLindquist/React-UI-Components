import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';



const HeaderContainer = () => {
    return (
        <div className = "headercontainer">
            <ImageThumbnail/>
            <HeaderTitle/>
            <HeaderContent/>
        </div>
    );
};


/*
create a functional component, name same as JS file
export default functional component
return JSX
    1. must have only one parent div
    2. 

*/

export default HeaderContainer;
