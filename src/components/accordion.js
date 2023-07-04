import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Accordion = () => {
  return (
    <div className="w-full px-4 pt-12">
      <div className="faq-div">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-question flex w-full justify-between text-left">
                <span>What is MetaClub DAO?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="faq-answer text-lg">
                <span className="block mb-4">
                  Meta Club DAO is a community first approach to build and
                  empower NFT projects.
                </span>

                <span className="block">
                  A place to inspire and push the industry standards for NFTs by
                  delivering blue chip projects and offer world class services.
                </span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className="faq-hr" />
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-question flex w-full justify-between text-left">
                <span>How can I become a part of MetaClub DAO?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="faq-answer px-4 pt-4 pb-2 text-lg">
                <span>
                  Meta Club DAO is a community first approach to build and
                  empower NFT projects.
                </span>

                <span>
                  A place to inspire and push the industry standards for NFTs by
                  delivering blue chip projects and offer world class services.
                </span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className="faq-hr" />
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-question flex w-full justify-between text-left">
                <span>How can I become a part of MetaClub DAO?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="faq-answer px-4 pt-4 pb-2 text-lg">
                <span>
                  Meta Club DAO is a community first approach to build and
                  empower NFT projects.
                </span>

                <span>
                  A place to inspire and push the industry standards for NFTs by
                  delivering blue chip projects and offer world class services.
                </span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className="faq-hr" />
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="faq-question flex w-full justify-between text-left">
                <span>How can I become a part of MetaClub DAO?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="faq-answer px-4 pt-4 pb-2 text-lg ">
                <span>
                  Meta Club DAO is a community first approach to build and
                  empower NFT projects.
                </span>

                <span>
                  A place to inspire and push the industry standards for NFTs by
                  delivering blue chip projects and offer world class services.
                </span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr className="faq-hr" />
      </div>
    </div>
  );
};

export default Accordion;
