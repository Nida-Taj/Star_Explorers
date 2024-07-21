import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';



const Packages = () => {
    const history = useHistory();
    const packages = [
        {
            title: "Cape Town Adventure",
            description: "Explore Cape Town with our curated travel package, offering scenic tours, cultural experiences, and convenient accommodations for an unforgettable South African adventure.",
            description2: "Included in the package: 2-Day Safari at Garden Route Game Lodge, 2-Day Safari at Garden Route Game Lodge, and a Day safari from Cape Town " ,
            price: "$999",
            imageUrls: ["/images/CapeTown4.jpg", "/images/CapeTown2.jpg", "/images/CapeTown3.jpg", "/images/CapeTown.png"]
        },
        {
            title: "Beijing Experience",
            description: "Immerse yourself in Beijing's rich history and modern vibrancy with our curated travel package. Explore iconic landmarks like the Great Wall and Forbidden City, and experience the city's unique blend of tradition and innovation.",
            description2:"Included in the Package: Forbidden City tour, Maliandao Tea Street Experience, Great wall Day Trip and guided tour",
            price: "$899",
            imageUrls: ["/images/Beijing.jpg", "/images/Beijing2.jpg", "/images/Beijing3.jpg", "/images/Beijing4.jpg"]
        },
        {
            title: "Vienna Getaway",
            description: "Experience Vienna's imperial grandeur and artistic legacy with our curated travel package. Discover opulent palaces, renowned museums, classical music concerts, and the city's charming coffeehouse culture.",
            description2:"Included in the Package: Skip the Line Schönbrunn Palace and Gardens Guided Tour, Skip the Line Schönbrunn Palace and Gardens Guided Tour, Hallstatt Small-Group Day Trip from Vienna ",
            price: "$1099",
            imageUrls: ["/images/Vienna.jpg", "/images/Vienna2.jpg", "/images/Vienna3.jpg", "/images/Vienna4.jpg"]
        },
        {
            title: "Peru Discovery",
            description: "Embark on a journey to uncover the ancient ruins of Machu Picchu, explore the colonial beauty of Cusco, and immerse yourself in the vibrant culture of Lima. Experience Peru's rich history, breathtaking landscapes, and culinary delights on this unforgettable adventure.",
            description2:"Included in the Package: Museo Larco, Centro Historico De Cusco, Catedral de Tacna guided tours",
            price: "$799",
            imageUrls: ["/images/Peru.jpg", "/images/Peru2.jpg", "/images/Peru3.jpg", "/images/Peru 4.jpg"]
        },
        {
            title: "Turkey Escapade",
            description: "Embark on a Turkey escapade to discover Istanbul's ancient marvels and vibrant markets, explore Cappadocia's surreal landscapes, and relax on Antalya's pristine beaches. Immerse yourself in Turkey's rich history, cultural diversity, and warm hospitality on this unforgettable journey.",
            description2:"Included in the Package: Hagia Sophia Mosque tour, Ancient City of Ephesus guided tour, Sultanahmet District group trip",
            price: "$1899",
            imageUrls: ["/images/Turkey.jpg", "/images/Turkey2.jpg", "/images/Turkey3.jpg", "/images/Turkey4.jpg"]
        }
    ];

    const viewMore = (pkg) => {
        history.push({
            pathname: `/packages/${pkg.title.replace(/\s+/g, '-').toLowerCase()}`,
            state: { package: pkg }
        });
    };

    return (
        <div className="packages">
            <h1>Our Travel Packages</h1>
            <div className="package-list">
                {packages.map((pkg, index) => (
                    <div className="package-item" key={index}>
                        <img src={pkg.imageUrls[0]} alt={pkg.title} className="package-image"/>
                        <div className="package-details">
                            <h2>{pkg.title}</h2>
                            <p>{pkg.description}</p>
                            <p className="package-price">{pkg.price}</p>
                            <button className="package-button" onClick={() => viewMore(pkg)}>View More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;


