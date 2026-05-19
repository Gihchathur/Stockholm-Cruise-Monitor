import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="text-7xl"
      >
        🚢
      </motion.div>

      <h1 className="text-4xl font-black mt-8 gradient-text">
        Loading Cruise Data
      </h1>

      <div className="mt-10 w-72 h-3 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="w-1/2 h-full bg-cyan-400"
        />
      </div>
    </div>
  )
}