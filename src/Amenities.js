import React, { useState } from 'react';
import './Amenities.css';
import { useTranslation } from 'react-i18next';


const LocalAmenities = () => {
  const [filter, setFilter] = useState(''); 
  const { t } = useTranslation();


  const amenities = {
    hotels: [
      {
        img: '/images/Hotel1.jpg',
        name: 'Hilton Hotel',
        description: t('hiltondesc'),
        package: t('hiltonpack'),
  
      },
      {
        img: '/images/Hotel2.jpg',
        name: 'Embassy Suites',
        description: t('embassydesc'),
        package: t('embassypack'),

      },
      {
        img: '/images/Hotel3.jpg',
        name: 'Hyatt',
        description: t('hyattdesc'),
        package: t('hyattpack'),

      },
      {
        img: '/images/Hotel4.jpg',
        name: 'Marriott',
        description: t('marriottdesc'),
        package: t('marriottpack'),

      },
      {
        img: '/images/Hotel5.jpg',
        name: 'Renaissance Hotels',
        description: t('renadesc'),
        package: t('renapack'),

      },

    ],
    vacationRental: [
      {
        img: '/images/VacayRental.jpg',
        name: 'SakSak Rentals',
        description: t('saksakdesc'),
        package: t('saksakpack'),
      },
      {
        img: '/images/VacayRental2.jpg',
        name: 'Mimi Vacation homes',
        description: t('mimidesc'),
        package: t('mimipack'),
      },
      {
        img: '/images/VacayRental3.jpg',
        name: 'Air CnD',
        description: t('airdesc'),
        package: t('airpack'),
      },
      {
        img: '/images/VacayRental4.jpg',
        name: 'Mistiks',
        description: t('mistdesc'),
        package: t('mistpack'),
      },
      {
        img: '/images/VacayRental5.jpg',
        name: 'Cozy Co',
        description:  t('cozydesc'),
        package:  t('cozypack'),
      },

    ],
    bakery: [
      {
        img: '/images/Bakery.jpg',
        name: 'Golden Crust Bakery',
        description: t('golddesc'), 
        package: t('goldpack'),
      },
      {
        img: '/images/Bakery2.jpg',
        name: 'Refined Delights',
        description: t('refdesc'),
        package: t('refpack'),
      },
      {
        img: '/images/Bakery3.jpg',
        name: 'The Artisan Oven',
        description:t('ovendesc'),
        package: t('ovenpack'),
      },
      {
        img: '/images/Bakery4.jpg',
        name: 'Elegant Crumbs',
        description:  t('crumbdesc'),
        package: t('crumbpack'),
      },
      {
        img: '/images/Bakery5.jpg',
        name: 'Culinary Crave Bakery',
        description: t('cravedesc'),
        package: t('cravepack'),
      },

    ],
    bar: [
      {
        img: '/images/Bar.jpg',
        name: 'The Velvet Lounge',
        description: t('velvetdesc'),
        package: t('velvetpack'),
      },
      {
        img: '/images/Bar2.jpg',
        name: 'Sapphire Bar & Lounge',
        description: t('loungedesc'),
        package: t('loungepack'),
      },
      {
        img: '/images/Bar3.jpg',
        name: 'The Aristocrat’s Retreat',
        description: t('retreatdesc') ,
        package: t('retreatpack'),
      },
      {
        img: '/images/Bar4.jpg',
        name: 'Eclipse Bar & Spirits',
        description: t('spiritsdesc')  ,
        package: t('spiritspack') ,
      },
      {
        img: '/images/Bar5.jpg',
        name: 'The Opal Lounge',
        description: t('opaldesc'),
        package: t('opalpack'),
      },

    ],
    cafe: [
      {
        img: '/images/Cafe.jpg',
        name: 'Morning Reverie Café',
        description: t('morndesc'),
        package: t('mornpack'),
      },
      {
        img: '/images/Cafe2.jpg',
        name: 'Whispering Willow Café',
        description: t('willowdesc') ,
        package: t('willowpack'),
      },
      {
        img: '/images/Cafe3.jpg',
        name: 'Velvet Roost Café',
        description: t('roostdesc') ,
        package: t('roostpack') ,
      },
      {
        img: '/images/Cafe4.jpg',
        name: 'Luminous Cup Café',
        description: t('lumidesc') ,
        package: t('lumipack') ,
      },
      {
        img: '/images/Cafe5.jpg',
        name: 'Horizon Café',
        description: t('horidesc') ,
        package: t('horipack') ,
      },

    ],
    grocery: [
      {
        img: '/images/Grocery.jpg',
        name: 'EcoMart',
        description: t('ecodesc') ,
        package: t('ecopack') ,
      },
      {
        img: '/images/Grocery2.jpg',
        name: 'CityGrocer',
        description: t('grocerdesc') ,
        package: t('grocerpack') ,
      },
      {
        img: '/images/Grocery3.jpg',
        name: 'FreshPick Grocery',
        description: t('freshdesc') ,
        package: t('freshpack') ,
      },
      {
        img: '/images/Grocery4.jpg',
        name: 'MarketPlace',
        description: t('marketdesc') ,
        package: t('marketpack') ,
      },
      {
        img: '/images/Grocery5.jpg',
        name: 'UrbanBite',
        description: t('urbandesc') ,
        package: t('urbanpack') ,
      },

    ],
    homeStay: [
      {
        img: '/images/HomeStay.jpg',
        name: "Lori's Home",
        description: t('loridesc') ,
        package: t('loripack') ,
      },

      {
        img: '/images/HomeStay2.jpg',
        name: "Burt's Home",
        description: t('burtdesc') ,
        package: t('burtpack') ,
      },
      {
        img: '/images/HomeStay3.jpg',
        name: "Claire's Home",
        description: t('clairedesc') ,
        package: t('clairepack') ,
      },
      {
        img: '/images/HomeStay4.jpg',
        name: "Suzy's Home",
        description: t('suzydesc') ,
        package: t('suzypack') ,
      },
      {
        img: '/images/HomeStay5.jpg',
        name: "Bobaloo's Home",
        description: t('bobdesc') ,
        package: t('bobpack') ,
      },

    ],
    hostel: [
      {
        img: '/images/Hostel.jpg',
        name: 'Cheapy Hostels',
        description: t('cheapydesc') ,
        package: t('cheapypack') ,
      },
      {
        img: '/images/Hostel2.jpg',
        name: 'Ember',
        description: t('emberdesc') ,
        package: t('emberpack') ,
      },
      {
        img: '/images/Hostel3.jpg',
        name: 'Selina',
        description: t('selinadesc') ,
        package: t('selinapack') ,
      },

    ],
    market: [
      {
        img: '/images/LocalMarket.jpg',
        name: "Fresh Harvest Market",
        description: t('harvestdesc') ,
        package: t('harvestpack') ,
      },

      {
        img: '/images/LocalMarket2.jpg',
        name: 'City Central Market:',
        description: t('centraldesc') ,
        package: t('centralpack') ,
      },
      {
        img: '/images/LocalMarket3.jpg',
        name: 'Greenfield Market',
        description: t('greendesc') ,
        package: t('greenpack') ,
      },
      {
        img: '/images/LocalMarket4.jpg',
        name: 'Sunset Plaza Market',
        description: t('sunsetdesc') ,
        package: t('sunsetpack') ,
      },

    ],
    mall: [
      {
        img: '/images/mall.jpg',
        name: 'Luxe Haven',
        description: t('luxedesc') ,
        package: t('luxepack') ,
      },
      {
        img: '/images/mall2.jpg',
        name: 'Metro Heights',
        description: t('metrodesc') ,
        package: t('metropack') ,
      },
      {
        img: '/images/mall3.jpg',
        name: 'Eclipse Plaza',
        description: t('eclipsedesc') ,
        package: t('eclipsepack') ,
      },
      {
        img: '/images/mall4.jpg',
        name: 'The Spectrum',
        description: t('spectrumdesc') ,
        package: t('spectrumpack') ,
      },
      {
        img: '/images/mall5.jpg',
        name: 'Harmony Center',
        description: t('harmonydesc') ,
        package: t('harmonypack') ,
      },

    ],
    souvenir: [
      {
        img: '/images/Souvenir.jpg',
        name: 'Beijing Treasures',
        description: t('beijingdesc') ,
        package: t('beijingpack') ,
      },
      {
        img: '/images/Souvenir2.jpg',
        name: 'Cape Town Keepsakes',
        description: t('capedesc') ,
        package: t('capepack') ,
      },
      {
        img: '/images/Souvenir3.jpg',
        name: "Vienna's Essence",
        description: t('viennadesc') ,
        package: t('viennapack') ,
      },
      {
        img: '/images/Souvenir4.jpg',
        name: 'Turkish Delight Emporium',
        description: t('turkdesc') ,
        package: t('turkpack') ,
      },
      {
        img: '/images/Souvenir5.jpg',
        name: 'Peruvian Essence',
        description: t('perudesc') ,
        package: t('perupack') ,
      },

    ],
    restaurants: [
      {
        img: '/images/Restaurant.jpg',
        name: 'Elysian Table',
        description: t('elysiandesc') ,
        package: t('elysianpack') ,
      },
      {
        img: '/images/Restaurant2.jpg',
        name: 'Opulent Harvest',
        description: t('opulentdesc') ,
        package: t('opulentpack') ,
      },
      {
        img: '/images/Restaurant3.jpg',
        name: 'Luxe Bistro',
        description: t('bistrodesc') ,
        package: t('bistropack') ,
      },
      {
        img: '/images/Restaurant4.jpg',
        name: 'Celestial Cuisine',
        description: t('celestialdesc') ,
        package: t('celestialpack') ,
      },
      {
        img: '/images/Restaurant5.jpg',
        name: 'Grand Harvest',
        description: t('granddesc') ,
        package: t('grandpack') ,
      },

    ],
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getCategoryAmenities = (category) => {
    if (category === 'restStops') {
      return [...amenities.hotels, ...amenities.vacationRental, ...amenities.hostel, ...amenities.homeStay];
    } else if (category === 'food') {
      return [...amenities.restaurants, ...amenities.bakery, ...amenities.cafe, ...amenities.bar];
    } else if (category === 'shopping') {
      return [...amenities.market, ...amenities.grocery, ...amenities.mall, ...amenities.souvenir];
    }
    return [];
  };

  const displayedAmenities = filter === 'restStops' || filter === 'food' || filter === 'shopping'
    ? getCategoryAmenities(filter)
    : filter
      ? amenities[filter]
      : Object.values(amenities).flat();

  /*const displayedAmenities = filter ? amenities[filter] : Object.values(amenities).flat();*/

  return (
    <div className="local-amenities">
      <div className="title-and-filters">
        <h1>Amenities</h1>
        <div className="filters">
          <div className="filter-group">
            <h3>Rest Stops</h3>
            <label>
              <input
                type="radio"
                value="restStops"
                checked={filter === 'restStops'}
                onChange={handleFilterChange}
              />
              Show All
            </label>
            <label>
              <input
                type="radio"
                value="hotels"
                checked={filter === 'hotels'}
                onChange={handleFilterChange}
              />
              Hotels
            </label>
            <label>
              <input
                type="radio"
                value="vacationRental"
                checked={filter === 'vacationRental'}
                onChange={handleFilterChange}
              />
              Vacation Rental
            </label>
            <label>
              <input
                type="radio"
                value="hostel"
                checked={filter === 'hostel'}
                onChange={handleFilterChange}
              />
              Hostel
            </label>
            <label>
              <input
                type="radio"
                value="homeStay"
                checked={filter === 'homeStay'}
                onChange={handleFilterChange}
              />
              Home Stay
            </label>
          </div>

          <div className="filter-group">
            <h3>Shopping</h3>
            <label>
              <input
                type="radio"
                value="shopping"
                checked={filter === 'shopping'}
                onChange={handleFilterChange}
              />
              Show All
            </label>
            <label>
              <input
                type="radio"
                value="market"
                checked={filter === 'market'}
                onChange={handleFilterChange}
              />
              Market
            </label>
            <label>
              <input
                type="radio"
                value="grocery"
                checked={filter === 'grocery'}
                onChange={handleFilterChange}
              />
              Grocery
            </label>
            <label>
              <input
                type="radio"
                value="mall"
                checked={filter === 'mall'}
                onChange={handleFilterChange}
              />
              Mall
            </label>
            <label>
              <input
                type="radio"
                value="souvenir"
                checked={filter === 'souvenir'}
                onChange={handleFilterChange}
              />
              Souvenir
            </label>
            
          </div>
          

          <div className="filter-group">
            <h3>Food</h3>
            <label>
              <input
                type="radio"
                value="food"
                checked={filter === 'food'}
                onChange={handleFilterChange}
              />
              Show All
            </label>
            <label>
              <input
                type="radio"
                value="restaurants"
                checked={filter === 'restaurants'}
                onChange={handleFilterChange}
              />
              Restaurants
            </label>
            <label>
              <input
                type="radio"
                value="bakery"
                checked={filter === 'bakery'}
                onChange={handleFilterChange}
              />
              Bakery
            </label>
            <label>
              <input
                type="radio"
                value="cafe"
                checked={filter === 'cafe'}
                onChange={handleFilterChange}
              />
              Cafe
            </label>
            <label>
              <input
                type="radio"
                value="bar"
                checked={filter === 'bar'}
                onChange={handleFilterChange}
              />
              Bar
            </label>
          </div>
        </div>
      </div>

      <div className="amenities-display">
        {displayedAmenities.map((amenity, index) => (
          <div key={index} className="amenity-card">
            <img src={amenity.img} alt={amenity.name} className="amenity-image" />
            <div className="amenity-details">
              <h4>{amenity.name}</h4>
              <p className="package">{amenity.package}</p>
              <p className="description">{amenity.description}</p>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocalAmenities;

