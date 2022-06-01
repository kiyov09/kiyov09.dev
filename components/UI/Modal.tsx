import { Dialog } from '@headlessui/react'
import React, { SyntheticEvent, useState } from 'react'

import { CgSpinner } from 'react-icons/cg'

type ModalProps = {
  trigger: JSX.Element
}

export default function Modal({ trigger }: ModalProps) {
  let [isOpen, setIsOpen] = useState(false)
  let [isLoading, setIsLoading] = useState(false)

  // submit the form to /api/contact_me and close the modal
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    setIsLoading(true)

    const target = e.target as HTMLFormElement

    fetch('/api/contact_me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: target.email.value,
        subject: target.subject.value,
        message: target.message.value,
      }),
    }).then(() => {
      setTimeout(() => {
        setIsLoading(false)
        setIsOpen(false)
      }, 2000)
    })
  }

  return (
    <>
      {React.cloneElement(trigger, { onClick: () => setIsOpen(true) })}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-gray-800 opacity-90"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-primary-dark p-6 shadow-sm shadow-neutral-800 md:p-10">
            <Dialog.Title className="inline-block bg-blue-gradient bg-clip-text text-4xl font-semibold text-transparent ">
              Contact Me
            </Dialog.Title>
            <Dialog.Description className="mt-2 font-light">
              Let me know how I can help you.
            </Dialog.Description>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-5"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="block w-full appearance-none rounded-md bg-primary-dark-light px-3 py-3 text-white placeholder-neutral-400 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-primary-dark sm:text-sm sm:leading-5"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  className="block w-full appearance-none rounded-md bg-primary-dark-light px-3 py-3 text-white placeholder-neutral-400 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-primary-dark sm:text-sm sm:leading-5"
                  type="text"
                  placeholder="Enter a subject"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block w-full appearance-none rounded-md bg-primary-dark-light px-3 py-3 text-white placeholder-neutral-400 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-primary-dark sm:text-sm sm:leading-5"
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex flex-col items-center justify-end lg:flex-row lg:gap-2">
                <button
                  className="mt-2 w-full rounded-md bg-sky-500 py-3 px-5 text-sm font-medium tracking-wide text-white transition duration-150 ease-in-out hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-primary-dark active:opacity-80 lg:w-auto"
                  type="submit"
                  onSubmit={() => setIsOpen(false)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CgSpinner className="mx-auto h-5 w-5 animate-spin text-center" />
                  ) : (
                    'Send'
                  )}
                </button>
                <button
                  className="mt-3 rounded-md py-1 px-2 text-sm font-medium tracking-wide text-gray-400 transition duration-150 ease-in-out hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-primary-dark active:opacity-60 lg:mt-2 lg:inline-block lg:w-auto  lg:py-3 lg:px-4"
                  type="reset"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
