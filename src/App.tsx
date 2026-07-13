import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import People from "./pages/People";
import Jobs from "./pages/Jobs";
import AiScientist from "./pages/jobs/AiScientist";
import PostdocStatisticalGenetics from "./pages/jobs/PostdocStatisticalGenetics";
import PostdocAiBiomedicine from "./pages/jobs/PostdocAiBiomedicine";
import Software from "./pages/Software";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/team" element={<People />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/ai-scientist" element={<AiScientist />} />
          <Route path="/jobs/postdoc-statistical-genetics" element={<PostdocStatisticalGenetics />} />
          <Route path="/jobs/postdoc-ai-biomedicine" element={<PostdocAiBiomedicine />} />
          <Route path="/software" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
