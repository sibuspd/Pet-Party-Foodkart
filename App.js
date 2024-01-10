import React from "react";
import ReactDOM from "react-dom/client";
/**
 * HEADER 
 * - Logo
 * - Nav Items
 * BODY  
 * - Search
 * - Resturant Container
 *      - Resturant Card
 *         - Img
 *         - Name of Res, Star Rating, Cuisines, Delivery Time
 * FOOTER
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
const Header = () => {
    return (
        <div className="Header">
            <div className="Logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    ) 
}

// Bulding a Restro card component - Modular approach
const RestaurantCard = (props) => {
    const {resData} = props; 
    const {name,costForTwo,cuisines,avgRating,cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return(
        <div className="res-card" style={{ backgroundColor: "lightgray"}}>
            <img className="res-logo" 
            alt="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(" | ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const resList= [
  {
    "info": {
      "id": "280903",
      "name": "Panthanivas Sambalpur",
      "cloudinaryImageId": "xhb88ukye6diqzl61gzi",
      "locality": "Hans Nagar",
      "areaName": "Danipali",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "avgRating": 4.4,
      "parentId": "154788",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 16:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/panthanivas-sambalpur-hans-nagar-danipali-sambalpur-280903",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "286181",
      "name": "Sangram Hotel",
      "cloudinaryImageId": "hhl9z8sultqaclbizk1z",
      "locality": "Gm college road",
      "areaName": "Sambalpur Locality",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 4.2,
      "parentId": "177242",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 15:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sangram-hotel-gm-college-road-sambalpur-locality-sambalpur-286181",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "225692",
      "name": "Delisha",
      "cloudinaryImageId": "wyidzhyxj32dwfwgayhl",
      "locality": "Samleipadar \n",
      "areaName": "Sakhipara",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Chinese"
      ],
      "avgRating": 4.3,
      "parentId": "70615",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 15:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/delisha-samleipadar-sakhipara-sambalpur-225692",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "224743",
      "name": "Patra's Cafe",
      "cloudinaryImageId": "hossbscj4xvhw3kdj6k1",
      "locality": "Shyam Nagar",
      "areaName": "Budharaja",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Oriya",
        "Thalis"
      ],
      "avgRating": 3.8,
      "parentId": "156463",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 16:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/patras-cafe-shyam-nagar-budharaja-sambalpur-224743",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "471823",
      "name": "Swagat Hotel",
      "cloudinaryImageId": "vdu7na2s6lhpbqgwggld",
      "locality": "VSS Marg",
      "areaName": "Sakhipara",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Seafood",
        "Biryani",
        "Chinese",
        "Thalis"
      ],
      "avgRating": 4.1,
      "parentId": "198854",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 15:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/swagat-hotel-vss-marg-sakhipara-sambalpur-471823",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "225155",
      "name": "Bayleaf",
      "cloudinaryImageId": "inuotk86oxfo1m3hlyvw",
      "locality": "Budharaja ",
      "areaName": "Danipali",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "Tandoor",
        "Mughlai",
        "South Indian",
        "Indian"
      ],
      "avgRating": 4.3,
      "parentId": "1305",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 15:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bayleaf-budharaja-danipali-sambalpur-225155",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "224897",
      "name": "Go Cool",
      "cloudinaryImageId": "clhqkimv4gai7rvlzrj0",
      "locality": "Sahyog Nagar \n",
      "areaName": "Danipali",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Pizzas",
        "American",
        "Italian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "87834",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/go-cool-sahyog-nagar-danipali-sambalpur-224897",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "408068",
      "name": "Piplani Sweets",
      "cloudinaryImageId": "o92swarme0r4kx9ryr0w",
      "locality": "Gole Bazar",
      "areaName": "Danipali",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Sweets",
        "Desserts",
        "South Indian"
      ],
      "avgRating": 4.1,
      "parentId": "158077",
      "avgRatingString": "4.1",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 20:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/piplani-sweets-gole-bazar-danipali-sambalpur-408068",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "225161",
      "name": "Lazeezo",
      "cloudinaryImageId": "iyqgupvsu3x2watkju5o",
      "locality": "Sansadak Road",
      "areaName": "Danipali",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Fast Food",
        "Chinese"
      ],
      "avgRating": 4,
      "parentId": "7445",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "38 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 22:20:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lazeezo-sansadak-road-danipali-sambalpur-225161",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "296411",
      "name": "Kedia's Restaurant",
      "cloudinaryImageId": "vxcncbvyghot0fx7hucr",
      "locality": "Budharaja",
      "areaName": "Budharaja",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Seafood",
        "Chinese",
        "Biryani",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "116289",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 15:15:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kedias-restaurant-budharaja-sambalpur-296411",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "224741",
      "name": "Desi Tadka",
      "cloudinaryImageId": "pmejv57ljcdzi9ajlt6p",
      "locality": "Budharaja Road",
      "areaName": "Danipali",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Biryani",
        "North Indian"
      ],
      "avgRating": 4.2,
      "parentId": "393990",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 15:15:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/desi-tadka-budharaja-road-danipali-sambalpur-224741",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "244377",
      "name": "Bellyful Restaurant",
      "cloudinaryImageId": "owovuw2y5zyz9wdgc3yv",
      "locality": "Danipali",
      "areaName": "Sambalpur Locality",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Biryani",
        "Chinese"
      ],
      "avgRating": 4.2,
      "parentId": "43258",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "41 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bellyful-restaurant-danipali-sambalpur-locality-sambalpur-244377",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "386992",
      "name": "Dosa Plaza",
      "cloudinaryImageId": "uqnsnwwygsfxcggi9zhl",
      "locality": "City Centre mall",
      "areaName": "Danipali",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Chaat"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "1398",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dosa-plaza-city-centre-mall-danipali-sambalpur-386992",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "310634",
      "name": "Trupti Restaurant",
      "cloudinaryImageId": "rwkd1qvlxgz3otgl3dxv",
      "locality": "Danipali",
      "areaName": "Budharaja",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "American",
        "Biryani",
        "Thalis"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "218116",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 15:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/trupti-restaurant-danipali-budharaja-sambalpur-310634",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "595060",
      "name": "The Food Central",
      "cloudinaryImageId": "ws3uudusvtsbfwkgueve",
      "locality": "Vss Marg",
      "areaName": "Sakhipara",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Street Food",
        "South Indian",
        "Chinese",
        "Biryani"
      ],
      "avgRating": 4.4,
      "parentId": "208349",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 0.2,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "0.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-food-central-vss-marg-sakhipara-sambalpur-595060",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "224894",
      "name": "Fresh Bake",
      "cloudinaryImageId": "guafiktkzngmbylahjui",
      "locality": "Shyam Arcade",
      "areaName": "Danipali",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Bakery",
        "Pizzas",
        "Snacks"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "83564",
      "avgRatingString": "4.0",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "34 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/fresh-bake-shyam-arcade-danipali-sambalpur-224894",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "472311",
      "name": "New Delhi Sweets",
      "cloudinaryImageId": "q29q2e1afsp97whxhxpr",
      "locality": "Danipali",
      "areaName": "Modipada",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Sweets",
        "Snacks",
        "Desserts",
        "North Indian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "8665",
      "avgRatingString": "4.5",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/new-delhi-sweets-danipali-modipada-sambalpur-472311",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "712083",
      "name": "Biggies Burger",
      "cloudinaryImageId": "49d60c8b2a966219918f28a6ffe15d05",
      "locality": "Budharaja Main Road",
      "areaName": "Danipali",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Fast Food",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "45723",
      "avgRatingString": "4.2",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/biggies-burger-budharaja-main-road-danipali-sambalpur-712083",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "227819",
      "name": "Amazing Bakers ( Gole Bazar )",
      "cloudinaryImageId": "aviwb2ze5xmozt5dglms",
      "locality": "GOLE BAZAR",
      "areaName": "Gole Bazar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Italian",
        "Bakery",
        "American",
        "Pizzas",
        "Salads"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "240725",
      "avgRatingString": "4.5",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 21:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/amazing-bakers-gole-bazar-gole-bazar-sambalpur-227819",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "546643",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Ainthapali Chowk",
      "areaName": "Danipali",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.3,
      "parentId": "721",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-ainthapali-chowk-danipali-sambalpur-546643",
      "type": "WEBLINK"
    }
  }
];
const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search Box</div>
            <div className="res-container">
              {
                resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
              }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header /> <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));    
root.render(<AppLayout />);  
