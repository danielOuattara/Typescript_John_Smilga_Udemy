import {
  Armchair,
  BadgeEuro,
  House,
  MessageCircleQuestion,
  ScanEye,
  ShoppingCart,
} from "lucide-react";

const strokeWidth = 2;
const size = 20;

export const navLinks: TypeLink[] = [
  {
    href: "/",
    label: "home",
    icon: <House size={size} strokeWidth={strokeWidth} />,
  },

  {
    href: "/about",
    label: "about",
    icon: <MessageCircleQuestion size={size} strokeWidth={strokeWidth} />,
  },
  {
    href: "/products",
    label: "products",
    icon: <Armchair size={size} strokeWidth={strokeWidth} />,
  },
  {
    href: "/cart",
    label: "cart",
    icon: <ShoppingCart size={size} strokeWidth={strokeWidth} />,
  },
  {
    href: "/checkout",
    label: "checkout",
    icon: <ScanEye size={size} strokeWidth={strokeWidth} />,
  },
  {
    href: "/orders",
    label: "orders",
    icon: <BadgeEuro size={size} strokeWidth={strokeWidth} />,
  },
];
