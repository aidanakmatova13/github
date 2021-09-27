import React from 'react';
import Header from "../Header";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="p-4">
                {children}
            </div>
        </>
    );
};


export default Layout;