import React from 'react'
import ImgTag from "./ImgTag";


function GalleryPage () {

    const overflow = {
        height: "80vh",
        overflow: 'auto',
    }


    return (
        <div className="col-sm-12 col-md-5 rightside-top istrow  flex-row" id="list-items" style={ overflow }>

            <div className="my-1 d-inline" id="veg">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="11"
                    name="veg1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="12"
                    name="veg4"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img onClick={ () => changeImage( this ) } className="col-3 img-thumbnail rounded" id="11" src="../../images/veg1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="12" src="../../images/veg4.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="nonveg">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="21"
                    name="nonveg1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="22"
                    name="nonveg2"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="21" src="../../images/nonveg1.jfif" />
                <img className="col-3 img-thumbnail rounded" onCnpm startlick={ () => changeImage( this ) } id="22" src="../../images/nonveg2.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="cooldrinks">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="veg"
                    name="cooldrink1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="veg2"
                    name="cooldrink2"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img className="col-3 img-thumbnail rounded" id="31" onClick={ () => changeImage( this ) } src="../../images/cooldrink1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="32" src="../../images/cooldrink2.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="snacks">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="41"
                    name="snack1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="42"
                    name="snack2"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img className="col-3 img-thumbnail rounded" id="41" onClick={ () => changeImage( this ) } src="../../images/snack1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="42" src="../../images/snack2.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="tea">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="51"
                    name="tea1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="52"
                    name="tea2"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img className="col-3 img-thumbnail rounded" id="51" onClick={ () => changeImage( this ) } src="../../images/tea1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="52" src="../../images/tea2.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="noodles">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="61"
                    name="noodle1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="62"
                    name="noodle2"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="61" src="../../images/noodle1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="62" src="../../images/noodle2.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="dumplings">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="71"
                    name="dumpling1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="72"
                    name="dumpling2"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="71" src="./../../images/dumpling1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="72" src="../../images/dumpling2.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="icecreams">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="81"
                    name="icecream1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="82"
                    name="icecream2"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="81" src="../../images/icecream1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="82" src="../../images/icecream2.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="fruits">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="91"
                    name="fruit1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="92"
                    name="fruit2"
                    onclick="{ () => changeImage( this ) }"
                />
                {/* 
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="91" src="../../images/fruit1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="92" src="../../images/fruit2.jfif" /> */}
            </div>
            <div className="my-1 d-inline" id="starchy">
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="101"
                    name="starchy1"
                    onclick="{ () => changeImage( this ) }"
                />
                <ImgTag
                    classname='col-3 img-thumbnail rounded'
                    id="102"
                    name="starchy2"
                    onclick="{ () => changeImage( this ) }"
                />

                {/* <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="101" src="../../images/starchy1.jfif" />
                <img className="col-3 img-thumbnail rounded" onClick={ () => changeImage( this ) } id="102" src="../../images/starchy2.jfif" /> */}
            </div>
        </div>
    )
}

export { GalleryPage };