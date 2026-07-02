import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import People from "./pages/People";
import Jobs from "./pages/Jobs";
import AiScientist from "./pages/jobs/AiScientist";
import PostdocHumanGenetics from "./pages/jobs/PostdocHumanGenetics";
import PostdocMlHealth from "./pages/jobs/PostdocMlHealth";
import PhdStudents from "./pages/jobs/PhdStudents";
import OpenApplication from "./pages/jobs/OpenApplication";
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
          <Route path="/jobs/postdoc-human-genetics" element={<PostdocHumanGenetics />} />
          <Route path="/jobs/postdoc-ml-health" element={<PostdocMlHealth />} />
          <Route path="/jobs/phd-students" element={<PhdStudents />} />
          <Route path="/jobs/open-application" element={<OpenApplication />} />
          <Route path="/software" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
