"use client"

import { useState } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Eye, Minus, Plus, RotateCcw } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function TopBar() {
  const [fontSize, setFontSize] = useState(16)
  const [isScreenReaderOpen, setIsScreenReaderOpen] = useState(false)

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 1, 20))
    document.documentElement.style.fontSize = `${fontSize + 1}px`
  }

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 1, 12))
    document.documentElement.style.fontSize = `${fontSize - 1}px`
  }

  const resetFontSize = () => {
    setFontSize(16)
    document.documentElement.style.fontSize = "16px"
  }

  return (
    <div className="bg-ksahc-blue text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm hover:underline">
            LOGIN
          </Link>
          <div className="h-4 border-l border-white/30"></div>
          <Link href="/kannada" className="text-sm hover:underline">
            ಕನ್ನಡ
          </Link>
          <div className="h-4 border-l border-white/30"></div>
          <button className="text-sm hover:underline flex items-center" onClick={() => setIsScreenReaderOpen(true)}>
            <Eye className="h-4 w-4 mr-1" /> VISUALLY CHALLENGED
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          <div className="font-size-controls flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:text-white hover:bg-white/20"
              onClick={decreaseFontSize}
              title="Decrease Font Size"
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease Font Size</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:text-white hover:bg-white/20"
              onClick={resetFontSize}
              title="Reset Font Size"
            >
              <RotateCcw className="h-3 w-3" />
              <span className="sr-only">Reset Font Size</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white hover:text-white hover:bg-white/20"
              onClick={increaseFontSize}
              title="Increase Font Size"
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase Font Size</span>
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isScreenReaderOpen} onOpenChange={setIsScreenReaderOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Screen Reader Information</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>
              This website is designed to be accessible to all users, including those who use screen readers. We follow
              WCAG 2.1 guidelines to ensure our content is perceivable, operable, understandable, and robust.
            </p>
            <h3 className="text-lg font-medium">Recommended Screen Readers</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a
                  href="https://www.nvaccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
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
                  className="text-primary hover:underline"
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
                  className="text-primary hover:underline"
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
                  className="text-primary hover:underline"
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
                  className="text-primary hover:underline"
                >
                  Orca
                </a>{" "}
                - Screen reader for Linux/GNOME
              </li>
            </ul>
            <p>
              If you encounter any accessibility issues on our website, please contact us at{" "}
              <a href="mailto:accessibility@ksahc.karnataka.gov.in" className="text-primary hover:underline">
                accessibility@ksahc.karnataka.gov.in
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
