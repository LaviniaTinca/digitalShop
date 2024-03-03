"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import React, { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

type Props = {};

const NavItems = (props: Props) => {
  const [active, setActive] = useState<null | number>(null);
  const isAnyOpen = active !== null;

  //when the user hits ESC on the keyboard we want the nav to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      }
    };

    document.addEventListener("keydown", handler);

    //clean-up function for memory
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  //when we click outside the nav we want the nav to close, we will pass the navRef to the first div from return
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActive(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (active === index) {
            setActive(null);
          } else {
            setActive(index);
          }
        };

        const close = () => setActive(null);

        const isOpen = index === active;
        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            close={close}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
