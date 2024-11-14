import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {isAuthenticated ? (
              <>
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
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-muted-foreground"
              >
                Stroke Risk Assessment
              </Link>
            )}
          </div>
          <div>
            {isAuthenticated ? (
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            ) : (
              <div className="space-x-4">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;