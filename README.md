# Figma Prototype Presentation Website

A modern, responsive website built with Next.js to showcase Figma prototypes using embedded iframes. This project provides a clean, professional presentation platform for your interactive Figma designs.

## Features

- 🎨 **Interactive Figma Embedding** - Seamlessly embed Figma prototypes with iframe
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile viewing
- ⚡ **Fast Loading** - Built with Next.js 15 and optimized performance
- 🎯 **User-Friendly** - Clear instructions and intuitive navigation
- 🔧 **Customizable** - Easy to modify colors, layout, and content

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Figma prototype URL (with sharing permissions enabled)

### Installation

1. Clone or download this project
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Setting Up Your Figma Prototype

### Step 1: Get Your Figma URL

1. Open your Figma prototype
2. Click the **Share** button in the top-right corner
3. Set permissions to **"Anyone with the link can view"**
4. Copy the prototype URL

### Step 2: Update the URL

1. Open `app/page.tsx`
2. Replace the placeholder URL on line 5:

```typescript
const figmaUrl = "https://www.figma.com/file/YOUR_FILE_ID/YOUR_PROTOTYPE_NAME?node-id=YOUR_NODE_ID";
```

With your actual Figma prototype URL:

```typescript
const figmaUrl = "https://www.figma.com/proto/abc123def456/My-Awesome-Prototype?node-id=1-2&t=xyz789";
```

### Step 3: Customize the Presentation

You can customize various aspects of your presentation:

#### Update the Title and Description

In `app/page.tsx`, modify the header section:

```typescript
<h1 className="text-4xl font-bold text-gray-900 mb-4">
  Your Custom Title
</h1>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
  Your custom description about the prototype.
</p>
```

#### Adjust the Embed Size

Modify the FigmaEmbed component props:

```typescript
<FigmaEmbed 
  figmaUrl={figmaUrl}
  title="Your Custom Title"
  height="900px"  // Adjust height as needed
/>
```

#### Customize Colors and Styling

The project uses Tailwind CSS. You can modify colors by updating the className attributes throughout the components.

## Component Details

### FigmaEmbed Component

Located at `app/components/FigmaEmbed.tsx`, this component handles:

- **URL Conversion**: Automatically converts regular Figma URLs to embed format
- **Loading States**: Shows a loading spinner while the prototype loads
- **Error Handling**: Displays a fallback if the prototype fails to load
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Includes proper ARIA labels and keyboard navigation

### Props

```typescript
interface FigmaEmbedProps {
  figmaUrl: string;        // Required: Your Figma prototype URL
  title?: string;          // Optional: Title for the iframe
  width?: string | number; // Optional: Width (default: "100%")
  height?: string | number; // Optional: Height (default: "600px")
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: Deploy directly from GitHub
- **Any Node.js hosting**: Run `npm run build && npm start`

## Troubleshooting

### Common Issues

1. **Prototype not loading**: 
   - Ensure your Figma prototype has public sharing enabled
   - Check that the URL is correct and accessible
   - Verify the URL format (should include `/proto/` for prototypes)

2. **Embed not displaying**:
   - Some Figma files may have embedding restrictions
   - Try using the prototype URL instead of the file URL
   - Check browser console for any error messages

3. **Mobile responsiveness**:
   - The component is responsive by default
   - Test on different screen sizes
   - Adjust the height prop if needed for mobile viewing

### Getting Help

- Check the [Figma Embed Documentation](https://www.figma.com/developers/embed)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Check browser developer tools for any console errors

## Customization Examples

### Multiple Prototypes

To showcase multiple prototypes, you can create additional pages:

1. Create `app/prototype-2/page.tsx`
2. Use the same FigmaEmbed component
3. Add navigation between prototypes

### Custom Styling

Modify `app/globals.css` or use Tailwind classes to customize:

```css
/* Custom background */
.bg-custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests!
