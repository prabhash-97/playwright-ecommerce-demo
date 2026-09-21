# Playwright E-Commerce QA Automation Demo

QA automation project built with **Playwright + TypeScript**.

> This is an independent demonstration project. 

## Demo application

Tests target SauceDemo, a public e-commerce practice application:

https://www.saucedemo.com/

## What is covered

- Login and authentication validation
- Locked-out user validation
- Invalid credentials
- Product listing validation
- Add/remove from cart
- Multiple-product cart flow
- Product sorting
- Cart content validation
- Complete checkout flow
- Checkout required-field validation
- Responsive/mobile viewport validation
- Chromium, Firefox and WebKit coverage
- Failure screenshots
- Failure video
- Playwright trace on failure
- HTML test report
- Page Object Model structure

## Project structure

```text
playwright-ecommerce-qa-demo/
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── login.spec.ts
│   ├── product.spec.ts
│   ├── checkout.spec.ts
│   └── responsive.spec.ts
├── utils/
│   └── testData.ts
├── test-data/
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js 20+
- VS Code
- Git

## Setup in VS Code

Open the project folder in VS Code, then run:

```bash
npm install
npx playwright install
```

## Run tests

Run all browsers:

```bash
npm test
```

Run headed:

```bash
npm run test:headed
```

Run smoke tests:

```bash
npm run test:smoke
```

Run regression tests:

```bash
npm run test:regression
```

Open the HTML report:

```bash
npm run report
```

Run TypeScript validation:

```bash
npm run lint
```

## Portfolio highlights

This project demonstrates a maintainable QA automation approach rather than a collection of simple scripts. It uses Page Object Model, reusable test data, tagged smoke/regression coverage, cross-browser projects, mobile viewport testing, and failure diagnostics.

## Suggested Upwork portfolio description

**Playwright E-Commerce Test Automation Demo**

Built an end-to-end QA automation framework using Playwright and TypeScript for a demo e-commerce application. Covered authentication, product browsing, cart, sorting, checkout, validation, responsive testing, and cross-browser execution. Implemented Page Object Model, reusable test data, smoke/regression tagging, screenshots, video, traces, and HTML reporting.

## HTML Test Report Sample
<img width="2024" height="1826" alt="image" src="https://github.com/user-attachments/assets/77929868-e2d9-40e2-be56-993f3233252c" />
