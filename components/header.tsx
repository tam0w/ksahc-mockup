"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Info, AlertCircle } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const showWorkInProgress = (e: React.MouseEvent) => {
    e.preventDefault()
    toast({
      title: "Work in Progress",
      description: "This page is currently under development. Please check back later.",
      variant: "default",
      action: (
        <div className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
        </div>
      ),
    })
  }

  const isPageReady = (path: string) => {
    const readyPages = ['/', '/about', '/resources/forms', '/contact']
    return readyPages.includes(path)
  }

  const handleNavigation = (path: string, e: React.MouseEvent) => {
    if (!isPageReady(path)) {
      showWorkInProgress(e)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:block">
              <Image
                src="/images/cm-photo.jpg"
                alt="Chief Minister of Karnataka"
                width={80}
                height={80}
                className="rounded-md"
              />
              <p className="text-xs text-center mt-1">Hon'ble Chief Minister</p>
              <p className="text-xs text-center">Govt. of Karnataka</p>
            </div>

            <div className="flex items-center">
              <Image src="/images/karnataka-emblem.png" alt="Karnataka Emblem" width={60} height={60} />
              <div className="ml-4">
                <h1 className="text-lg md:text-xl font-bold">Karnataka State Allied & Healthcare Council</h1>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Medical Education Department, Government of Karnataka
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <Image
                src="/images/minister-photo.jpg"
                alt="Minister for Medical Education"
                width={80}
                height={80}
                className="rounded-md"
              />
              <p className="text-xs text-center mt-1">Hon'ble Minister</p>
              <p className="text-xs text-center">Medical Education</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ksahc-blue text-indigo-900">
        <div className="container mx-auto">
          <div className="flex h-14 items-center justify-between">
            <nav className="hidden md:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle() + " hover:text-white hover:bg-white/10"}>
                        <Home className="h-4 w-4 mr-1" />
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle() + " hover:text-white hover:bg-white/10"}>ABOUT US</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>MEMBERS</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/members"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => handleNavigation('/members', e)}
                            >
                              <div className="text-sm font-medium leading-none">Council Members</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                View all members of the Karnataka State Allied & Healthcare Council
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>SERVICES OFFERED</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services/registration"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => handleNavigation('/services/registration', e)}
                            >
                              <div className="text-sm font-medium leading-none">Registration</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Register as a healthcare professional
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services/verification"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => handleNavigation('/services/verification', e)}
                            >
                              <div className="text-sm font-medium leading-none">Verification</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Verify healthcare professional credentials
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services/education"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => handleNavigation('/services/education', e)}
                            >
                              <div className="text-sm font-medium leading-none">Education</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Approved courses and institutions
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services/guidelines"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => handleNavigation('/services/guidelines', e)}
                            >
                              <div className="text-sm font-medium leading-none">Guidelines</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Professional practice guidelines
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>DOWNLOADS & RESOURCES</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/resources/forms"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Forms</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Download registration and other forms
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/resources/acts-rules"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => handleNavigation('/resources/acts-rules', e)}
                            >
                              <div className="text-sm font-medium leading-none">Acts & Rules</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Acts, rules and regulations
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/resources/circulars"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => handleNavigation('/resources/circulars', e)}
                            >
                              <div className="text-sm font-medium leading-none">Circulars</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Official circulars and notifications
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/resources/gallery"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={(e) => handleNavigation('/resources/gallery', e)}
                            >
                              <div className="text-sm font-medium leading-none">Gallery</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Photos and videos of events
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/faqs" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQs</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>CONTACT US</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            <div className="flex items-center gap-2">
              <Link href="/login" className="hidden md:block">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/50 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-200"
                >
                  LOGIN
                </Button>
              </Link>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden text-white/90 border-white/50 hover:bg-white/10 hover:text-white hover:border-white transition-all duration-200"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="grid gap-4 py-4">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <Image src="/images/karnataka-emblem.png" alt="Karnataka Emblem" width={40} height={40} />
                      <div className="text-sm font-medium">
                        <div>Karnataka State Allied & Healthcare Council</div>
                      </div>
                    </Link>
                    <div className="grid gap-2">
                      <Link href="/" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Home className="h-4 w-4 mr-2" /> Home
                        </Button>
                      </Link>
                      <Link href="/about" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          About Us
                        </Button>
                      </Link>
                      <Link href="/members" onClick={(e) => {
                        setIsOpen(false)
                        handleNavigation('/members', e)
                      }}>
                        <Button variant="ghost" className="w-full justify-start">
                          Members
                        </Button>
                      </Link>
                      <Link href="/services/registration" onClick={(e) => {
                        setIsOpen(false)
                        handleNavigation('/services/registration', e)
                      }}>
                        <Button variant="ghost" className="w-full justify-start">
                          Services Offered
                        </Button>
                      </Link>
                      <Link href="/resources/forms" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          Downloads & Resources
                        </Button>
                      </Link>
                      <Link href="/faqs" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          FAQs
                        </Button>
                      </Link>
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          Contact Us
                        </Button>
                      </Link>
                      <Link href="/login" onClick={(e) => {
                        setIsOpen(false)
                        handleNavigation('/login', e)
                      }}>
                        <Button variant="ghost" className="w-full justify-start">
                          Login
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
