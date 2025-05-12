"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { MessageSquare } from "lucide-react"

export function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log({ name, email, feedback })
    setIsSubmitted(true)

    // Reset form after 3 seconds and close dialog
    setTimeout(() => {
      setName("")
      setEmail("")
      setFeedback("")
      setIsSubmitted(false)
      setIsOpen(false)
    }, 3000)
  }

  return (
    <>
      <Button
        className="fixed right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right bg-ksahc-blue hover:bg-ksahc-lightBlue"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-4 w-4 mr-2" /> Feedback
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Provide Feedback</DialogTitle>
          </DialogHeader>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium">Thank you for your feedback!</h3>
              <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                Your feedback has been submitted successfully. We appreciate your input.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="feedback">Your Feedback</Label>
                <Textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
