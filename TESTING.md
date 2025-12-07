# Testing Strategy

## Overview

Comprehensive testing strategy covering unit tests, integration tests, E2E tests, accessibility, and performance.

## Test Types

### Unit Tests

- **Framework**: Vitest + Testing Library
- **Coverage**: >80% code coverage required
- **Location**: `apps/web/src/test/`
- **Run**: `npm run test`

### Integration Tests

- **Framework**: Vitest + Testing Library
- **Focus**: Component interactions, API integrations
- **Run**: `npm run test`

### E2E Tests

- **Framework**: Playwright
- **Browsers**: Chrome, Firefox, Safari, Mobile Chrome
- **Location**: `apps/web/e2e/`
- **Run**: `npm run test:e2e`

### Accessibility Tests

- **Framework**: Playwright + Axe
- **Standards**: WCAG 2.1 AA compliance
- **Run**: `npm run test:e2e e2e/accessibility.spec.ts`

### Performance Tests

- **Framework**: Lighthouse CI
- **Metrics**: Core Web Vitals, bundle size
- **Thresholds**: >90 score required
- **Run**: `npm run lighthouse`

## Quality Gates

### Pre-commit

- ESLint + Prettier
- Type checking
- Unit tests

### CI/CD Pipeline

- All tests pass
- Code coverage >80%
- No TypeScript errors
- Lighthouse score >90
- Bundle size <150KB
- Accessibility audit passes

## Running Tests

```bash
# Unit tests
npm run test

# Unit tests with UI
npm run test:ui

# Coverage report
npm run test:coverage

# E2E tests
npm run test:e2e

# E2E tests with UI
npm run test:e2e:ui

# Lighthouse audit
npm run lighthouse
```

## Test Data

- Mock data in `src/test/mocks/`
- Test utilities in `src/test/utils/`
- Fixtures in `e2e/fixtures/`
