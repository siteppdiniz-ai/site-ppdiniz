# PLAN: Mobile Responsiveness Audit & Optimization

## 1. Goal
Ensure the PPdiniz website offers a premium, glitch-free experience on mobile devices (iOS/Android), matching the high fidelity of the desktop version.

## 2. Selected Agents
- **`mobile-developer`**: To audit specific mobile constraints (Safe Areas, Touch Targets, Input Zoom).
- **`frontend-specialist`**: To implement CSS fixes and media queries.
- **`test-engineer`**: To run validation scripts (Lighthouse/Lint).

## 3. Audit Scope & Strategy

### A. Critical Components
1.  **Hero Section**:
    -   Verify visual balance on portrait mode.
    -   Ensure text doesn't overlap excessively with background visual elements.
    -   Check `min-height` behavior on mobile browsers (address bar toggle).
2.  **Navbar**:
    -   Test hamburger menu animation and interaction.
    -   Verify touch target size for links.
3.  **Contact Form**:
    -   **CRITICAL**: Prevent iOS zoom on focus (inputs must be >= 16px).
    -   Ensure keyboard doesn't hide the submit button.
4.  **Services & Cards**:
    -   Verify stacking order.
    -   Check margins/padding to prevent "edge-to-edge" ugliness.

### B. Technical Constraints
-   **Touch Targets**: Minimum 44x44px for all interactive elements.
-   **Safe Areas**: Respect notch/dynamic island areas (`viewport-fit=cover`).
-   **Overflow**: Zero tolerance for horizontal scrollbars.

## 4. Execution Steps (Phase 2)

### Step 1: `mobile-developer` Analysis
-   Review `Hero.tsx`, `Navbar.tsx`, `Contact.tsx`.
-   Identify specific lines requiring `dvh` or `text-base` adjustments.

### Step 2: `frontend-specialist` Implementation
-   Apply CSS fixes.
-   Adjust animation offsets for mobile (reduce travel distance).

### Step 3: `test-engineer` Verification
-   Run `lint_runner.py`.
-   Run `lighthouse_audit.py` (if available) or manual build check.

## 5. Deliverables
-   [ ] Mobile-optimized CSS.
-   [ ] Updated `walkthrough.md` with mobile verification proofs.
-   [ ] Green CI/Build status.
