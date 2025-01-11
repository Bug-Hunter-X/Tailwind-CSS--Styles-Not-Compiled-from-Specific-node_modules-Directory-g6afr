```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configuration options ...
  content: [ 
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@your-company/some-component/**/*.{html,js,tsx}',
    // Add this line to explicitly include your components. 
    //Tailwind may need explicit path for your components, even if you have included the node_modules path
    './node_modules/@your-company/some-component/src/**/*.{js,jsx,ts,tsx}
  ],
  theme: {
    extend: {
      // ... your custom theme ...
    }
  },
  plugins: [],
}
```