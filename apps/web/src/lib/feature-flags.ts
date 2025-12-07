type FeatureFlag = {
  enabled: boolean;
  rolloutPercentage?: number;
  conditions?: Record<string, unknown>;
};

type FeatureFlags = {
  newProjectsLayout: FeatureFlag;
  enhancedContactForm: FeatureFlag;
  blogComments: FeatureFlag;
  darkModeToggle: FeatureFlag;
};

const defaultFlags: FeatureFlags = {
  newProjectsLayout: { enabled: false, rolloutPercentage: 0 },
  enhancedContactForm: { enabled: false, rolloutPercentage: 0 },
  blogComments: { enabled: false, rolloutPercentage: 0 },
  darkModeToggle: { enabled: true, rolloutPercentage: 100 },
};

export function getFeatureFlag(flag: keyof FeatureFlags): boolean {
  if (typeof window === 'undefined') return defaultFlags[flag].enabled;

  // Check localStorage override
  const override = localStorage.getItem(`ff_${flag}`);
  if (override !== null) return override === 'true';

  const flagConfig = defaultFlags[flag];

  // Simple rollout percentage check
  if (flagConfig.rolloutPercentage !== undefined) {
    const userId = getUserId();
    const hash = simpleHash(userId + flag);
    return hash % 100 < flagConfig.rolloutPercentage;
  }

  return flagConfig.enabled;
}

function getUserId(): string {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = Math.random().toString(36).substring(2);
    localStorage.setItem('userId', userId);
  }
  return userId;
}

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}
