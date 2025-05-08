
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// This would typically come from a backend or CMS
const projectsData = [
  {
    id: "1",
    title: "E-commerce Website Redesign",
    client: "Fashion Retailer",
    date: "March 2024",
    duration: "3 months",
    description: "A complete overhaul of an online store with a focus on improving user experience and conversion rates.",
    challenge: "The client's existing e-commerce platform was outdated, difficult to navigate, and had a high cart abandonment rate of 76%. Mobile users in particular were struggling to complete purchases, with conversion rates 40% lower than desktop users.",
    solution: "I developed a responsive design system that prioritized the mobile shopping experience while maintaining consistency across devices. The redesign included a streamlined checkout process, improved product filtering, and enhanced product visualization tools.",
    approach: [
      "Conducted extensive user research including interviews with 24 customers and analysis of site analytics",
      "Created user personas and journey maps to identify pain points",
      "Developed wireframes and high-fidelity prototypes",
      "Conducted usability testing with 15 users",
      "Collaborated with development team on implementation"
    ],
    results: [
      "Reduced cart abandonment rate by 28%",
      "Increased mobile conversion rate by 42%",
      "Improved average time-on-site by 3 minutes",
      "Increased average order value by 15%"
    ],
    technologies: ["Figma", "Shopify", "HTML/CSS", "JavaScript", "Google Analytics"],
    testimonial: {
      quote: "The redesign completely transformed our online store. Our customers love the new experience, and we've seen a significant increase in sales as a result.",
      author: "Sarah Johnson, Marketing Director"
    },
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1649099359256-10378a42b9e0?q=80&w=1000&auto=format&fit=crop",
    ],
    tags: ["UI/UX", "Web Design", "Shopify"],
    category: "Design"
  },
  {
    id: "2",
    title: "Task Management Application",
    client: "Tech Startup",
    date: "January 2024",
    duration: "4 months",
    description: "A React-based task management application with a clean UI and powerful organization features.",
    challenge: "The client needed a custom task management solution that would integrate with their existing systems and provide features not available in off-the-shelf solutions. Team members were using multiple disconnected tools, leading to inefficiency and missed deadlines.",
    solution: "I designed and developed a custom React application that centralized task management, provided real-time updates, and featured an intuitive drag-and-drop interface. The application included custom reporting tools and integration with the client's communication platform.",
    approach: [
      "Gathered requirements through stakeholder interviews and workflow analysis",
      "Created a component-based design system for consistency and scalability",
      "Implemented state management using React Context and local storage",
      "Built custom data visualization components for the reporting dashboard",
      "Conducted iterative testing and refinement with the client team"
    ],
    results: [
      "Reduced time spent on task management by 35%",
      "Improved on-time task completion by 47%",
      "Consolidated 4 separate tools into one application",
      "Decreased onboarding time for new team members from 2 days to 3 hours"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
    testimonial: {
      quote: "This application transformed how our team works. Tasks that used to fall through the cracks are now completed on time, and we have much better visibility into our project status.",
      author: "Alex Chen, Project Manager"
    },
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571721795195-a2e9d5a262b3?q=80&w=1000&auto=format&fit=crop"
    ],
    tags: ["React", "TypeScript", "UI Design"],
    category: "Development"
  },
  {
    id: "3",
    title: "Brand Identity System",
    client: "Tech Startup",
    date: "November 2023",
    duration: "6 weeks",
    description: "A comprehensive brand identity system for a tech startup, including logo, color palette, and guidelines.",
    challenge: "The startup was preparing for a major funding round and product launch but had an inconsistent visual identity that didn't reflect their innovative technology or market position. They needed a complete brand overhaul on a tight timeline.",
    solution: "I developed a cohesive brand identity system that positioned them as a forward-thinking technology company while maintaining approachability. The system included a dynamic logo that could be animated for digital applications, a flexible color system, and comprehensive usage guidelines.",
    approach: [
      "Conducted brand discovery workshops with the founding team",
      "Researched competitor positioning and visual identities",
      "Explored multiple creative directions based on core brand attributes",
      "Refined the selected direction through iterative feedback",
      "Delivered a comprehensive brand guideline document and asset library"
    ],
    results: [
      "Successfully launched new brand alongside Series A funding announcement",
      "Received positive coverage in 3 industry publications specifically mentioning the rebrand",
      "Increased social media engagement by 78% following rebrand",
      "Improved brand recognition in user testing from 23% to 65%"
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "After Effects"],
    testimonial: {
      quote: "Our new brand identity perfectly captures who we are and where we're going. It's made a huge difference in how potential investors and customers perceive our company.",
      author: "Michael Rivera, CEO"
    },
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1000&auto=format&fit=crop"
    ],
    tags: ["Branding", "Logo Design", "Guidelines"],
    category: "Design"
  },
  {
    id: "4",
    title: "Interactive Data Dashboard",
    client: "Financial Services Firm",
    date: "October 2023",
    duration: "2 months",
    description: "A responsive dashboard that visualizes complex data in an intuitive and engaging way.",
    challenge: "The client had vast amounts of financial data that was difficult to interpret through existing spreadsheet-based reporting. Decision-makers needed a way to quickly understand trends, identify outliers, and make data-driven decisions without requiring advanced technical skills.",
    solution: "I designed and built a custom interactive dashboard that transformed their raw data into intuitive visualizations. The solution included customizable views, real-time filtering, and shareable reports, all optimized for both desktop and mobile devices.",
    approach: [
      "Analyzed data structure and reporting requirements",
      "Created low-fidelity wireframes to explore different visualization approaches",
      "Built interactive prototypes to test usability with end-users",
      "Implemented the solution using React and D3.js",
      "Provided training and documentation for ongoing maintenance"
    ],
    results: [
      "Reduced time to generate reports from 5 hours to 30 minutes",
      "Increased data-based decision making by 65% across the organization",
      "Saved an estimated 20 hours per week of analyst time",
      "Improved client satisfaction scores for reporting by 40%"
    ],
    technologies: ["React", "D3.js", "TypeScript", "REST API", "Recharts"],
    testimonial: {
      quote: "This dashboard has revolutionized how we use our data. What used to take days of analysis can now be understood at a glance, allowing us to make faster, better decisions.",
      author: "Jennifer Walsh, Chief Financial Officer"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    ],
    tags: ["React", "D3.js", "Dashboard Design"],
    category: "Development"
  },
  {
    id: "5",
    title: "Mobile App Design",
    client: "Fitness Company",
    date: "August 2023",
    duration: "3 months",
    description: "A sleek and intuitive mobile app design for a fitness tracking application.",
    challenge: "The client was entering the competitive fitness app market and needed a distinctive design that would stand out while being highly usable for people of all fitness levels. They wanted to emphasize accessibility while maintaining a premium feel.",
    solution: "I created a clean, motivational design system with a focus on progress visualization and achievement celebration. The interface featured customizable dashboards, intuitive workout builders, and social sharing capabilities, all with a consistent design language.",
    approach: [
      "Conducted competitive analysis of top fitness applications",
      "Created user personas representing different fitness levels and goals",
      "Designed a custom icon set and illustration style",
      "Developed a comprehensive UI kit for faster development",
      "Tested prototypes with users of varying fitness experience"
    ],
    results: [
      "Achieved an average app store rating of 4.8/5 at launch",
      "Featured in Apple's 'New Apps We Love' section",
      "91% of users rated the app 'very easy' or 'easy' to use",
      "Retention rate 35% higher than industry average after 30 days"
    ],
    technologies: ["Figma", "Sketch", "Adobe Illustrator", "Principle", "ProtoPie"],
    testimonial: {
      quote: "The design perfectly balances functionality with motivation. Our users consistently mention how much they enjoy using the app, which has been key to our retention success.",
      author: "David Park, Product Manager"
    },
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601784551606-1f9e1cecb4ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621274282490-c5bbbc90de31?q=80&w=1000&auto=format&fit=crop"
    ],
    tags: ["Mobile Design", "UI/UX", "Figma"],
    category: "Design"
  },
  {
    id: "6",
    title: "Community Forum",
    client: "Educational Platform",
    date: "June 2023",
    duration: "2.5 months",
    description: "A dynamic forum platform built with React and Firebase for real-time discussions.",
    challenge: "The client's online courses lacked a sense of community and peer support. Students had no way to connect with each other, ask questions, or share resources, leading to higher dropout rates and lower course satisfaction.",
    solution: "I developed a real-time community forum integrated directly with their course platform. The forum featured course-specific sections, direct messaging, instructor highlights, and a reputation system to encourage quality contributions.",
    approach: [
      "Analyzed existing community platforms and identified core features",
      "Created an information architecture to organize discussions logically",
      "Designed an interface that balanced simplicity with powerful features",
      "Implemented using React for the frontend and Firebase for real-time functionality",
      "Iterated based on beta testing with a select group of students"
    ],
    results: [
      "Decreased course dropout rate by 23%",
      "Increased average course satisfaction ratings from 4.1 to 4.7/5",
      "Generated 3,200+ discussion threads in the first month",
      "Improved instructor response time from 24 hours to 4 hours"
    ],
    technologies: ["React", "Firebase", "Firestore", "TypeScript", "Material UI"],
    testimonial: {
      quote: "The forum has completely transformed our learning community. Students are supporting each other, sharing resources, and feeling connected in ways that weren't possible before.",
      author: "Laura Martinez, Director of Education"
    },
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591522811280-a8759970b03f?q=80&w=1000&auto=format&fit=crop"
    ],
    tags: ["React", "Firebase", "Community"],
    category: "Development"
  }
];

