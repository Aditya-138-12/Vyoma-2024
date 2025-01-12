import "./Gallery.css"
import Background from "../../UI/Background"
import React from 'react'

const Gallery = () => {
    return (
        <section className="gallerySection">
            <Background className="galleryBg">
                <h2 className="galleryHeading">Gallery</h2>
                <div class="row">
                    <div class="column">
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/1.jpeg"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/2.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/3.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/4.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/5.jpeg?raw=true"
                                alt="" class="gallery-img" />

                        </div>
                    </div>
                    <div class="column">
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/6.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/7.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/8.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/9.jpeg?raw=true"
                                alt="" class="gallery-img" />

                        </div>
                    </div>
                    <div class="column">
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/10.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/11.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/12.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/13.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                    </div>
                    <div class="column">
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/15.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/16.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/17.jpeg?raw=true"
                                alt="" class="gallery-img" />
                        </div>
                        <div class="img-wrapper">
                            <img src="/assets/GalleryImages/15.jpeg?raw=true"
                                alt="" class="gallery-img" />

                        </div>
                    </div>
                </div>
            </Background>
        </section>
    )
}

export default Gallery;