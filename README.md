# Tailwind CSS: Styles Not Compiled from Specific node_modules Directory

This repository demonstrates a common issue when using Tailwind CSS with monorepos or when working with component libraries that exist in node_modules.  The problem is that Tailwind CSS fails to compile styles located in a specific directory within node_modules.  The solution involves carefully verifying file paths and understanding the nuances of the `content` option.

## Bug Reproduction

The `bug.js` file demonstrates the faulty Tailwind configuration. The `content` array incorrectly attempts to include styles from a component library under node_modules.