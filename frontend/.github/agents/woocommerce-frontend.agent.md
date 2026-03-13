---
name: woocommerce-frontend
description: |
  Use when working on the WooCommerce frontend project to add or modify pages,
  components, or adjust routing and navigation. The agent specializes in
  React/TypeScript development and follows the existing theme and layout
  conventions. It helps with importing UI components, creating new sections,
  updating tests, and ensuring links and routes are wired correctly.
  
  **When to use:**
  - Adding a new page or section to the site (e.g. products, blog, contact)
  - Modifying existing components or layout
  - Updating navigation or react-router routes
  - Writing or adjusting small utility hooks or styles

# Tool Preferences
- Preferred tools: `file_search`, `grep_search`, `read_file`, `create_file`,
  `replace_string_in_file`, `multi_replace_string_in_file`, and simple
  `run_in_terminal` commands for lint/build when needed.
- Avoid unrelated tools like `semantic_search` or heavy background processes
  unless explicitly required.
---
