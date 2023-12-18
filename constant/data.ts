import {
  Facebook,
  Flame,
  Github,
  Heart,
  Home,
  Lightbulb,
  Linkedin,
} from "lucide-react";

export const navLinks = [
  {
    name: "Home",
    link: "/",
    icon: Home,
  },
  {
    name: "Top",
    link: "/top",
    icon: Flame,
  },
  {
    name: "Favorites",
    link: "/favorites",
    icon: Heart,
  },
  {
    name: "Recommendations",
    link: "/recommendations",
    icon: Lightbulb,
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    link: "/",
    icon: Facebook,
  },
  {
    name: "Github",
    link: "/",
    icon: Github,
  },
  {
    name: "Linkedin",
    link: "/",
    icon: Linkedin,
  },
];

export const authLinks = [
  {
    name: "Sign In",
    link: "/api/auth/signin",
  },
  {
    name: "Sign up",
    link: "/sign-up",
  },
];
