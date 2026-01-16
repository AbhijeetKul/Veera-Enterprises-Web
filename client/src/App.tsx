import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import RetailKolhapur from "@/pages/RetailKolhapur";
import RetailPune from "@/pages/RetailPune";
import Wholesale from "@/pages/Wholesale";
import DigitalCard from "@/pages/DigitalCard";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/retail-kolhapur" component={RetailKolhapur} />
      <Route path="/retail-pune" component={RetailPune} />
      <Route path="/wholesale" component={Wholesale} />
      <Route path="/card" component={DigitalCard} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
