import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // Removed DialogTrigger as the parent controls the open state
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast"; // Corrected import path

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteFormModal: React.FC<QuoteFormModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    projectType: '',
    projectDetails: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder for sending data
    console.log("Form Data:", formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Quote Request Sent!",
      description: "We have received your request and will be in touch shortly.",
    });

    setFormData({
      name: '',
      email: '',
      mobile: '',
      projectType: '',
      projectDetails: '',
      budget: '',
    });
    setIsSubmitting(false);
    onClose(); // Close modal after submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}> {/* Use isOpen and onClose props */}
      <DialogContent className="bg-codenity-dark text-white border border-codenity-accent/20 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="gradient-text">Get a Free Quote</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below to get a personalized quote for your project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-gray-400">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="col-span-3 bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right text-gray-400">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="col-span-3 bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right text-gray-400">
              Mobile
            </Label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              className="col-span-3 bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="projectType" className="text-right text-gray-400">
              Project Type
            </Label>
            <Select onValueChange={handleSelectChange} value={formData.projectType} required>
              <SelectTrigger className="col-span-3 bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-codenity-dark border-codenity-accent/30 text-white">
                <SelectItem value="landing-page">Landing Page</SelectItem>
                <SelectItem value="web-app">Web App</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="projectDetails" className="text-right text-gray-400">
              Details
            </Label>
            <Textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              className="col-span-3 bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent min-h-[100px]"
            />
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="budget" className="text-right text-gray-400">
              Budget (Optional)
            </Label>
            <Input
              id="budget"
              name="budget"
              type="text" // Use text to allow for ranges or descriptions
              value={formData.budget}
              onChange={handleChange}
              className="col-span-3 bg-codenity-darker border-codenity-accent/30 focus:border-codenity-accent"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-codenity-accent to-codenity-accent2 hover:opacity-90 transition-opacity mt-4"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;