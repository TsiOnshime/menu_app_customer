# BurgerHouse Menu App

A modern, responsive menu application for BurgerHouse restaurant, built with React and Firebase. Display delicious foods and refreshing drinks with an elegant UI.

## Features

- **Food Menu**: Browse through a variety of delicious food items with images, descriptions, and prices
- **Drinks Section**: Explore refreshing beverages with detailed information
- **Responsive Design**: Optimized for desktop and mobile devices
- **Firebase Integration**: Real-time data fetching from Firestore
- **Modern UI**: Styled with Tailwind CSS for a clean, attractive interface

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Build Tool**: Vite
- **Linting**: ESLint

## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Firebase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TsiOnshime/menu_app_customer.git
   cd menu_app_customer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**

   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Create a `.env` file in the root directory with your Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Set up Firestore Data**

   Create collections in Firestore:
   - `foods` collection with documents containing:
     - `name`: string
     - `description`: string
     - `price`: number
     - `imageUrl`: string
     - `category`: "food" or "drink"

### Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── Menu.jsx          # Main menu component
├── firebase.js           # Firebase configuration
├── App.jsx               # Root component
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
