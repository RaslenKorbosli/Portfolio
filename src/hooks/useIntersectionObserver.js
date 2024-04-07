import { useEffect, useState } from 'react';

export function useIntersectionObserver(myRef, threshold) {
  const [isElementVisible, setIsElementVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        entry.isIntersecting && setIsElementVisible(true);
      },
      { threshold: threshold }
    );
    observer.observe(myRef.current);
  }, [isElementVisible, myRef, threshold]);
  return isElementVisible;
}
