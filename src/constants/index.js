import { facebook, instagram, twitter } from "../assets/icons";
import { customer1, customer2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#retreats", label: "Retreats" },
    { href: "#contact-us", label: "Contact Us" },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "It was an incredibly rejuvenating experience. The retreat offered a perfect balance of relaxation, self-care, and personal growth, leaving me feeling refreshed and renewed."
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "I recently spent a weekend at this Retreat and it was exactly what I needed. The retreat offered a peaceful sanctuary with stunning views and a variety of wellness activities."
    }
];


export const footerLinks = [
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@WellnessRetreat.com", link: "mailto:customer@wellnessRetreat.com" },
            { name: "+911234567890", link: "tel:+911234567890" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
