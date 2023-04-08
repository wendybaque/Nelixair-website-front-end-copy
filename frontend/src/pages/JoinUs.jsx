// Based on : https://headlessui.com/react/dialog

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// MUI Icons imports
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BadgeIcon from "@mui/icons-material/Badge";

const JoinUs = () => {
  const offers = [
    {
      id: "1",
      title: "Title 1",
      date: "date 1",
      type: "Type 1",
      desc: "Description 1",
      duration: "duration 1",
      place: "Place 1",
      benefits: "Benefits 1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "2",
      title: "Title 2",
      date: "date 2",
      type: "Type 2",
      desc: "Description 2",
      duration: "duration 2",
      place: "Place 2",
      benefits: "Benefits 2",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "3",
      title: "Title 3",
      date: "date 3",
      type: "Type 3",
      desc: "Description 3",
      duration: "duration 3",
      place: "Place 3",
      benefits: "Benefits 3",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="bg-light">
      <h2 className="pt-10 underline underline-offset-8 font-poppins font-semibold text-4xl text-center text-secondaryLight">
        Our offers
      </h2>
      <p className="font-poppins text-lg text-center p-10 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        voluptas beatae quasi excepturi vero accusantium harum magnam non
        tempore similique ad rerum provident, eveniet iusto placeat minima esse,
        explicabo iure? Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ullam iste ducimus eaque. Sed veniam soluta consequuntur? Nesciunt
        reiciendis tempora ipsam ut dolore repellendus cumque quas hic vero. Id,
        dicta sit?
      </p>
      <section
        id="container"
        className="lg:w-1/2 font-poppins inset-0 flex flex-col items-left justify-center lg:p-10"
      >
        {/* Offer list */}
        {offers.map((offer) => (
          <div
            id="offer"
            key={offer.id}
            className="flex flex-col p-6 m-6 bg-white rounded-md shadow-md"
          >
            <MoreVertIcon className="place-self-end cursor-pointer" />
            <h3 className="font-bold">{offer.title}</h3>
            
            <p>{offer.place}</p>
            <p>{offer.desc}</p>
            <div className="mt-4 mb-4">
              <kbd className="bg-contrast px-2 py-1.5 w-20 mb-4 mt-4 text-xs font-semibold text-primaryLight mr-2 bg-black border border-primaryLight rounded-md dark:bg-gray-600 dark:text-gray-100 dark:border-dark">
                <BadgeIcon className="mr-2" /> {offer.type}
              </kbd>
              <kbd className="bg-contrast px-2 py-1.5 w-24 mb-4 mt-4 text-xs font-semibold text-primaryLight mr-2 bg-black border border-primaryLight rounded-md dark:bg-gray-600 dark:text-gray-100 dark:border-dark">
                <AccessTimeIcon className="mr-2" />
                {offer.duration}
              </kbd>
            </div>
            <button
              type="button"
              onClick={openModal}
              className="rounded-md w-32 mb-4 mt-4  bg-secondaryLight text-white  px-4 py-2 text-sm font-medium  hover:bg-primaryLight focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Learn more...
            </button>
            {/* Popup */}
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="font-poppins fixed inset-0 overflow-y-auto ">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="flex flex-col w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <CloseIcon
                          onClick={closeModal}
                          className="place-self-end cursor-pointer"
                        />
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-dark"
                        >
                          {offer.title}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-dark">
                            <span className="font-bold">Offer type: </span>{" "}
                            {offer.type}
                          </p>
                          <p className="text-sm text-dark">
                            <span className="font-bold">Offer place: </span>
                            {offer.place}
                          </p>
                          <p className="text-sm text-dark">
                            <span className="font-bold">Offer duration: </span>
                            {offer.duration}
                          </p>
                          <p className="text-sm text-dark">
                            <span className="font-bold">Offer benefits: </span>
                            {offer.benefits}
                          </p>
                          <p className="text-sm text-dark leading-relaxed ">
                            <span className="font-bold">
                              Offer description:{" "}
                            </span>{" "}
                            {offer.desc}
                          </p>
                          <p className="text-sm text-dark pt-4 leading-relaxed ">
                            <span className="font-bold">Offer details:</span>{" "}
                            {offer.details}
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="rounded-md w-38 mb-4 mt-4  bg-secondaryLight text-white  px-4 py-2 text-sm font-medium  hover:bg-primaryLight focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            onClick={closeModal}
                          >
                            <a
                              href="/Offers/:id"
                              alt="Redirect to apply page"
                              aria-label="Redirect to apply page"
                            >
                              Continue to apply
                            </a>
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JoinUs;
