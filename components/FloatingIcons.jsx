'use client'

export default function FloatingIcons() {
  return (
    <>
      {/* Top-right glow */}
      <div className="fixed top-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-500 opacity-20 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />

      {/* Bottom-left glow */}
      <div className="fixed bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
    </>
  )
}
