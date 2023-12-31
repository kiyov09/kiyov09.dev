import { createElement } from 'react'
import TargetBlankLink from './TargetBlankLink'

type ComponentTagProps = {
  className?: string
  children: React.ReactElement | React.ReactElement[]
}

type TechCardProps = {
  as?: string
  icon: React.ReactElement
  info: string
  readMoreLink: string
}

function TechCard({ as, icon, info, readMoreLink }: TechCardProps) {
  const ComponentTag = (props: ComponentTagProps) =>
    createElement(as || 'div', { ...props }, props.children)

  return (
    <ComponentTag className="relative flex w-[70vw] max-w-[18rem] shrink-0 flex-col rounded-md bg-gray-800 px-6 pt-20 pb-6 text-center sm:w-[50vw]">
      <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 ">
        {icon}
      </div>
      <p className="flex-1">{info}</p>
      <TargetBlankLink
        href={readMoreLink}
        className="group mt-6 flex items-center justify-center justify-self-end font-semibold hover:bg-blue-gradient hover:bg-clip-text hover:text-transparent"
      >
        Learn more
        <svg
          width="12"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 fill-[#DBEAFE] group-hover:fill-[#60A5FA]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.293 0.292787C10.4805 0.105316 10.7348 0 11 0C11.2652 0 11.5195 0.105316 11.707 0.292787L15.707 4.29279C15.8945 4.48031 15.9998 4.73462 15.9998 4.99979C15.9998 5.26495 15.8945 5.51926 15.707 5.70679L11.707 9.70679C11.5184 9.88894 11.2658 9.98974 11.0036 9.98746C10.7414 9.98518 10.4906 9.88001 10.3052 9.6946C10.1198 9.5092 10.0146 9.25838 10.0123 8.99619C10.01 8.73399 10.1108 8.48139 10.293 8.29279L12.586 5.99979H1C0.734784 5.99979 0.48043 5.89443 0.292893 5.70689C0.105357 5.51936 0 5.265 0 4.99979C0 4.73457 0.105357 4.48022 0.292893 4.29268C0.48043 4.10514 0.734784 3.99979 1 3.99979H12.586L10.293 1.70679C10.1055 1.51926 10.0002 1.26495 10.0002 0.999786C10.0002 0.734622 10.1055 0.480314 10.293 0.292787Z"
          />
        </svg>
      </TargetBlankLink>
    </ComponentTag>
  )
}

export default function TechStack() {
  return (
    <section
      id="tech"
      className="my-8 flex flex-col items-center bg-transparent py-8 lg:my-20"
    >
      <h2 className="inline-block bg-blue-gradient bg-clip-text py-4 text-center text-3xl font-semibold capitalize leading-[1.2] tracking-wide text-transparent md:text-4xl md:leading-[1.2] lg:mx-auto lg:text-5xl lg:leading-[1.2]">
        Tech I Love
      </h2>
      <ul className="mt-10 flex h-fit w-screen max-w-fit snap-x snap-mandatory gap-8 overflow-x-scroll py-12 px-4 lg:mt-20">
        <TechCard
          as="li"
          icon={
            <svg
              viewBox="0 0 128 128"
              className="h-full w-full rounded-full border border-white bg-white"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
            </svg>
          }
          info="Production grade React applications that scale. The world’s leading companies use Next.js by Vercel to build static and dynamic websites and web applications."
          readMoreLink={'https://nextjs.org/'}
        />
        <TechCard
          as="li"
          icon={
            <svg viewBox="0 0 128 128" className="h-full w-full ">
              <g fill="#61DAFB">
                <circle cx="64" cy="64" r="11.4"></circle>
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
              </g>
            </svg>
          }
          info={'A JavaScript library for building user interfaces.'}
          readMoreLink={'https://reactjs.org/'}
        />
        <TechCard
          as="li"
          icon={
            <svg viewBox="0 0 128 128" className="h-full w-full">
              <path
                fill="#F0DB4F"
                d="M1.408 1.408h125.184v125.185H1.408z"
              ></path>
              <path
                fill="#323330"
                d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
              ></path>
            </svg>
          }
          info={
            'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.'
          }
          readMoreLink={
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          }
        />
        <TechCard
          as="li"
          icon={
            <svg viewBox="0 0 128 128" className="h-full w-full">
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
              <path
                data-name="original"
                fill="#007acc"
                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
              ></path>
            </svg>
          }
          info={
            'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'
          }
          readMoreLink={'https://www.typescriptlang.org/'}
        />
        <TechCard
          as="li"
          icon={
            <svg viewBox="0 0 128 128" className="h-full w-full">
              <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                fill="#38b2ac"
              ></path>
            </svg>
          }
          info={
            'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.'
          }
          readMoreLink={'https://tailwindcss.com/'}
        />
        <TechCard
          as="li"
          icon={
            <svg viewBox="0 0 128 128" className="h-full w-full">
              <path
                fill="#99425B"
                d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0"
              ></path>
            </svg>
          }
          info={
            'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.'
          }
          readMoreLink={'https://jestjs.io/'}
        />
        <TechCard
          as="li"
          icon={
            <svg viewBox="0 0 128 128" className="h-full w-full">
              <path
                d="M107.346 2.012l-6.914.431.539 14.377c.028.795-.889 1.259-1.514.766l-4.63-3.65-5.485 4.162a.934.934 0 01-1.498-.784l.617-14.123L19.873 7.48a6.264 6.264 0 00-5.87 6.488l3.86 102.838a6.264 6.264 0 005.98 6.023l83.612 3.754a6.273 6.273 0 004.609-1.73 6.255 6.255 0 001.936-4.526V8.264a6.258 6.258 0 00-1.975-4.566 6.257 6.257 0 00-4.679-1.686zm-41.46 21.187c16.308 0 25.214 8.723 25.214 25.319-2.204 1.713-18.62 2.88-18.62.443.346-9.3-3.817-9.707-6.13-9.707-2.198 0-5.899.662-5.899 5.644 0 12.288 31.69 11.625 31.69 36.424 0 13.95-11.335 21.655-25.791 21.655-14.92 0-27.957-6.036-26.485-26.963.578-2.457 19.545-1.873 19.545 0-.23 8.635 1.735 11.175 6.707 11.175 3.817 0 5.553-2.103 5.553-5.646 0-12.621-31.227-13.063-31.227-36.201 0-13.285 9.138-22.143 25.444-22.143z"
                fill="#FF4785"
              ></path>
            </svg>
          }
          info={
            'Storybook is an open source tool for building UI components and pages in isolation.'
          }
          readMoreLink={'https://storybook.js.org/'}
        />
        <TechCard
          as="li"
          icon={
            <svg viewBox="0 0 128 128" className="h-full w-full">
              <g fill="#2c8ebb">
                <path d="M99.24 80.71C94.9 80.76 91.1 83 87.89 85c-6 3.71-9 3.47-9 3.47l-.1-.17c-.41-.67 1.92-6.68-.69-13.84-2.82-7.83-7.3-9.72-6.94-10.32 1.53-2.59 5.36-6.7 6.89-14.36.91-4.64.67-12.28-1.39-16.28-.38-.74-3.78 1.24-3.78 1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6 7.61-6 7.61a14 14 0 00-11.71 4.5 9.64 9.64 0 01-3.85 2.27c-.41.14-.91.12-2.15 3.47-1.9 5.07 3.24 10.81 3.24 10.81s-6.13 4.33-8.4 9.72a24.78 24.78 0 00-1.75 11.68s-4.36 3.78-4.64 7.68a12.87 12.87 0 001.77 7.83 1.94 1.94 0 002.63.91s-2.9 3.38-.19 4.81c2.47 1.29 6.63 2 8.83-.19 1.6-1.6 1.92-5.17 2.51-6.63.14-.34.62.57 1.08 1a10 10 0 001.36 1s-3.9 1.68-2.3 5.51c.53 1.27 2.42 2.08 5.51 2.06 1.15 0 13.76-.72 17.12-1.53a4.33 4.33 0 002.61-1.46 63 63 0 0015.49-7c4.74-3.09 6.68-3.93 10.51-4.84 3.16-.75 2.95-5.65-1.24-5.58z"></path>
                <path d="M64 2a62 62 0 1062 62A62 62 0 0064 2zm37.3 87.83c-3.35.81-4.91 1.44-9.41 4.36a67 67 0 01-15.56 7.18 8.71 8.71 0 01-3.64 1.77c-3.81.93-16.88 1.63-17.91 1.63h-.24c-4 0-6.27-1.24-7.49-2.54-3.4 1.7-7.8 1-11-.69a5.55 5.55 0 01-3-3.9 6 6 0 010-2.06 6.66 6.66 0 01-.79-1A16.38 16.38 0 0130 84.52c.29-3.73 2.87-7.06 4.55-8.83A28.56 28.56 0 0136.61 64a26.82 26.82 0 016.82-9c-1.65-2.78-3.33-7.06-1.7-11.42 1.17-3.11 2.13-4.84 4.24-5.58a6.84 6.84 0 002.51-1.34A17.65 17.65 0 0160.34 31c.19-.48.41-1 .65-1.46 1.6-3.4 3.3-5.31 5.29-6a4.88 4.88 0 014.4.5c.65.43 1.48 1 3.9 6a4.69 4.69 0 012.85-.1 3.81 3.81 0 012.39 1.94c2.47 4.74 2.8 13.19 1.72 18.62a33.8 33.8 0 01-5.84 13.31 25.73 25.73 0 015.77 9.43 25.42 25.42 0 011.41 10.41A28.7 28.7 0 0086 81.91c3.06-1.89 7.68-4.74 13.19-4.81a6.62 6.62 0 017 5.7 6.35 6.35 0 01-4.89 7.03z"></path>
              </g>
            </svg>
          }
          info={
            'Yarn is a package manager that doubles down as project manager.'
          }
          readMoreLink={'https://yarnpkg.com/'}
        />
      </ul>
    </section>
  )
}
