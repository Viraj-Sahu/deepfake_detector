
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import AnimatedElement from './AnimatedElement';
import { toast } from 'react-toastify';

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { // 50MB
        toast({
          title: "Error",
          description: "File size must be less than 50MB",
          duration: 5000,
        });
        return;
      }
      const fileType = file.type.toLowerCase();
      if (!fileType.match(/^(image\/(jpeg|png)|video\/(mp4|quicktime))$/)) {
        toast({
          title: "Error",
          description: "Unsupported file type. Please upload .jpg, .png, .mp4, or .mov files only.",
          duration: 5000,
        });
        return;
      }
      setSelectedFile(file);
      toast({
        title: "Success",
        description: `File "${file.name}" selected successfully`,
        duration: 3000,
      });
    }
  };
  
  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="verif-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedElement animation="fade-in-right" className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold">Try Our <span className="text-gradient">Demo</span></h2>
              <p className="text-muted-foreground">
                Experience Verif.ai's deepfake detection technology firsthand by uploading a video or image file.
              </p>
            </div>
            
            <Card className="border-border/50 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Upload Media for Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Our AI will analyze your content and provide a detailed report on its authenticity.
                    </p>
                  </div>
                  
                  <div className="bg-muted/30 border-2 border-dashed border-muted rounded-lg p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center">
                      <svg className="w-8 h-8 text-verif-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Drag and drop your file here or</p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        accept=".jpg,.jpeg,.png,.mp4,.mov"
                        className="hidden"
                      />
                      <Button variant="link" className="text-verif-blue" onClick={handleBrowseClick}>Browse files</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Supports: .jpg, .png, .mp4, .mov (Max size: 50MB)
                    </p>
                  </div>
                  
                  <Button className="w-full bg-verif-blue hover:bg-verif-lightBlue">
                    Analyze Media
                  </Button>
                </div>
                
                <div className="bg-accent p-6 border-t border-border/50">
                  <div className="flex items-center space-x-2 text-sm">
                    <svg className="w-4 h-4 text-verif-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted-foreground">Your privacy is important to us. Uploaded files are not stored after analysis.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in-left" className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold">Get in <span className="text-gradient">Touch</span></h2>
              <p className="text-muted-foreground">
                Have questions about our technology or interested in collaboration? Reach out to us.
              </p>
            </div>
            
            <Card className="border-border/50 shadow-md">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What's this about?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message..." className="min-h-32" required />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-verif-blue hover:bg-verif-lightBlue" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                For direct inquiries: <span className="text-verif-blue font-medium">team@galacticcodebreakers.com</span>
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
