"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const allReviews = [
  {
    name: "Ahmed Ali",
    role: "YouTube Creator",
    rating: 5,
    review: "Yeh course bohot hi useful hai! Strategies clear hain aur kaam karti hain. Maine pehla $1000 sirf 30 din mein kamaya.",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // boy image
  },
  {
    name: "Fatima Khan",
    role: "Digital Marketer",
    rating: 5,
    review: "Sab se acha investment jo maine kiya. Mentorship support unmatched hai. YouTube automation mein serious logon ko recommend karungi.",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // girl image
  },
  {
    name: "Hassan Raza",
    role: "Entrepreneur",
    rating: 5,
    review: "Aakhirkar, ek course jo apne promises deliver karta hai! Algorithm hacking module hi 10x price ke worth hai. Ab $2K/month kama raha hoon.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Ayesha Malik",
    role: "Content Creator",
    rating: 5,
    review: "Shuru mein thoda skeptical tha, lekin results khud bolte hain. Mera pehla channel 2 mahine mein 50K subscribers par pohanch gaya. Amazing!",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // aur baki reviews ke liye bhi aise images laga do
];
