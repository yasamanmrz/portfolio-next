
import './globals.css'

export const metadata = {
  title: 'Yasaman | Frontend Developer',
  description: 'Personal portfolio of Yasaman, a Frontend Developer'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
