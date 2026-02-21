import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Services
import WebDevelopment from "./pages/services/WebDevelopment";
import WebDesigning from "./pages/services/WebDesigning";
import Ecommerce from "./pages/services/Ecommerce";
import CMSDevelopment from "./pages/services/CMSDevelopment";
import CustomWebApps from "./pages/services/CustomWebApps";

// Digital Marketing
import SEO from "./pages/digital-marketing/SEO";
import SMM from "./pages/digital-marketing/SMM";
import PPC from "./pages/digital-marketing/PPC";
import ContentWriting from "./pages/digital-marketing/ContentWriting";

// DevOps
import AzureServices from "./pages/devops/AzureServices";
import AWSServices from "./pages/devops/AWSServices";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/web-designing" element={<WebDesigning />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/cms-development" element={<CMSDevelopment />} />
            <Route path="/services/custom-web-apps" element={<CustomWebApps />} />

            {/* Digital Marketing */}
            <Route path="/digital-marketing/seo" element={<SEO />} />
            <Route path="/digital-marketing/smm" element={<SMM />} />
            <Route path="/digital-marketing/ppc" element={<PPC />} />
            <Route path="/digital-marketing/content" element={<ContentWriting />} />

            {/* DevOps */}
            <Route path="/devops/azure" element={<AzureServices />} />
            <Route path="/devops/aws" element={<AWSServices />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
