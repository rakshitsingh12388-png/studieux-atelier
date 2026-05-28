# Exporting Real Images from Figma

The website is built and works with placeholder images. To replace them with your actual Figma images, follow these steps:

## Method 1: Figma Bulk Export (Recommended)

1. Open your Figma file: https://www.figma.com/design/C0sUJUnWZchwaic2MvrNuO
2. Select ALL frames (Ctrl+A on the canvas)
3. In the right panel → click "Export"
4. Set format: PNG, Scale: 1x
5. Click "Export all"
6. Unzip and copy the images to `public/images/`
7. Rename them to match the names in `app/data/projects.ts`

## Method 2: Manual Export Per Project

For each project, export these frames from Figma:

### Golf Greens Residence (Frame 16, node 157:257)
- `golf-green-01.png` - small hero top (node 157:328)
- `golf-green-02.png` - portrait (node 159:350)
- `golf-green-03.png` - wide image (node 159:349)
- `golf-green-04.png` - medium (node 159:353)
- `golf-green-05.png` - extra (node 231:395)

### The Hideaway (Frame 17, node 172:261)
- `hideaway-01.png` (node 172:272)
- `hideaway-02.png` (node 244:423)
- `hideaway-03.png` (node 244:427)
- `hideaway-04.png` (node 172:275)

### Edifice (Frame 18, node 172:285)
- `edifice-01.png` (node 172:296)
- `edifice-02.png` (node 172:297 - if exists)
- `edifice-03.png` (node 172:299)

### (Continue for each project...)

## Method 3: Quick Script

Run this in the Figma Plugin Console after installing the Figma API plugin:
```
// Export all images at once via the REST API
// Requires your Figma Personal Access Token
const token = 'YOUR_TOKEN_HERE';
const fileId = 'C0sUJUnWZchwaic2MvrNuO';
// Then use the /images endpoint to export all nodes
```

## Image Naming Reference

See `app/data/projects.ts` for the complete list of required image names for each project.

## Gallery Images

The gallery page expects `gallery-01.png` through `gallery-24.png` in the `public/images/` folder.
Map these from the Gallery page rectangles in Figma (Frame 8, node 68:6).
