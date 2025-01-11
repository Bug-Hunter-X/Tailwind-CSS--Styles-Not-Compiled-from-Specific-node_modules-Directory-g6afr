```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configuration options ...
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './node_modules/@your-company/some-component/**/*.{html,js,tsx}'], // The bug is here
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: [],
}
```