import { Nav } from "@/components";
import "@/styles/global.css";

export const metadata = {
  title: "AI-Powered Next.js Application",
  description: "Modern full-stack Next 14 application"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;