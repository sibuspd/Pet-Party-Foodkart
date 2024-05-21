export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg";

export const ERROR_LOGO =
  "https://th.bing.com/th/id/R.5c4c79b396f2ba2aaa5daddb1ec36492?rik=xCt%2b%2beh%2b8rxJKA&riu=http%3a%2f%2fwww.vignette1.wikia.nocookie.net%2finspectorgadget%2fimages%2f5%2f59%2fMad_Cat.png%2frevision%2flatest%3fcb%3d20150114233349&ehk=hB9jZqi4qz8YssHnkcjXoaC7pVbCGxrWqqjkITDLRlA%3d&risl=&pid=ImgRaw&r=0";

//CORS proof API with your custom location cords
export const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.51981990724166&lng=73.86026275822753&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
)}`;

export const MENU_API = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.51981990724166&lng=73.86026275822753&restaurantId="
)}`;
