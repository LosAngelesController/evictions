import ActiveLink from "./ActiveLink";
import { Disclosure } from "@headlessui/react";
import { ChevronDoubleDownIcon, XIcon } from "@heroicons/react/outline";

interface newiteminterface {
  name: string;
  href: string;
  target: string;
  current: boolean;
}

const navigation: any = [
  {
    name: "Evictions",
    href: "/",
    target: "_self",
  },
  {
    name: "LA Controller",
    href: "https://controller.lacity.gov",
    target: "_blank",
  },
  {
    name: "Table",
    href: "https://docs.google.com/spreadsheets/d/1d6xgd95m0v914YTePb8m-9Ir9SVKNKx4-Xw8N_4I0pk/edit?usp=sharing",
    target: "_blank",
  },
  {
    name: "Analysis",
    href: "https://controller.lacity.gov/landings/evictions",
    target: "_blank",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  const navarraycurrent = () => {
    return navigation.map((item: any) => {
      if (typeof window !== "undefined") {
        if (item.href === window.location.pathname) {
          item["current"] = true;
        } else {
          item["current"] = false;
        }
      } else {
        item["current"] = false;
      }

      return item;
    });
  };

  const messageBox = () => {
    alert(
      "-Click & Drag to explore locations on the map, or enter a location in the Search bar.\n\n-Click on a map point to view eviction details by location.\n\n-Click Filter button to view by Eviction Category, Notice Type, Council District, and top 20 Zip Codes."
    );
  };

  return (
    <Disclosure as="nav" className="z-50 bg-[#1a1a1a] flex flex-col">
      {({ open }) => (
        <>
          <div className="z-50 flex flex-row  h-content">
            <div className="">
              {/* Mobile menu button*/}
              <div className="flex flex-row sm:hidden">
                <div className="inset-y-0 left-0">
                  <Disclosure.Button className=" rounded-md p-2 hover:bg-[#80ffdc] focus:outline-none bg-[#1a1a1a] text-white hover:text-gray-100">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <ChevronDoubleDownIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="grid content-center ml-2">
                  <strong className="text-white">Eviction Notices</strong>
                </div>
              </div>
              <div className="hidden sm:ml-4 sm:block lg:ml-6">
                <div className="flex gap-x-3 lg:gap-x-4">
                  {navarraycurrent().map((item: newiteminterface) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.target}
                      className={classNames(
                        item.current
                          ? "py-2 md:py-3 px-3 block hover:text-green-300 focus:outline-none text-green-300 border-b-2 font-medium border-green-300"
                          : "text-white py-2 text-sm md:text-base md:py-3 px-3 block hover:text-green-300 focus:outline-none underline"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <p
                    className="text-white py-2 text-sm md:text-base   md:py-3 px-3 block hover:text-green-300 focus:outline-none underline"
                    onClick={messageBox}
                  >
                    Instructions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-0 pb-3">
              <p className="text-[#41ffca] font-medium text-base pt-0 pb-1 px-3 block">
                Eviction Notices Feb - Aug 2023
              </p>
              {navarraycurrent().map((item: newiteminterface) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  target={item.target}
                  className={classNames(
                    item.current ? "bg-green-900 text-white" : "text-gray-100",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <p
                className="text-white font-medium text-base py-2 md:text-base md:py-3 px-3 block focus:outline-none"
                onClick={messageBox}
              >
                Instructions
              </p>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
