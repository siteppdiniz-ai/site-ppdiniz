# PLAN: Compliance & SEO Overhaul

## 1. Goal
Implement legal compliance pages (Privacy, Cookies) with a consent banner and execute a comprehensive SEO strategy to improve search visibility.

## 2. Selected Agents
-   **`seo-specialist`**: For keyword research, meta tag optimization, sitemap generation, and SEO reporting.
-   **`frontend-specialist`**: For creating UI components (Cookie Banner, Policy Pages) and updating the Footer.
-   **`test-engineer`**: For validating SEO structure and link integrity.

## 3. Work Scope

### A. Legal Compliance (Frontend Specialist)
1.  **Components**:
    -   `CookieBanner.tsx`: Floating banner with "Accept/Decline" logic (using localStorage).
    -   `PrivacyPolicy.tsx`: Standard text page with nice typography.
    -   `CookiePolicy.tsx`: Explains usage (linked from banner).
2.  **Navigation**:
    -   Update `Footer.tsx` to include "Política de Privacidade" and "Política de Cookies".

### B. SEO Optimization (SEO Specialist)
1.  **Technical SEO**:
    -   Generate `sitemap.xml` and `robots.txt`.
    -   Verify `metadata` in `layout.tsx` (OpenGraph, Twitter Cards).
    -   Add JSON-LD Structured Data (Organization, LocalBusiness).
2.  **Content SEO**:
    -   Research keywords for "Consultoria Empresarial/Tributária".
    -   Optimize `title` and `description` for all main pages.
3.  **Reporting**:
    -   Generate a markdown report `SEO_REPORT.md` analyzing current status vs. improvements.

## 4. Execution Steps (Phase 2)

### Step 1: SEO Analysis & Implementation
-   `seo-specialist` analyzes current metadata.
-   Updates `metadata.ts` or `layout.tsx` with optimized tags.
-   Creates sitemap and robots files.

### Step 2: Compliance Implementation
-   `frontend-specialist` creates `src/app/politica-privacidade/page.tsx` and `src/app/politica-cookies/page.tsx`.
-   Implments `CookieBanner` component and adds to Root Layout.
-   Updates Footer links.

### Step 3: Verification
-   Run `seo_checker.py` (if available) or manual audit.
-   Verify Cookie Banner persistence (reload page test).

## 5. Deliverables
-   [ ] `SEO_REPORT.md`
-   [ ] Working Cookie Banner
-   [ ] Policy Pages (Privacy/Cookies)
-   [ ] 100% SEO Score target (Lighthouse)
