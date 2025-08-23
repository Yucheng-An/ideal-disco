import React from "react";

function Header({user, setUser}) {
    return (
        <div className="justify-normal">
            <h1 className="font-bold text-center text-4xl ">Ideal-Discovery</h1>
            <p className="text-sm text-center">Discover the best of the best</p>
        </div>
    );
}

export default Header;
