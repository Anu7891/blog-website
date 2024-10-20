// APP NAME
export const APP_NAME = "Crypto3Blog";
export const WEB_DOMAIN = "https://website.crypto3blog.com";
export const WEB_URL = WEB_DOMAIN + "/";
export const WEB_LINK = WEB_URL;
export const GOOGLE_TAG_MANAGER = "https://www.googletagmanager.com/gtag/js?id=G-BEZGEP0WZN";


// BASE API URL
const BASE_API_URL = "https://monil-news-letter-crud.vercel.app";

// Defined specific endpoints
export const API_BASE_URL = `${BASE_API_URL}/article`;
export const CATEGORIES_URL = `${BASE_API_URL}/categories`;
export const SUBCATEGORIES_URL = `${BASE_API_URL}/article/categoryList`;
export const CATEGORIES_LISTS_URL = (categoryId) => `${BASE_API_URL}/articleList?categoryId=${categoryId}`;



// Color Const Variables
export const WHITE_COLOR= "#ffffff";

// Images
export const BANNER_IMAGE_FIRST= "images/banner_image_first.webp";
export const ARTICLE_IMAGE_ONE="images/article_image_one.webp";
export const ARTICLE_IMAGE_TWO="images/article_image_two.webp";
export const ARTICLE_IMAGE_THREE="images/article_image_three.webp";
export const ARTICLE_IMAGE_FOUR ="images/article_image_four.webp";
export const SECOND_ARTICLE_IMAGE_ONE ="images/second_article_banner_one.webp";
export const SECOND_ARTICLE_IMAGE_TWO = "images/second_article_banner_two.webp";
export const SECOND_ARTICLE_IMAGE_THREE = "images/second_article_banner_three.webp";
export const SECOND_ARTICLE_IMAGE_FOUR = "images/second_article_banner_four.webp";
export const HAMBURGER_ICON = "/c/images/white_hamburger.png";
export const CLOSE_ICON = "images/close_icon.png";
export const LOGO_IMG = "/c/images/logo.png";
export const ERROR_PLACEHOLDER_IMG = "/c/images/error_placeholder.jpg";