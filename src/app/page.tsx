import BackgroundSlider from "@/components/BackgroundSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const perks = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownToLine,
      description: "Get your assets delivered to your email in seconds>>>",
    },
    {
      name: "Guaranteed Quality",
      Icon: CheckCircle,
      description: "Get your assets delivered to your email in seconds>>>",
    },
    {
      name: "For the Planet",
      Icon: Leaf,
      description: "Get your assets delivered to your email in seconds>>>",
    },
  ];
  return (
    <>
      <div
        className="w-full ml-0  h-80"
        style={{
          backgroundImage: 'url("/bg-spring3.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <BackgroundSlider />
      <MaxWidthWrapper>
        <div className="py-10 mx-auto text-center flex flex-col items-center max-w-3xl">
          {/* <Image src="/rose.avif" alt="" width={700} height={300} /> */}

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className=" text-custom-mainGreen">gardening products</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/products"
              className={`${buttonVariants()} bg-custom-olive`}
            >
              Browse Trendings
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: List products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-custom-mainGray">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-leaf lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-background text-custom-mainGreen">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
