import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/history"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/history") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Assessment History
          </Link>
          <Link
            to="/risk-factors"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/risk-factors") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Risk Factors
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;