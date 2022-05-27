import { IoMdPaperPlane } from 'react-icons/io'

function GithubIcon() {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)">
        <path
          d="M11.9995.0007c-6.63 0-12 5.37-12 12 0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57a12.0177 12.0177 0 0 0 8.175-11.385c0-6.63-5.37-12-12-12Z"
          fill="none"
          className="fill-current group-hover:fill-white"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            transform="translate(-.0005 .0007)"
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-[4px] group-hover:bg-white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-.0005 2.0058A2.005 2.005 0 0 1 2.0046.0008h19.9876a2.004 2.004 0 0 1 2.0073 2.005v19.9877a2.0051 2.0051 0 0 1-2.0062 2.0072H2.0046a2.0057 2.0057 0 0 1-1.4182-.5876 2.0051 2.0051 0 0 1-.5869-1.4185V2.0058Zm9.4996 7.1455h3.2499v1.632c.4691-.9382 1.6691-1.7826 3.4723-1.7826 3.4571 0 4.2764 1.8688 4.2764 5.2975v6.3513h-3.4986v-5.5702c0-1.9527-.469-3.0546-1.6603-3.0546-1.6527 0-2.34 1.188-2.34 3.0546v5.5702H9.4992V9.1513Zm-6 11.3487h3.4997V9.0007H3.4992V20.5ZM7.4996 5.2502a2.2505 2.2505 0 1 1-4.4999.0991 2.2505 2.2505 0 0 1 4.5-.0991Z"
        fill="none"
        className="fill-current group-hover:fill-linkedin-blue"
      />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)">
        <path
          className="fill-current group-hover:fill-twitter-blue"
          d="M23.642 4.9377c-.835.37-1.732.62-2.675.733a4.6698 4.6698 0 0 0 2.048-2.578 9.2991 9.2991 0 0 1-2.958 1.13 4.6598 4.6598 0 0 0-7.6478 1.2667 4.6606 4.6606 0 0 0-.2902 2.9833 13.2289 13.2289 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342a4.66 4.66 0 0 0 2.072 3.878 4.647 4.647 0 0 1-2.11-.583v.06a4.6598 4.6598 0 0 0 3.737 4.568 4.6918 4.6918 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.4998 9.4998 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.4702 9.4702 0 0 0 2.323-2.41l.002-.003Z"
          fill="none"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path
            className="fill-current group-hover:fill-twitter-blue"
            fill="none"
            transform="translate(-.001 .0007)"
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function MessageBtn() {
  return (
    <button className="rounded-lg bg-blue-gradient py-3 px-5 text-lg font-medium capitalize text-white hover:scale-105">
      Send me an email
    </button>
  )
}

export default function Footer() {
  return (
    <footer className="mt-32 flex flex-col gap-8 overflow-visible pb-28 text-center lg:mt-48 lg:flex-row lg:text-left">
      <div className="flex-1 space-y-8">
        <h2 className="inline-block bg-blue-gradient bg-clip-text text-3xl font-semibold leading-[1.2] tracking-wide text-transparent md:text-4xl md:leading-[1.2] lg:text-5xl lg:leading-[1.2]">
          {"Let's talk"}
        </h2>
        <p className="text-base font-light leading-relaxed tracking-wider">
          Any project in mind? Leave me a message and tell me how can I help.
        </p>
        <div className="relative">
          <MessageBtn />
        </div>
        {/* Social */}
        <div className="pt-6">
          <h3 className="text-md lg:text-lg">Or reach me on the interweb</h3>
          <div className="mt-4 flex items-center justify-center gap-6 lg:justify-start">
            <a
              href="https://github.com/kiyov09"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-6 w-6 hover:scale-110"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/kiyov09/"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-6 w-6 hover:scale-110"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/kiyov09"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-6 w-6 hover:scale-110"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-center lg:flex lg:w-64">
        <IoMdPaperPlane className="h-full w-full fill-[#5a84f2]" />
      </div>
    </footer>
  )
}
