interface NavItem {
  title: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: "home",
  },
  {
    title: "About",
    href: "/about",
    icon: "user",
  },
  {
    title: "Find",
    href: "/find",
    icon: "search",
  },
];

export default navItems;
