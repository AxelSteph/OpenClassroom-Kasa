import "../styles/Banner.css";

function Banner(banner) {
    return (
        <section className="banner">
            <h1>{banner.title}</h1>
            <img src={banner.img} alt="Image de la bannière" />
        </section>
    );
}

export default Banner;