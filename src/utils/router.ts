import { useState, useEffect } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/services'
  | '/services/iso-training-consulting'
  | '/services/ziglar-training'
  | '/services/coaching'
  | '/services/life-lessons'
  | '/training'
  | '/training/lead-auditor'
  | '/training/internal-auditor'
  | '/training/goal-setting'
  | '/training/building-the-best-you'
  | '/training/building-winning-relationships'
  | '/training/two-chairs'
  | '/training/power-of-who'
  | '/training/watch-me-train'
  | '/products'
  | '/clients'
  | '/wellness'
  | '/contact'
  | '/privacy'
  | '/terms';

// Canonical route normalizer that maps old Wix URLs to clean routes
export function normalizePath(path: string): RoutePath {
  const clean = path.replace(/\/+$/, '') || '/';

  switch (clean) {
    case '':
    case '/':
    case '/home':
      return '/';

    case '/about':
    case '/about2':
      return '/about';

    case '/services':
      return '/services';

    case '/iso-training--consulting':
    case '/services/iso-training-consulting':
    case '/services/iso':
      return '/services/iso-training-consulting';

    case '/ziglar-training':
    case '/services/ziglar-training':
    case '/services/ziglar':
      return '/services/ziglar-training';

    case '/coaching':
    case '/copy-of-goal-setting-achievement-1':
    case '/services/coaching':
      return '/services/coaching';

    case '/life-lessons-learned-speakingphotograph':
    case '/life-lessons':
    case '/services/life-lessons':
      return '/services/life-lessons';

    case '/training':
    case '/blank':
    case '/training/events':
      return '/training';

    case '/training/lead-auditor':
      return '/training/lead-auditor';

    case '/training/internal-auditor':
      return '/training/internal-auditor';

    case '/goal-setting-achievement':
    case '/training/goal-setting':
      return '/training/goal-setting';

    case '/building-the-best-you':
    case '/training/building-the-best-you':
      return '/training/building-the-best-you';

    case '/building-winning-relationships':
    case '/training/building-winning-relationships':
      return '/training/building-winning-relationships';

    case '/copy-of-power-of-who':
    case '/2-chairs':
    case '/training/two-chairs':
      return '/training/two-chairs';

    case '/copy-of-goal-setting-achievement-2':
    case '/power-of-who':
    case '/training/power-of-who':
      return '/training/power-of-who';

    case '/watch-me-train':
    case '/training/watch-me-train':
      return '/training/watch-me-train';

    case '/products':
    case '/books':
      return '/products';

    case '/clients':
    case '/testimonials':
      return '/clients';

    case '/untitled':
    case '/beach-body-coach':
    case '/wellness':
      return '/wellness';

    case '/contact':
      return '/contact';

    case '/privacy':
    case '/privacy-policy':
      return '/privacy';

    case '/terms':
    case '/terms-of-use':
      return '/terms';

    default:
      return '/';
  }
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to: string) => {
    const target = normalizePath(to);
    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target);
      setCurrentPath(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { currentPath, navigate };
}
