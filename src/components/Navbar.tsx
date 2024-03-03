import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import logo from "/flowerLogo.svg";
import Image from "next/image";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO mobile navbar */}
              <div className="ml-4 flex lg:ml-0 items-center justify-center">
                <Link href="/">
                  {/* <Icons.logo className="h-10 w-10" /> */}
                  <Image
                    src="/flowerLogo.svg"
                    alt="logo image"
                    width={50}
                    height={50}
                  />
                </Link>
                <p className="ml-2 text-custom-mainGreen">Digital HIPPO</p>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              {/* Right side */}
              <div className="ml-auto flex items-center">
                <div className="hiden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href={"/sign-in"}
                      className={`${buttonVariants({
                        variant: "ghost",
                      })} text-custom-mainGreen`}
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
