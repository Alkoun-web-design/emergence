'use client'

import { motion } from "motion/react"

export default function BackgroundAnimation() {
  return (
    <div className="flex flex-row justify-around items-end h-full">
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-6 w-6 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 17,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-4 w-4 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 14,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-3 w-3 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-5 w-5 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-4 w-4 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-3 w-3 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-6 w-6 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 17,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-5 w-5 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 14,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-5 w-5 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 18,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-6 w-6 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-4 w-4 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 16,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-5 w-5 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-3 w-3 rounded-full">
        </motion.div>
        <motion.div 
            initial={{ y: 20 }} 
            animate={{ y: -900 }} 
            transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
                // repeatDelay: 1,
            }} 
            className="bg-linear-to-t from-white via-lime-100 h-5 w-5 rounded-full">
        </motion.div>
    </div>
  )
}