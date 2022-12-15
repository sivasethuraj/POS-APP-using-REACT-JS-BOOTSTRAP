import React from 'react'
import "./liWidth.css";
import Li from './Li';
function NavigationMenu () {
    const style = {
        height: "80vh",
    }
    const cursor = {
        cursor: "pointer",
    }
    const background = {
        backgroundColor: "#878885",
    }
    return (
        <div className="col-12 col-sm-12 col-md-2 carousel slide" id="nav-items" style={ style }>
            <ul className="nav flex-column nav-pills carousel-inner" style={ cursor }>

                <li className="nav-item my-1 arrow" style={ background }>
                    <a className="nav-link d-flex justify-content-center" aria-current="page" data-bs-target="#nav-items"
                        data-bs-slide="prev" data-bs-interval="false" type="button"><i
                            className="fa-solid fa-up-long text-black"></i></a>
                </li>
                <Li
                    liclassname='nav-item '
                    aclassname="all-btn nav-link text-light bg-primary carousel-item menu active"
                    aria="page"
                    onclick="changeImage(this)"
                    id="all-btn"
                    content="All Items"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="vegetarion nav-link text-light bg-primary menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="veg-btn"
                    content="Vegetarion"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="nonvegetarion nav-link text-light bg-primary menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="nonveg-btn"
                    content="Non Vegetarion"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="cooldrinks nav-link text-light bg-primary menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="cooldrinks-btn"
                    content="Cool Drinks"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="cooldrinks nav-link text-light bg-primary menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="snacks-btn"
                    content="Snacks"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="tea nav-link text-light bg-primary menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="tea-btn"
                    content="Tea"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="noodles nav-link text-light bg-primary menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="noodles-btn"
                    content="Noodles"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="dumblings nav-link text-light bg-primary menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="dumplings-btn"
                    content="Dumplings"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="icecream nav-link text-light bg-primary menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="icecream-btn"
                    content="Ice Creams"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="fruit nav-link text-light bg-primary carousel-item menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="fruit-btn"
                    content="Fruit and vegetables."
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="starchy nav-link text-light bg-primary carousel-item menu"
                    aria="page"
                    onclick="changeImage(this)"
                    id="starchy-btn"
                    content="Starchy food"
                />
                <li className="nav-item my-1 arrow" style={ background }>
                    <a className="nav-link d-flex justify-content-center" aria-current="page" data-bs-target="#nav-items"
                        data-bs-slide="next" data-bs-interval="false" type="button"><i
                            className="fa-solid fa-down-long text-black"></i></a>
                </li>
            </ul>
        </div>
    )
}

export { NavigationMenu };