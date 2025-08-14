<div align="center">
  <img src="./assets/images/icon.png" alt="PrimeSquare Logo" width="120" height="120">
  
  # 🏠 PrimeSquare
  
  **Your Premier Real Estate Companion**
  
  <p align="center">
    <img src="https://img.shields.io/badge/React_Native-0.79.5-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Native">
    <img src="https://img.shields.io/badge/Expo-53.0.20-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo">
    <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Appwrite-Backend-F02E65?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite">
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-blue?style=for-the-badge" alt="Platform">
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  </p>
</div>

---

## ✨ Features

🔍 **Smart Property Search** - Find your dream property with intelligent search and filtering

🏡 **Featured Listings** - Discover handpicked premium properties

📱 **Cross-Platform** - Seamless experience on iOS, Android, and Web

🔐 **Secure Authentication** - Google OAuth integration with Appwrite backend

🎨 **Modern UI/UX** - Beautiful, responsive design with NativeWind styling

⚡ **Real-time Updates** - Live property data with efficient caching

📍 **Location-based** - Property discovery based on your preferences

💬 **Interactive Components** - Engaging cards, filters, and search functionality

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **iOS Simulator** or **Android Emulator** (for mobile development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Prakharsahu10/PrimeSquare.git
   cd primesquare
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create a .env file in the root directory
   EXPO_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=your_galleries_collection_id
   EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=your_reviews_collection_id
   EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=your_agents_collection_id
   EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=your_properties_collection_id
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

### 📱 Running on Different Platforms

```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

---

## 🏗️ Project Structure

```
primesquare/
├── app/                    # App routing (Expo Router)
│   ├── (root)/
│   │   ├── (tabs)/        # Tab navigation
│   │   │   ├── index.tsx  # Home screen
│   │   │   ├── explore.tsx
│   │   │   └── profile.tsx
│   │   └── properties/
│   │       └── [id].tsx   # Property details
│   ├── _layout.tsx        # Root layout
│   └── sign-in.tsx        # Authentication
├── components/             # Reusable UI components
│   ├── Cards.tsx          # Property cards
│   ├── Search.tsx         # Search functionality
│   ├── Filters.tsx        # Property filters
│   └── NoResults.tsx      # Empty state
├── lib/                   # Core utilities
│   ├── appwrite.ts        # Backend integration
│   ├── useAppwrite.ts     # Custom hooks
│   └── global-provider.tsx # Global state
├── constants/             # App constants
├── types/                 # TypeScript definitions
└── assets/               # Images, icons, fonts
```

---

## 🛠️ Tech Stack

| Technology                  | Purpose              | Version  |
| --------------------------- | -------------------- | -------- |
| **React Native**            | Mobile framework     | 0.79.5   |
| **Expo**                    | Development platform | ~53.0.20 |
| **TypeScript**              | Type safety          | ~5.8.3   |
| **Expo Router**             | File-based routing   | ~5.1.4   |
| **NativeWind**              | Styling framework    | ^4.1.23  |
| **Appwrite**                | Backend as a Service | ^0.11.0  |
| **React Native Reanimated** | Animations           | ~3.17.4  |
| **Expo Image**              | Optimized images     | ~2.4.0   |

---

## 🎯 Key Components

### 🔍 Search & Filtering

- Real-time property search
- Advanced filtering options
- Location-based results

### 🏠 Property Management

- Featured property listings
- Detailed property views
- Image galleries
- Property recommendations

### 👤 User Experience

- Google OAuth authentication
- Personalized user profiles
- Seamless navigation
- Responsive design

---

## 📸 Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="./assets/images/onboarding.png" alt="Onboarding" width="200">
        <br><b>Onboarding</b>
      </td>
      <td align="center">
        <img src="./assets/images/map.png" alt="Home" width="200">
        <br><b>Property Map</b>
      </td>
      <td align="center">
        <img src="./assets/images/bar-chart.png" alt="Profile" width="200">
        <br><b>Analytics</b>
      </td>
    </tr>
  </table>
</div>

---

## ⚙️ Configuration

### Appwrite Setup

1. Create an Appwrite project at [cloud.appwrite.io](https://cloud.appwrite.io)
2. Set up the following collections:
   - **Properties** - Store property listings
   - **Galleries** - Property images
   - **Reviews** - User reviews
   - **Agents** - Real estate agents
3. Configure Google OAuth provider
4. Update environment variables

### Custom Fonts

The app uses **Rubik** font family:

- Rubik-Regular
- Rubik-Medium
- Rubik-SemiBold
- Rubik-Bold
- Rubik-ExtraBold
- Rubik-Light

---

## 🧪 Development

### Available Scripts

```bash
# Start development server
npm start

# Start with specific platform
npm run android
npm run ios
npm run web

# Lint the code
npm run lint

# Reset project (development only)
npm run reset-project
```

### Code Quality

- **ESLint** configuration for code quality
- **TypeScript** for type safety
- **Expo** development tools
- File-based routing with Expo Router

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Prakhar Sahu** - _Initial work_ - [@Prakharsahu10](https://github.com/Prakharsahu10)

---

## 🙏 Acknowledgments

- **Expo Team** for the amazing development platform
- **Appwrite** for the robust backend solution
- **React Native Community** for continuous innovation
- **NativeWind** for bringing Tailwind CSS to React Native

---

<div align="center">
  <p>Made with ❤️ for the real estate community</p>
  <p>
    <a href="https://github.com/Prakharsahu10/PrimeSquare/issues">Report Bug</a>
    ·
    <a href="https://github.com/Prakharsahu10/PrimeSquare/issues">Request Feature</a>
  </p>
</div>