interface ProjectCaseStudyProps {
  projectId?: string;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ projectId }) => {
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (projectId) {
      // In a real app, this would be an API call
      const foundProject = projectsData.find(p => p.id === projectId);
      setProject(foundProject || null);
      
      // Get related projects (same category)
      if (foundProject) {
        const related = projectsData
          .filter(p => p.category === foundProject.category && p.id !== foundProject.id)
          .slice(0, 2);
        setRelatedProjects(related);
      }
      
      setLoading(false);
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="h-8 w-8 border-4 border-highlight border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-400">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/projects')} variant="default" className="bg-highlight hover:bg-highlight/90">
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <section className="py-16">
      {/* Back button */}
      <Button 
        variant="ghost" 
        className="mb-8 text-gray-400 hover:text-white"
        onClick={() => navigate('/projects')}
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Projects
      </Button>
      
      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <div className="h-1 w-20 bg-highlight mb-6"></div>
        <p className="text-gray-400 text-lg mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-dark-secondary rounded-full text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
          <div className="flex items-center">
            <User size={18} className="mr-2 text-highlight" />
            <span>Client: {project.client}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="mr-2 text-highlight" />
            <span>Date: {project.date}</span>
          </div>
          <div>
            <span className="font-medium">Duration:</span> {project.duration}
          </div>
        </div>
      </div>
      
      {/* Main Image */}
      <div className="rounded-lg overflow-hidden mb-12">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Project Details */}
      <Tabs defaultValue="overview" className="mb-16">
        <TabsList className="bg-dark-secondary w-full justify-start mb-8 border-b border-gray-800 rounded-none p-0">
          <TabsTrigger value="overview" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-highlight data-[state=active]:border-b-2 data-[state=active]:border-highlight data-[state=active]:shadow-none px-6 py-3">
            Overview
          </TabsTrigger>
          <TabsTrigger value="approach" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-highlight data-[state=active]:border-b-2 data-[state=active]:border-highlight data-[state=active]:shadow-none px-6 py-3">
            Approach
          </TabsTrigger>
          <TabsTrigger value="results" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-highlight data-[state=active]:border-b-2 data-[state=active]:border-highlight data-[state=active]:shadow-none px-6 py-3">
            Results
          </TabsTrigger>
          <TabsTrigger value="gallery" className="rounded-none data-[state=active]:bg-transparent data-[state=active]:text-highlight data-[state=active]:border-b-2 data-[state=active]:border-highlight data-[state=active]:shadow-none px-6 py-3">
            Gallery
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-0">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-dark-secondary rounded-lg text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Testimonial */}
            <Card className="bg-dark-secondary border-none mt-8">
              <CardContent className="pt-6">
                <blockquote className="italic text-lg text-gray-300 mb-4">"{project.testimonial.quote}"</blockquote>
                <p className="text-highlight font-medium">— {project.testimonial.author}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="approach" className="mt-0">
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Approach</h2>
            <ol className="space-y-6">
              {project.approach.map((step: string, index: number) => (
                <li key={index} className="flex">
                  <div className="mr-4 h-8 w-8 flex-shrink-0 rounded-full bg-highlight flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-gray-300">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </TabsContent>
        
        <TabsContent value="results" className="mt-0">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result: string, index: number) => (
                  <Card key={index} className="bg-dark-secondary border-none">
                    <CardContent className="p-6">
                      <p className="text-gray-300">{result}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800">
                    <TableHead className="text-gray-300">Technology</TableHead>
                    <TableHead className="text-gray-300">Purpose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {project.technologies.map((tech: string, index: number) => (
                    <TableRow key={index} className="border-gray-800">
                      <TableCell className="font-medium text-white">{tech}</TableCell>
                      <TableCell className="text-gray-400">
                        {
                          {
                            "React": "Frontend user interface development",
                            "TypeScript": "Type-safe JavaScript development",
                            "Figma": "UI/UX design and prototyping",
                            "D3.js": "Data visualization",
                            "Firebase": "Backend and real-time database",
                            "Firestore": "NoSQL cloud database",
                            "REST API": "Data communication",
                            "Shopify": "E-commerce platform",
                            "HTML/CSS": "Website markup and styling",
                            "JavaScript": "Interactive functionality",
                            "Google Analytics": "User behavior tracking",
                            "Chart.js": "Data visualization",
                            "Adobe Illustrator": "Vector graphics and illustration",
                            "Adobe Photoshop": "Image editing and manipulation",
                            "After Effects": "Motion graphics and animation",
                            "Sketch": "UI design and prototyping",
                            "Principle": "Interactive UI animations",
                            "ProtoPie": "Complex interactive prototyping",
                            "Material UI": "React component library",
                            "Recharts": "React charting library"
                          }[tech] || "Supporting technology"
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="gallery" className="mt-0">
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image: string, index: number) => (
                <div key={index} className="rounded-lg overflow-hidden bg-dark-secondary group">
                  <div className="overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="border-t border-gray-800 pt-12 mt-12">
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((relatedProject) => (
              <div 
                key={relatedProject.id} 
                className="bg-dark-secondary rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
                onClick={() => navigate(`/projects/${relatedProject.id}`)}
              >
                <div 
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${relatedProject.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedProject.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{relatedProject.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {relatedProject.tags.slice(0, 3).map((tag: string) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-dark-accent rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <span className="inline-flex items-center text-highlight">
                    View Case Study
                    <ArrowRight size={16} className="ml-2" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Navigation buttons */}
      <div className="flex justify-between mt-16">
        <Button 
          variant="outline" 
          className="border-gray-700 text-gray-400 hover:text-white hover:bg-dark-secondary"
          onClick={() => {
            const currentIndex = projectsData.findIndex(p => p.id === projectId);
            if (currentIndex > 0) {
              navigate(`/projects/${projectsData[currentIndex - 1].id}`);
            }
          }}
          disabled={projectsData.findIndex(p => p.id === projectId) === 0}
        >
          <ArrowLeft size={16} className="mr-2" />
          Previous Project
        </Button>
        <Button 
          variant="outline" 
          className="border-gray-700 text-gray-400 hover:text-white hover:bg-dark-secondary"
          onClick={() => {
            const currentIndex = projectsData.findIndex(p => p.id === projectId);
            if (currentIndex < projectsData.length - 1) {
              navigate(`/projects/${projectsData[currentIndex + 1].id}`);
            }
          }}
          disabled={projectsData.findIndex(p => p.id === projectId) === projectsData.length - 1}
        >
          Next Project
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default ProjectCaseStudy;
