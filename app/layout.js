import "./globals.scss";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import ChatBot from "./components/ChatBot/ChatBot";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChatBot />
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
