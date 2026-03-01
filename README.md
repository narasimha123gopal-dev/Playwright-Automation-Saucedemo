# 🚀 Playwright + TypeScript Automation Framework

**Application Under Test:** Saucedemo (E-commerce UI Automation)

---

## 📌 Project Overview

This project demonstrates a scalable and maintainable UI automation framework built using **Playwright** with **TypeScript**.

The framework automates real-world e-commerce workflows including authentication, cart management, and checkout validation while following clean architecture and automation best practices.

---

## 🛠 Technology Stack

- Playwright
- TypeScript
- Node.js
- HTML Reporter

---

## 🚀 Why Playwright?

- Built-in auto-waiting mechanism reduces flaky tests
- Faster execution compared to traditional UI automation tools
- Cross-browser support (Chromium, Firefox, WebKit)
- Supports network interception and API mocking
- Native parallel execution capability
- Rich debugging features (Trace Viewer, screenshots, videos)

---

## 💡 Why TypeScript?

- Strong static typing improves reliability
- Compile-time error detection minimizes runtime failures
- Better IDE support with IntelliSense
- Promotes clean, maintainable, and scalable code
- Suitable for enterprise-level automation frameworks

---

## ✅ Functional Coverage

- Login validation (valid and invalid user scenarios)
- Product selection from inventory page
- Add to cart functionality
- Remove item from cart
- Cart validation
- Checkout process validation
- Order confirmation validation

---

## 🏗 Framework Architecture

- **Test Layer** – Contains business scenarios and test specifications
- **Page Layer** – Implements Page Object Model (POM)
- **Utility Layer** – Reusable helper methods and common utilities
- **Configuration Layer** – Centralized setup in `playwright.config.ts`

### Design Principles

- Separation of concerns
- Reusability
- Maintainability
- Test isolation
- Minimal flakiness

---

## ⚡ Parallel Execution

- Tests run in parallel using Playwright workers
- Execution controlled via `playwright.config.ts`
- Optimized for faster regression cycles

---

## 🛡 Stability Strategy

- Leveraged Playwright auto-waiting (avoided hard waits)
- Used `page.locator()` for reliable element handling
- Configured retries for unstable scenarios
- Centralized timeout configuration
- Enabled screenshot and trace capture on failure
- Ensured test independence and isolation

---

## 📊 Reporting & Debugging

- HTML reporting enabled
- Screenshot capture on failure
- Trace viewer support
- Video recording for failed executions

---

## 🔁 CI/CD Integration

- Ready for GitHub Actions
- Jenkins integration supported
- Azure DevOps compatible
- Headless execution supported for pipelines

**Run in headless mode:**

```bash
npx playwright test --headless
```

---

## ▶️ Execution Commands

**Install dependencies**

```bash
npm install
```

**Install Playwright browsers**

```bash
npx playwright install
```

**Run all tests**

```bash
npx playwright test
```

**Run in headed mode**

```bash
npx playwright test --headed
```

**View HTML report**

```bash
npx playwright show-report
```

---

