import React from 'react'
import "./liWidth.css";
import Li from './Li';
function NavigationMenu ( { setItems } ) {
    const style = {
        height: "80vh",
    }
    const cursor = {
        cursor: "pointer",
    }
    const background = {
        backgroundColor: "#898898",
    }
    return (
        <div className="col-12 col-sm-12 col-md-2 carousel slide" id="nav-items" style={ style }>
            <ul className="nav flex-column nav-pills carousel-inner" style={ cursor }>

                <li className="nav-item my-1 arrow" style={ background }>
                    <button className="nav-link d-flex justify-content-center" aria-current="page" data-bs-target="#nav-items"
                        data-bs-slide="prev" data-bs-interval="false" type="button"><i
                            className="fa-solid fa-up-long text-black"></i></button>
                </li>
                <Li
                    liclassname='nav-item '
                    aclassname="all-btn nav-link text-light bg-primary carousel-item menu active"
                    aria="page"
                    onclick={ setItems }
                    id="all-btn"
                    content="All Items"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="vegetarion nav-link text-light bg-primary menu"
                    aria="page"
                    onclick={ setItems }
                    id="veg-btn"
                    content="Vegetarion"
                    name="veg"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="nonvegetarion nav-link text-light bg-primary menu"
                    aria="page"
                    onclick={ setItems }
                    id="nonveg-btn"
                    content="Non Vegetarion"
                    name="non-veg"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="cooldrinks nav-link text-light bg-primary menu"
                    aria="page"
                    onclick={ setItems }
                    id="cooldrinks-btn"
                    content="Cool Drinks"
                    name="cool-drinks"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="snacks nav-link text-light bg-primary menu"
                    aria="page"
                    onclick={ setItems }
                    id="snacks-btn"
                    content="Snacks"
                    name="snacks"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="tea nav-link text-light bg-primary menu"
                    aria="page"
                    onclick={ setItems }
                    id="tea-btn"
                    content="Tea"
                    name="tea"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="noodles nav-link text-light bg-primary menu"
                    aria="page"
                    onclick={ setItems }
                    id="noodles-btn"
                    content="Noodles"
                    name="noodles"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="dumblings nav-link text-light bg-primary menu"
                    aria="page"
                    onclick={ setItems }
                    id="dumplings-btn"
                    content="Dumplings"
                    name="dumplings"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="icecream nav-link text-light bg-primary menu"
                    aria="page"
                    onclick={ setItems }
                    id="icecream-btn"
                    content="Ice Creams"
                    name="ice-creams"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="fruit nav-link text-light bg-primary carousel-item menu"
                    aria="page"
                    onclick={ setItems }
                    id="fruit-btn"
                    content="Fruit and vegetables."
                    name="fruits"
                />

                <Li
                    liclassname='nav-item my-1 '
                    aclassname="starchy nav-link text-light bg-primary carousel-item menu"
                    aria="page"
                    onclick={ setItems }
                    id="starchy-btn"
                    content="Starchy food"
                    name="starchy"
                />
                <li className="nav-item my-1 arrow" style={ background }>
                    <button className="nav-link d-flex justify-content-center" aria-current="page" data-bs-target="#nav-items"
                        data-bs-slide="next" data-bs-interval="false" type="button"><i
                            className="fa-solid fa-down-long text-black"></i></button>
                </li>
            </ul>
        </div>
    )
}

export { NavigationMenu };