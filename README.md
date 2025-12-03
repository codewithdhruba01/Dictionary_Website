# Dictionary Web App

![Banner](public/Dictionary-cover.png)

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

1. Clone the repository:
    ```bash
   git clone https://github.com/codewithdhruba01/Dictionary_Website.git
   cd Dictionary_Website
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


All components scale appropriately at each breakpoint.

### Error States
The app handles:
- Word not found (404 error)
- Network connectivity issues
- API timeouts
- Invalid requests

Each error displays a user-friendly message with proper styling.

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

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
No environment variables required for basic functionality. All APIs are public.

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

## Credits

- **Dictionary API**: [dictionaryapi.dev](https://dictionaryapi.dev)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Animations**: [Framer Motion](https://www.framer.com/motion)

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">
   
⭐ If you find this project useful, please give it a star!

**Built with ❤️ by Dhrubaraj Pati for developers**

[Website](https://codewithdhruba.vercel.app/) • [GitHub](https://github.com/codewithdhruba01) • [Twitter](https://x.com/codewithdhruba)

</div>
