"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { BadgeDollarSign, Mail, X } from "lucide-react";

export const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="py-4 px-4 bg-secondary hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold"
      >
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            />

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="p-6 bg-white inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="p-3 border border-gray-20 rounded-xl">
                      <p className="text-[21px] font-bold text-secondary">
                        Price <span className="text-primary">wise</span>
                      </p>
                    </div>
                    <X className="cursor-pointer" onClick={closeModal} />
                  </div>
                  <h4 className="text-secondary text-lg leading-[24px] font-semibold">
                    Stay updated with product pricing alerts right in your inbox
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Never miss a bargain again with our timely alerts
                  </p>
                </div>
                <form className="flex flex-col mt-5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="px-5 py-3 mt-3 flex items-center gap-2 border border-gray-300 rounded-[27px]">
                    <Mail size={18} className="" />
                    <input
                      placeholder="Enter your email"
                      required
                      type="email"
                      id="email"
                      className="flex-1 pl-1 border-none text-gray-500 text-base focus:outline-none border border-gray-300 rounded-[27px] "
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 text-white text-base font-semibold border border-secondary bg-secondary rounded-lg mt-8 hover:opacity-65"
                  >
                    Track
                  </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
