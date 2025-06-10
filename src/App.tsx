import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import ChatBubble from "./components/ChatBubble";
import FontPreloader from "./components/FontPreloader";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="rescuechat-theme">
      <FontPreloader>
        <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-emerald-950 dark:to-teal-950 transition-colors duration-500">
          <Navbar />
          <div id="home">
            <Hero />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="demo">
            <Demo />
          </div>
          <div id="team">
            <Footer />
          </div>
          <ChatBubble />
        </div>
      </FontPreloader>
    </ThemeProvider>
  );
}

export default App;
