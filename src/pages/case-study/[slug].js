import { useRouter } from 'next/router';

export default function CaseStudy() {
  const router = useRouter();
  const { slug } = router.query; // Accessing the dynamic slug from the URL

  // For now, you can use the slug to display which project is being viewed
  // You can replace this with dynamic data fetching from your CMS or API
  const caseStudyData = {
    "rehabs-autism-treatment-app": {
      title: "Rehabs - Autism Treatment App",
      description: "This case study goes over the challenges and solutions for developing a React Native app designed for autistic children and ADHD therapy."
    },
    "linkedIn-sales-navigator-scraper": {
      title: "LinkedIn Sales Navigator Scraper",
      description: "Details on creating a high-performance Chrome extension for scraping LinkedIn leads and exporting them as PDFs."
    },
    "inventory-pos-system": {
      title: "Inventory & POS System",
      description: "Explore how I built a multi-store, scalable inventory and point-of-sale system with integrated appointment scheduling."
    }
  };

  const projectData = caseStudyData[slug];

  if (!projectData) {
    return <p>Case study not found!</p>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">{projectData.title} Case Study</h1>
      <p className="text-lg text-gray-700">{projectData.description}</p>
      {/* Add more project-specific details here */}
    </div>
  );
}
