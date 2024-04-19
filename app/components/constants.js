import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export const headerItems = [
  { id: 1, label: "Storie", flag: "old" },
  { id: 2, label: "Loev", flag: "old" },
  { id: 3, label: "One", flag: "old" },
  { id: 4, label: "Superbike", flag: "new" },
];
export const headerSubItems = [
  { id: 1, label: "Book Now" },
  { id: 2, label: "Book a Test Ride" },
  { id: 3, label: "Become a Dealer" },
];
export const socialIcons = [
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaFacebook />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

export const footerLinks = [
  {
    title: "Models",
    links: [
      { label: "Storie", url: "#" },
      { label: "One", url: "#" },
      { label: "Loev", url: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", url: "#" },
      { label: "Blog", url: "#" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { label: "Become a Dealer", url: "#" },
      { label: "Locate a Dealer", url: "#" },
      { label: "Emagine", url: "#" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Book a test ride", url: "#" },
      { label: "Book now", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
];

export const colors = [
  {
    id: 1,
    color: "#A0CABB",
  },
  {
    id: 2,
    color: "#707485",
  },
  {
    id: 3,
    color: "#233A78",
  },
  {
    id: 4,
    color: "#93D4DE",
  },
  {
    id: 5,
    color: "#C5DBF4",
  },
  {
    id: 6,
    color: "#B42025",
  },
  {
    id: 7,
    color: "#FFFFFF",
  },
  {
    id: 8,
    color: "#F5D266",
  },
];

export const cities = [
  "Mumbai",
  "New Delhi",
  "Bangalore",
  "Kolkata",
  "Chennai",
];
