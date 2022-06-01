import { IoMdPaperPlane } from 'react-icons/io'
import TargetBlankLink from './TargetBlankLink'
import Cta from './UI/Buttons/Cta'
import GithubIcon from './UI/Icons/GithubIcon'
import LinkedInIcon from './UI/Icons/LinkedInIcon'
import TwitterIcon from './UI/Icons/TwitterIcon'
import Modal from './UI/Modal'

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
          <Modal trigger={<Cta>Send me an email</Cta>} />
        </div>
        {/* Social */}
        <div className="pt-6">
          <h3 className="text-md lg:text-lg">Or reach me on the interweb</h3>
          <div className="mt-4 flex items-center justify-center gap-6 lg:justify-start">
            <TargetBlankLink
              href="https://github.com/kiyov09"
              className="group h-6 w-6 hover:scale-110"
            >
              <GithubIcon />
            </TargetBlankLink>
            <TargetBlankLink
              href="https://www.linkedin.com/in/kiyov09/"
              className="group h-6 w-6 hover:scale-110"
            >
              <LinkedInIcon />
            </TargetBlankLink>
            <TargetBlankLink
              href="https://twitter.com/kiyov09"
              className="group h-6 w-6 hover:scale-110"
            >
              <TwitterIcon />
            </TargetBlankLink>
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-center lg:flex lg:w-64">
        <IoMdPaperPlane className="h-full w-full fill-[#5a84f2]" />
      </div>
    </footer>
  )
}
