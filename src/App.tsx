import React, { useState } from 'react';
import { useRouter } from './utils/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GiveawayModal } from './components/GiveawayModal';
import { BookOrderModal } from './components/BookOrderModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IsoTrainingPage } from './pages/IsoTrainingPage';
import { ZiglarTrainingPage } from './pages/ZiglarTrainingPage';
import { CoachingPage } from './pages/CoachingPage';
import { LifeLessonsPage } from './pages/LifeLessonsPage';
import { TrainingEventsPage } from './pages/TrainingEventsPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { ClientsPage } from './pages/ClientsPage';
import { WellnessPage } from './pages/WellnessPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { COURSES } from './data/courses';
import { ProductItem } from './data/products';

export default function App() {
  const { currentPath, navigate } = useRouter();
  const [giveawayOpen, setGiveawayOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setOrderModalOpen(true);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            navigate={navigate}
            onOpenGiveaway={() => setGiveawayOpen(true)}
            onSelectProduct={handleSelectProduct}
          />
        );

      case '/about':
        return (
          <AboutPage
            navigate={navigate}
            onOpenGiveaway={() => setGiveawayOpen(true)}
          />
        );

      case '/services':
        return <ServicesPage navigate={navigate} />;

      case '/services/iso-training-consulting':
        return (
          <IsoTrainingPage
            navigate={navigate}
            onOpenGiveaway={() => setGiveawayOpen(true)}
          />
        );

      case '/services/ziglar-training':
        return (
          <ZiglarTrainingPage
            navigate={navigate}
            onOpenGiveaway={() => setGiveawayOpen(true)}
          />
        );

      case '/services/coaching':
        return (
          <CoachingPage
            navigate={navigate}
            onOpenGiveaway={() => setGiveawayOpen(true)}
          />
        );

      case '/services/life-lessons':
        return <LifeLessonsPage navigate={navigate} />;

      case '/training':
        return (
          <TrainingEventsPage
            navigate={navigate}
            onOpenGiveaway={() => setGiveawayOpen(true)}
          />
        );

      case '/training/lead-auditor':
      case '/training/internal-auditor':
      case '/training/goal-setting':
      case '/training/building-the-best-you':
      case '/training/building-winning-relationships':
      case '/training/two-chairs':
      case '/training/power-of-who':
      case '/training/watch-me-train': {
        const slug = currentPath.replace('/training/', '');
        const found = COURSES.find((c) => c.slug === slug);
        if (found) {
          return (
            <CourseDetailPage
              course={found}
              navigate={navigate}
              onOpenGiveaway={() => setGiveawayOpen(true)}
            />
          );
        }
        return <TrainingEventsPage navigate={navigate} onOpenGiveaway={() => setGiveawayOpen(true)} />;
      }

      case '/products':
        return (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onOpenGiveaway={() => setGiveawayOpen(true)}
          />
        );

      case '/clients':
        return <ClientsPage navigate={navigate} />;

      case '/wellness':
        return <WellnessPage navigate={navigate} />;

      case '/contact':
        return <ContactPage onOpenGiveaway={() => setGiveawayOpen(true)} />;

      case '/privacy':
        return <LegalPage type="privacy" />;

      case '/terms':
        return <LegalPage type="terms" />;

      default:
        return (
          <HomePage
            navigate={navigate}
            onOpenGiveaway={() => setGiveawayOpen(true)}
            onSelectProduct={handleSelectProduct}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8] text-[#14181f] selection:bg-[#1a365d] selection:text-white">
      {/* Primary Sticky Top Bar */}
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        onOpenGiveaway={() => setGiveawayOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">{renderContent()}</main>

      {/* Authoritative Consulting Footer */}
      <Footer
        navigate={navigate}
        onOpenGiveaway={() => setGiveawayOpen(true)}
      />

      {/* Free Resource Giveaway Modal */}
      <GiveawayModal
        isOpen={giveawayOpen}
        onClose={() => setGiveawayOpen(false)}
      />

      {/* Book Order & Inquiry Modal */}
      <BookOrderModal
        product={selectedProduct}
        isOpen={orderModalOpen}
        onClose={() => {
          setOrderModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
}
