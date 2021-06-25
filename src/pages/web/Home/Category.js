import React from 'react'

function Category() {
    return (
        <>
            <section class="categories">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 p-0">
                            <div class="categories__item categories__large__item justify-content-around set-bg mb-0 vh-100"
                                data-setbg="https://static.tildacdn.com/tild3064-3832-4166-a230-323764346462/IMG_20210519_165615.jpg">
                                <div class="categories__text">
                                    <h1>Exhibition</h1>
                                    <h3 class="text-white">At the bottom</h3>
                                    <button type="submit" class="mt-3 site-btn px-5 py-3">Sign Up</button>
                                </div>
                                <div class="categories__text justify-content-between d-flex">
                                    <div class="">
                                        <div class="d-flex align-items-center mb-4"> <svg class="t828__item_icon" width="50px"
                                            height="50px" fill="none" stroke="#fff" stroke-width="5.79"
                                            stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path class="st0"
                                                d="M83.4 18h8.5v70.3H8.1V18h65.7zM25.7 27.8V8.7M44.3 64.3H25.1M74.3 64.3H55.1M44.3 45.3H25.1M74.3 45.3H55.1M72.4 27.8V8.7">
                                            </path>
                                        </svg>
                                            <div class="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                        <div class="d-flex align-items-center mb-4">
                                            <svg class="t828__item_icon" width="50px" height="50px" fill="none" stroke="#fff"
                                                stroke-width="5.79" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 100 100">
                                                <path class="st0" d="M49.4 23v33.3L66 48"></path>
                                                <circle class="st0" cx="50" cy="50" r="41"></circle>
                                            </svg>
                                            <div class="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                        <div class="d-flex align-items-center mb-4">
                                            <svg class="t828__item_icon" width="50px" height="50px" fill="none" stroke="#fff"
                                                stroke-width="5.79" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 100 100">
                                                <path class="st0"
                                                    d="M75.1 35.8C75.1 49.6 50 85.7 50 85.7s-25.1-36-25.1-49.9S36.1 10.7 50 10.7s25.1 11.2 25.1 25.1z">
                                                </path>
                                                <circle class="st0" cx="50" cy="35.1" r="9.3"></circle>
                                            </svg>
                                            <div class="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="product">
                <div class="container">
                <div class="row"><div class="col-lg-12 col-md-12"><div class="section-title"><h4>Exhibition concept</h4></div></div></div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex">
                                <div>
                                    <div class="dd tile_left">
                                        <img class="first_img" src="https://thumb.tildacdn.com/tild6133-6637-4139-b330-613430666566/-/resize/400x500/-/format/webp/IMG_2849.JPG" />
                                    </div>
                                    <div class="dd tile_right">
                                        <img class="first_img mt-md-5 mt-3 w-100" src="https://thumb.tildacdn.com/tild3837-3966-4564-b662-363533663062/-/resize/300x300/-/format/webp/IMG_2852.JPG" />
                                        <div class="bottom_image">
                                        <img class="third_img" src="https://thumb.tildacdn.com/tild6530-6237-4136-b366-346233333939/-/resize/400x300/-/format/webp/IMG_2863.JPG" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p>The <strong> At the Bottom </strong> project is a reflection of artists about the origins of contemporary art. Using the classic postmodernist technique of mixing different cultural codes, artists reveal at the junction of these codes repeating symbols that form the basis of the history of art and human culture in general.</p>
                            <p>Classical sculpture, still life, R. Mutt Duchamp - recognizable cliches, understandable even to the most enlightened spectator. However, over time, all symbols lose their meaning, turning in the semantic field simply into indistinct muttering. "Beautiful" is the scariest word for art. This means that it has ceased to be "modern". That is, understandable to a living viewer, turning into a dead piece of paper or marble. However, those who know the history of art know that the "modern" in each era can only be formed from what has already been studied and considered by previous generations. Ruslan Solopeev and Ales Kochevnik reveal this relationship, revealing what is hidden "at the bottom".</p>
                            <p>The use of images borrowed from classical art is both flirting with the viewer, calculated for the effect of recognition, and an attempt to break through the impenetrable wall of the "aesthetic", returning the "voice" to the depicted.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-11 offset-lg-1 mt-md-5">
                            <p>Ruslan writes: "The construction of the human eye is finely tuned to the perception of the surrounding world, helping a person to navigate in it. Each epoch carried out an" ontological throw-in "thereby developing a unique cultural code. The thickening of artistic symbolism forms a landscape that is ontologically perceived as richer than the everyday world. artist: to be a translator of the artistic design of being.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Category