"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function Footer() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null)
  const currentYear = new Date().getFullYear()

  const openDialog = (id: string) => {
    setActiveDialog(id)
  }

  const closeDialog = () => {
    setActiveDialog(null)
  }

  return (
    <footer className="bg-gradient-to-b from-ksahc-blue to-ksahc-blue/90 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Disclaimer</h3>
            <p className="text-sm leading-relaxed text-white/90">
              The contents of this website are for informational purposes only. While every effort is made to ensure
              accuracy, the Karnataka State Allied & Healthcare Council does not guarantee the accuracy, completeness,
              or reliability of the information. Users are advised to verify information independently.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Website Policies</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => openDialog("copyright")} className="transition-colors hover:text-white/80 hover:underline">
                  Copyright Policy
                </button>
              </li>
              <li>
                <button onClick={() => openDialog("hyperlinking")} className="transition-colors hover:text-white/80 hover:underline">
                  Hyperlinking Policy
                </button>
              </li>
              <li>
                <button onClick={() => openDialog("security")} className="transition-colors hover:text-white/80 hover:underline">
                  Security Policy
                </button>
              </li>
              <li>
                <button onClick={() => openDialog("terms")} className="transition-colors hover:text-white/80 hover:underline">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => openDialog("privacy")} className="transition-colors hover:text-white/80 hover:underline">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">Accessibility</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sitemap" className="transition-colors hover:text-white/80 hover:underline">
                  Sitemap
                </Link>
              </li>
              <li>
                <button onClick={() => openDialog("help")} className="transition-colors hover:text-white/80 hover:underline">
                  Help
                </button>
              </li>
              <li>
                <button onClick={() => openDialog("screen-reader")} className="transition-colors hover:text-white/80 hover:underline">
                  Screen Reader Access
                </button>
              </li>
              <li>
                <Link href="/accessibility-guidelines" className="transition-colors hover:text-white/80 hover:underline">
                  Accessibility Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-white/80">
            <div>
              <p>Last Updated: May 12, 2023</p>
            </div>
            <div>
              <p>Visitor Count: 12,345</p>
            </div>
            <div>
              <p>Website Version: 2.0</p>
            </div>
          </div>

          <div className="mt-6 text-center space-y-2 text-sm text-white/80">
            <p>© {currentYear} Karnataka State Allied & Healthcare Council. All rights reserved.</p>
            <p>
              Content Owned by Karnataka State Allied & Healthcare Council, Government of Karnataka
            </p>
            <p>Designed and Developed by Centre for e-Governance, Government of Karnataka</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <Link href="https://meity.gov.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
            <Image
              src="/aa.png"
              alt="MeitY Logo"
              width={80}
              height={40}
              className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors"
            />
          </Link>
          <Link href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
            <Image
              src="/bb.png"
              alt="Digital India Logo"
              width={80}
              height={40}
              className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors"
            />
          </Link>
          <Link href="https://data.gov.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
            <Image
              src="/cc.png"
              alt="Data.gov.in Logo"
              width={80}
              height={40}
              className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors"
            />
          </Link>
          <Link href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
            <Image
              src="/dd.png"
              alt="India.gov.in Logo"
              width={80}
              height={40}
              className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-colors"
            />
          </Link>
        </div>
      </div>

      {/* Policy Dialogs */}
      <Dialog open={activeDialog === "copyright"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Copyright Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p>
              Material featured on this site may be reproduced free of charge after taking proper permission by sending
              a mail to us. However, the material has to be reproduced accurately and not to be used in a derogatory
              manner or in a misleading context. Wherever the material is being published or issued to others, the
              source must be prominently acknowledged.
            </p>
            <p>
              The permission to reproduce this material shall not extend to any material which is identified as being
              copyright of a third party. Authorization to reproduce such material must be obtained from the
              departments/ copyright holders concerned.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "hyperlinking"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Hyperlinking Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p>
              Links to external websites/portals: At many places in this website, you shall find links to other
              websites/ portals. These links have been placed for your convenience. Karnataka State Allied & Healthcare
              Council is not responsible for the contents and reliability of the linked websites and does not
              necessarily endorse the views expressed in them. Mere presence of the link or its listing on this website
              should not be assumed as endorsement of any kind. We cannot guarantee that these links will work all the
              time and we have no control over availability of linked pages.
            </p>
            <p>
              Links to our website by other websites: We do not object to you linking directly to the information that
              is hosted on our site and no prior permission is required for the same. However, we would like you to
              inform us about any links provided to our site so that you can be informed of any changes or updates
              therein. Also, we do not permit our pages to be loaded into frames on your site. Our website's pages must
              load into a newly opened browser window of the user.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "security"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Security Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p>
              We are committed to ensuring the security of this website. However, you recognize that your use of the
              site is at your sole risk. This Security Policy covers how we handle the security of this website.
            </p>
            <p>
              The Karnataka State Allied & Healthcare Council website has security measures in place to protect against
              the loss, misuse, and alteration of the information under our control. The data is protected using
              encryption and other security measures.
            </p>
            <p>
              While we strive to protect your personal information, we cannot guarantee the security of any information
              you transmit to us, and you do so at your own risk. Once we receive your information, we make our best
              effort to ensure its security on our systems.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "terms"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Terms & Conditions</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p>
              This website is designed, developed and maintained by Karnataka State Allied & Healthcare Council,
              Government of Karnataka.
            </p>
            <p>
              Though all efforts have been made to ensure the accuracy and currency of the content on this website, the
              same should not be construed as a statement of law or used for any legal purposes. In case of any
              ambiguity or doubts, users are advised to verify/check with the Department(s) and/or other source(s), and
              to obtain appropriate professional advice.
            </p>
            <p>
              Under no circumstances will this Department be liable for any expense, loss or damage including, without
              limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising
              from use, or loss of use, of data, arising out of or in connection with the use of this website.
            </p>
            <p>
              These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any
              dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of
              India.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "privacy"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700">
            <p>
              This website does not automatically capture any specific personal information from you (like name, phone
              number or e-mail address), that allows us to identify you individually.
            </p>
            <p>
              If the Karnataka State Allied & Healthcare Council requests you to provide personal information, you will
              be informed for the particular purposes for which the information is gathered and adequate security
              measures will be taken to protect your personal information.
            </p>
            <p>
              We do not sell or share any personally identifiable information volunteered on this site to any third
              party (public/private). Any information provided to this website will be protected from loss, misuse,
              unauthorized access or disclosure, alteration, or destruction.
            </p>
            <p>
              We gather certain information about the User, such as Internet protocol (IP) address, domain name, browser
              type, operating system, the date and time of the visit and the pages visited. We make no attempt to link
              these addresses with the identity of individuals visiting our site unless an attempt to damage the site
              has been detected.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "help"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Help</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-gray-700">
            <h3 className="text-lg font-medium text-gray-900">Navigating the Website</h3>
            <p>
              The website has a user-friendly interface with a navigation menu at the top. You can click on the menu
              items to access different sections of the website.
            </p>

            <h3 className="text-lg font-medium text-gray-900">Downloading Forms</h3>
            <p>
              To download forms, navigate to the "Downloads & Resources" section and click on "Forms". You can then
              download the required forms in PDF format.
            </p>

            <h3 className="text-lg font-medium text-gray-900">Registration Process</h3>
            <p>
              For registration as a healthcare professional, visit the "Services Offered" section and click on
              "Registration". Follow the instructions provided on the page to complete the registration process.
            </p>

            <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
            <p>
              If you need further assistance, please visit the "Contact Us" page for our contact details or use the
              feedback form accessible through the "Feedback" button on the right side of the page.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeDialog === "screen-reader"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Screen Reader Access</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-gray-700">
            <p>
              This website is designed to be accessible to all users, including those who use screen readers. We follow
              WCAG 2.1 guidelines to ensure our content is perceivable, operable, understandable, and robust.
            </p>
            <h3 className="text-lg font-medium text-gray-900">Recommended Screen Readers</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <a
                  href="https://www.nvaccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  NVDA (NonVisual Desktop Access)
                </a>{" "}
                - Free, open-source screen reader for Windows
              </li>
              <li>
                <a
                  href="https://www.freedomscientific.com/products/software/jaws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  JAWS (Job Access With Speech)
                </a>{" "}
                - Commercial screen reader for Windows
              </li>
              <li>
                <a
                  href="https://www.apple.com/accessibility/vision/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  VoiceOver
                </a>{" "}
                - Built-in screen reader for macOS and iOS
              </li>
              <li>
                <a
                  href="https://www.google.com/accessibility/products-features/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  TalkBack
                </a>{" "}
                - Built-in screen reader for Android devices
              </li>
              <li>
                <a
                  href="https://help.gnome.org/users/orca/stable/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Orca
                </a>{" "}
                - Screen reader for Linux/GNOME
              </li>
            </ul>
            <p>
              If you encounter any accessibility issues on our website, please contact us at{" "}
              <a href="mailto:accessibility@ksahc.karnataka.gov.in" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                accessibility@ksahc.karnataka.gov.in
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  )
}
