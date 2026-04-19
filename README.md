# Verpexx Systems — Website

Dark, modern, conversion-focused marketing site for **Verpexx Systems**, an AI automation agency serving cleaning & construction companies.

**Stack:** React 18 · Vite · Tailwind CSS 3 · Inter + Playfair Display

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Design system

- **Background:** `#0B0F19` (deep navy-black), with an ink-950 variant (`#06080F`) for the footer and scrolled navbar.
- **Accent:** Orange/amber `#f9941f` (`brand-500`). Used for CTAs, highlights, and the italic accent words (Playfair Display italic).
- **Cards:** Glass-effect (`bg-white/[0.06]` + blur + subtle borders).
- **Typography:**
  - Headings: Inter 800–900 (tight tracking, large scale).
  - Accent words (*Systems, Scale, Drive Results, Automate, Clients, Pricing, Questions*): Playfair Display italic in brand orange.
  - Body: Inter 400–500.

## Page structure

1. **Navbar** — sticky, logo + menu (Services / Process / Results / Pricing / FAQ) + `Get in Touch` CTA.
2. **Hero** — Headline, subtext, dual CTA, 4 metrics strip (90% / 35% / 24/7 / 7 Days).
3. **Services** — 6 outcome-framed services including the featured card *"Automated Follow-Ups That Turn Missed Leads Into Booked Jobs"*.
4. **System Visual** — `Lead → Auto Reply → Booking → Closed Deal`.
5. **Offer** — *AI Automation System in 7 Days* with deliverables list and **Free CRM Audit** CTA.
6. **Process** — 4-step system (Audit → Build → Optimize → Scale).
7. **Results** — 90% faster response / 35% more bookings / 3× revenue / 60% time saved.
8. **Testimonials** — Photos (Pexels), names, roles, company logos, and per-client results.
9. **Pricing** — 3 tiers (Basic / Startup / Premium) with *Who this is for* and *ROI* per plan.
10. **FAQ** — Accordion with the requested questions (GHL, setup time, support, industries, à la carte, free audit).
11. **Contact** — Message form (mailto) + embedded booking widget (`scale.verpexxsystems.dev/widget/booking/yq5JvNHaOufcD6NGnV2t`).
12. **Footer** — Clean, minimal, with contact + quick links.

## Customization

- Swap testimonial photos: edit `src/components/Testimonials.jsx` (currently pulling professional portraits from Pexels).
- Update the booking widget URL: `src/components/Contact.jsx` → `iframe src`.
- Adjust colors: `tailwind.config.js` → `theme.extend.colors.brand` / `ink`.
