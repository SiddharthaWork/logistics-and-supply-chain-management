import React from 'react'
import Link from 'next/link'
import { Phone, Instagram, Youtube, Linkedin, Facebook, X, Twitch, Mail, MapPin } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-[#14142B] w-full h-full text-white py-16 pt-44 pb-8 relative overflow-hidden">
      <div className="absolute w-full h-full md:left-[45%] right-0 top-12 left-[35%]">
        <img src="/logo.svg" alt=""  />
      </div>
      <div className="absolute left-[80.83%] right-[-10.24%] top-[-27.54%]">
        <img
          src="circle.png"
          alt=""
          className="sm:hidden md:block"
        />
      </div>

      <div className="absolute left-[-6.25%] right-[90.49%] top-[76.53%] bottom-[-23.32%] opacity-35 z-20">
        <img
          src="circle2.png"
          alt=""
          className="xs:hidden md:block"
        />
      </div>

      <div className="container mx-auto px-6 md:px-[250px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 smtab:gap-16 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-6">SERVICE</h3>
            <ul className="space-y-4">
              <li>Brand Identity Design</li>
              <li>CMS Web Development</li>
              <li>Corporate Website Design</li>
              <li>Dynamic Web Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">COMPANY</h3>
            <ul className="space-y-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/jobs">Job Openings</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Sajha Basti, Baneshwor, Nepal
              </li>
              <li>
                <Link href="mailto:enquiry@webstudionepal.com" className="flex items-center gap-2 hover:underline">
                  <span className="text-white flex justify-center gap-2">
                    <Mail className='flex' /> enquiry@webstudionepal.com
                  </span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +977-9802346665
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" color='green'>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                +977 9703958747
              </li>
            </ul>
          </div>
        </div>


        <div className='w-full mx-auto my-8'>
          <hr className='w-full opacity-25' />
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <Link href="#" className="hover:opacity-80">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Youtube className="w-6 h-6" />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Twitch className='w-6 h-6' />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <FaXTwitter className='w-6 h-6' />
          </Link>
          <Link href="#" className='hover:opacity-80'>
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="#" className="hover:opacity-80">
            <Facebook className="w-6 h-6" />
          </Link>
        </div>
        <div>
          <p className="mt-4 text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} DevOps Studio Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer