import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <h1 className="text-7xl font-bold font-display text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg">
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </Link>
      </Button>
    </div>
  );
}
