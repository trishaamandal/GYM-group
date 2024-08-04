

const Gallery = () => {
    const gallery = [
        "/src/assets/images/img1.jpg",
        "/src/assets/images/img2.jpg",
        "/src/assets/images/img3.jpg",
        "/src/assets/images/img4.jpg",
        "/src/assets/images/img5.jpg",
        "/src/assets/images/img6.jpg",
        "/src/assets/images/img7.jpg",
        "/src/assets/images/img8.jpg",
    ];
    return (
        <section className="gallery">
            <h1>BETTER BEATS BEST</h1>
            <div className="images">
                <div>
                    {gallery.slice(0, 3).map((element, index) => (
                        <img key={index} src={element} alt="galleryImage" />
                    ))}
                </div>
                <div>
                    {gallery.slice(3, 6).map((element, index) => (
                        <img key={index} src={element} alt="galleryImage" />
                    ))}
                </div>
                <div>
                    {gallery.slice(6, 9).map((element, index) => (
                        <img key={index} src={element} alt="galleryImage" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;