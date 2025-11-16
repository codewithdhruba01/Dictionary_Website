# Dictionary Web App

A modern, fully-featured Dictionary Web Application built with Next.js 14, React, TypeScript, and Tailwind CSS. Search for any English word and get detailed definitions, pronunciations, examples, synonyms, and more.

## Features

### Core Dictionary Functionality
- **Real-time Word Search**: Type to search for any English word from the Dictionary API
- **Complete Word Information**: Display word, phonetics, pronunciation audio, meanings, definitions, examples, and synonyms
- **Multiple Word Forms**: Support for different parts of speech (noun, verb, adjective, etc.)
- **Source Links**: Direct links to authoritative sources for each word
- **Audio Pronunciation**: Play pronunciation audio for words when available

### User Experience
- **Smart Search**: 500ms debounce to avoid excessive API calls while typing
- **Loading States**: Beautiful animated spinner during API requests
- **Error Handling**: User-friendly messages for "word not found" and network errors
- **Smooth Animations**: Framer Motion animations for all transitions and interactions
- **Responsive Design**: Fully responsive UI that works perfectly on mobile, tablet, and desktop

### Customization
- **Font Selector**: Change the entire app font between Sans Serif, Serif, and Mono
- **Dark/Light Mode**: Toggle between dark and light themes with a beautiful purple switch
- **Dynamic Icons**: Theme icon changes between Sun (light mode) and Moon (dark mode)
- **Persistent Preferences**: Font and theme selections are saved to local storage

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API**: Dictionary API (api.dictionaryapi.dev)
- **State Management**: React Hooks (useState, useContext)

## Project Structure

```
app/
├── components/
│   ├── ErrorBox.tsx          # Error message display component
│   ├── FontDropdown.tsx      # Font selection dropdown
│   ├── Loader.tsx            # Loading spinner animation
│   ├── MeaningCard.tsx       # Main content display for word meanings
│   ├── Navbar.tsx            # Navigation bar with controls
│   ├── SearchBar.tsx         # Search input with icon
│   └── ThemeToggle.tsx       # Dark/light mode toggle switch
├── context/
│   └── ThemeContext.tsx      # Theme and font context provider
├── hooks/
│   └── useDictionary.ts      # Custom hook for Dictionary API
├── layout.tsx                # Root layout component
├── page.tsx                  # Main page component
└── globals.css               # Global styles and CSS variables
```

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd /path/to/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Usage

### Searching for Words
1. Type any English word in the search bar
2. Results appear automatically after 500ms of inactivity
3. View complete word information including multiple meanings

### Changing Fonts
1. Click the "Font Selector" dropdown in the navbar
2. Choose from Sans Serif, Serif, or Mono
3. The entire app font changes instantly
4. Your selection is saved automatically

### Toggling Dark/Light Mode
1. Click the theme toggle switch in the navbar (right side)
2. The icon changes between Sun (light) and Moon (dark)
3. Smooth transition to the new theme
4. Your preference is saved automatically

### Listening to Pronunciation
1. Search for a word that has audio pronunciation
2. Click the purple play button next to the word
3. The pronunciation audio plays automatically

## Features in Detail

### Real-time Search with Debouncing
The search bar implements a 500ms debounce to:
- Reduce unnecessary API calls
- Improve performance
- Provide smooth user experience while typing

### Theme Persistence
- Theme preference is saved to localStorage
- Font selection is saved to localStorage
- Settings persist across browser sessions

### Responsive Breakpoints
- **Mobile (xs)**: 320px and up
- **Small (sm)**: 640px and up
- **Medium (md)**: 768px and up
- **Large (lg)**: 1024px and up

All components scale appropriately at each breakpoint.

### Error States
The app handles:
- Word not found (404 error)
- Network connectivity issues
- API timeouts
- Invalid requests

Each error displays a user-friendly message with proper styling.

### Loading States
- Animated spinning loader with purple accent color
- Shows while fetching from Dictionary API
- Smooth fade-in/fade-out transitions

## Color Scheme

### Light Mode
- Background: White (#FFFFFF)
- Foreground: Dark Gray (#1A1A1A)
- Secondary: Light Gray (#F5F5F5)
- Accent: Purple (#A445ED)

### Dark Mode
- Background: Dark Gray (#121212)
- Foreground: White (#FFFFFF)
- Secondary: Charcoal (#1F1F1F)
- Accent: Purple (#A445ED)

The purple accent color (#A445ED) is consistent across both themes for the search icon, play button, synonyms, and toggle switch.

## API Reference

### Dictionary API (api.dictionaryapi.dev)

The app uses the free, open-source Dictionary API.

**Endpoint**: `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`

**Response includes**:
- Word and phonetics
- Multiple meanings by part of speech
- Definitions and examples
- Synonyms and antonyms
- Source URLs
- Pronunciation audio (when available)

No API key required.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

1. **Debounced Search**: Reduces API calls while typing
2. **Code Splitting**: Next.js automatically splits code by route
3. **Image Optimization**: Next.js Image component for any future images
4. **CSS-in-JS**: Tailwind CSS provides optimized styling
5. **Server-Side Rendering**: Initial page load is optimized
6. **Caching**: Browser caches API responses

## Accessibility Features

- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader friendly
- Focus indicators on interactive elements
- ARIA labels where appropriate

## Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
No environment variables required for basic functionality. All APIs are public.

### Deployment Options
- **Vercel**: Recommended (one-click deploy from GitHub)
- **Netlify**: Supported with `npm run build`
- **Docker**: Can be containerized with Node.js base image
- **Traditional Hosting**: Build locally and upload build folder

## Troubleshooting

### Word Not Found
- Check spelling of the word
- Try a different word
- Some words may not be in the dictionary database

### No Audio Available
- Not all words have pronunciation audio
- Audio availability depends on the Dictionary API database
- Try another word to test audio functionality

### Search Not Working
- Check internet connection
- Ensure Dictionary API is accessible
- Try refreshing the page
- Check browser console for errors

### Font Changes Not Saving
- Check if localStorage is enabled in browser
- Clear browser cache and try again
- Ensure cookies/storage are not blocked

### Dark Mode Not Working
- Verify JavaScript is enabled
- Clear browser cache
- Try in an incognito/private window

## Known Limitations

- Only supports English words (Dictionary API limitation)
- Audio pronunciation depends on API availability
- Search requires internet connection
- Some less common words may not be available

## Future Enhancements

Potential improvements:
- Favorites/bookmark system (with Supabase)
- Search history
- Multiple language support
- Word of the day feature
- Related words suggestions
- Custom theme colors
- Pronunciation practice mode

## License

Open source project - feel free to use and modify.

## Credits

- **Dictionary API**: [dictionaryapi.dev](https://dictionaryapi.dev)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
#   - D i c t i o n a r y _ W e b s i t e  
 #   D i c t i o n a r y _ W e b s i t e  
 