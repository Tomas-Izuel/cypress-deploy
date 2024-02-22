import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar position="sticky" className="bg-transparent">
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className=" text-white gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="/">
            Page 1
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-white" href="/page2">
            Page 2
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
