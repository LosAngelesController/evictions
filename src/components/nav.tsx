"use client";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDoubleDownIcon, XIcon } from "@heroicons/react/outline";
interface newiteminterface {
  name: string;
  href: string;
  target: string;
  current: boolean;
}

declare global {
  interface Window {
    google: any;
  }
}

// Function to show Google Translate dropdown
const showTranslateDropdown = () => {
  if (window.google && window.google.translate) {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: window.google.translate.TranslateElement.InlineLayout.COMBO,
      },
      "google_translate_element"
    );
  }
};

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
    href: "https://docs.google.com/spreadsheets/d/1UwJJRp1KVXTd9BtooYQJDb4qVwEyPpEpa4O3Upoenok/edit?usp=sharing",
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=showTranslateDropdown";
      // "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isMounted]);

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
      "-Click & Drag to explore locations on the map, or enter a location in the Search bar.\n-Click on a map point to view eviction details by location.\n-Click Filter button to view by Eviction Category, Notice Type, Council District, and top 20 Zip Codes.\n\n-Haga clic para explorar ubicaciones en el mapa o ingrese una ubicación en la barra de búsqueda.\n-Haga clic en el punto del mapa para ver los detalles del desalojo por ubicación.\n-Haga clic en el botón Filtrar para ver por categoría de desalojo, tipo de aviso, distrito municipal y los 20 códigos postales principales."
    );
  };

  return (
    <Disclosure as="nav" className="bg-[#1a1a1a] flex flex-col">
      {({ open }) => (
        <>
          <div className="flex flex-row  h-content">
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
                    className="text-white py-2 text-sm md:text-base md:py-3 px-3 block hover:text-green-300 focus:outline-none underline"
                    onClick={messageBox}
                  >
                    Instructions
                  </p>
                  <div
                    className="text-white py-2 text-sm md:text-base md:py-3 px-3 block hover:text-green-300 focus:outline-none underline"
                    onClick={showTranslateDropdown}
                  >
                    Translate
                  </div>
                  <div
                    id="google_translate_element"
                    className="translate-dropdown"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-0 pb-3">
              {/* <p className="text-[#41ffca] font-medium text-base pt-0 pb-1 px-3 block">
                Eviction Notices Feb 2023 - Apr 2025
              </p> */}
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
