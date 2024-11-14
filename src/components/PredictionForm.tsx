import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    hypertension: "0",
    heartDisease: "0",
    glucose: "",
    bmi: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API
    const riskScore = Math.random() * 100;
    toast.success("Prediction completed", {
      description: `Your stroke risk score is ${riskScore.toFixed(1)}%`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="input-field"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="glucose">Average Glucose Level</Label>
            <Input
              id="glucose"
              type="number"
              placeholder="mg/dL"
              value={formData.glucose}
              onChange={(e) => setFormData({ ...formData, glucose: e.target.value })}
              className="input-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bmi">BMI</Label>
            <Input
              id="bmi"
              type="number"
              placeholder="Enter your BMI"
              value={formData.bmi}
              onChange={(e) => setFormData({ ...formData, bmi: e.target.value })}
              className="input-field"
            />
          </div>
          <div className="space-y-2">
            <Label>Medical History</Label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.hypertension === "1"}
                  onChange={(e) => setFormData({ ...formData, hypertension: e.target.checked ? "1" : "0" })}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span>Hypertension</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.heartDisease === "1"}
                  onChange={(e) => setFormData({ ...formData, heartDisease: e.target.checked ? "1" : "0" })}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span>Heart Disease</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
        Calculate Risk
      </Button>
    </form>
  );
};

export default PredictionForm;