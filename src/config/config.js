import { v4 as uuidv4 } from "uuid";
import d1 from "./images/d1.png";
import d2 from "./images/d2.png";
import d3 from "./images/d3.png";
import d4 from "./images/d4.png";


export const mainMenuList = ["Home", "Destinations", "About", "Partner"];
export const footerSocialList = [
    {
        id: uuidv4(),
        url: "/#",
        name: "twitter",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "facebook",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "instagram",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "linkedin",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "youtube",
    },
];

export const footerListLeft = [
    {
        id: uuidv4(),
        url: "/#",
        name: "Africa",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Antarctica",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Asia",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Europe",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "America",
    },
];

export const footerListMiddle = [
    {
        id: uuidv4(),
        url: "/#",
        name: "Destination Guides",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Pictorial & Gifts",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Special Offers",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Delivery Times",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "FAQs",
    },
];

export const footerListRight = [
    {
        id: uuidv4(),
        url: "/#",
        name: "Adventure Travel",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Art And Culture",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Wildlife And Nature",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Family Holidays",
    },
    {
        id: uuidv4(),
        url: "/#",
        name: "Food And Drink",
    },
];

export const Locations = [
    { value: 'africa', label: 'Africa' },
    { value: 'antarctica', label: 'Antarctica' },
    { value: 'asia', label: 'Asia' },
    { value: 'america', label: 'America' },
    { value: 'europe', label: 'Europe' },
];

export const Activity = [
    { value: 'tour', label: 'Tour' },
    { value: 'hiking', label: 'Hiking' },
    { value: 'ski', label: 'Ski' },
];

export const Grade = [
    { value: 'all-inclusive', label: 'All inclusive' },
    { value: 'premium', label: 'Premium' },
    { value: 'econom', label: 'Econom' },
];

export const Participants = [
    { value: 'single', label: 'Single' },
    { value: 'two-persons', label: 'Two persons' },
    { value: 'three-persons', label: 'Three-persons' },
    { value: 'three-and-more', label: 'Three and more persons' },
];

export const DestinationsList = [
    {
        id: uuidv4(),
        url: "/#",
        title: 'Raja Ampat',
        location: 'Indonesia',
        preview: d1
    },
    {
        id: uuidv4(),
        url: "/#",
        title: 'Fanjingshan',
        location: 'China',
        preview: d2
    },
    {
        id: uuidv4(),
        url: "/#",
        title: 'Vevey',
        location: 'Switzerland',
        preview: d3
    },
    {
        id: uuidv4(),
        title: 'Skadar',
        location: 'Montenegro',
        preview: d4
    },
]