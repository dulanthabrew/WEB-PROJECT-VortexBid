```markdown
# FixOnGo - On-Road Vehicle Breakdown Assistant

**Mobile Application**  
**Group 01 – MAD Project Proposal**  
**NSBM Green University Town**

---

## 🎯 Project Overview

FixOnGo is a smart, cross-platform mobile application designed to provide **immediate roadside assistance** during on-road vehicle breakdowns. Whether it's a flat tire, dead battery, fuel issue, or any mechanical failure, the app connects drivers with AI guidance, nearby verified mechanics, tool/spare-part delivery, and professional call-center support — all in one tap.

Built with **Flutter**, FixOnGo delivers a seamless experience on both Android and iOS with beautiful dark & light themes, real-time GPS tracking, and secure digital payments.

---

## 🌟 Key Features

### 🛠️ Core Assistance Features
- **AI-Powered Breakdown Assistant** – 24/7 rule-based AI chatbot with step-by-step guidance for minor issues (battery, tire, fuel, overheating, etc.)
- **GPS Location Tracking & Mapping** – Automatic location detection + map view showing nearby mechanics and service providers
- **Mechanic & Tool Request System** – Request verified mechanics or get tools/spare parts delivered to your exact location with ETA and cost preview
- **In-App Call Center Support** – One-tap connection to experienced mechanics when AI is not enough
- **Real-Time In-App Chat** – Direct messaging with mechanics and service providers
- **Live Tracking** – Track mechanic/tool delivery in real time on the map

### 💳 Payment & Trust Features
- **Secure Payment Gateway** – PayHere / Stripe integration with transparent pricing
- **Digital Receipts & Transaction History**
- **Service Provider Ratings & Reviews** – Verified database of mechanics, garages, towing & tool providers

### 👤 User Experience Features
- **Beautiful Dual Theme UI** (Dark & Light)
- **User Registration & Secure Login**
- **Profile Management** with vehicle details & service history
- **Real-time Notifications & Updates**

---

## 🏗️ System Architecture

### Technology Stack

#### Frontend
- **Framework**: Flutter (cross-platform)
- **UI/UX**: Material Design 3 + Custom Dark/Light Themes
- **State Management**: Provider / Riverpod (recommended)
- **Maps**: Google Maps Flutter
- **Animations**: Built-in Flutter animations + Lottie

#### Backend
- **Backend**: Firebase (recommended) or Node.js + Express
- **Database**: Firebase Firestore or MySQL
- **Authentication**: Firebase Authentication
- **Storage**: Firebase Storage (for vehicle photos, receipts)
- **Cloud Functions**: For real-time notifications & background jobs
- **AI Assistant**: Rule-based chatbot (future ML upgrade planned)

#### Services
- **Location & Mapping**: Google Maps API + Geocoding
- **Payment**: PayHere / Stripe
- **Push Notifications**: Firebase Cloud Messaging (FCM)

---

## 📁 Project Structure

```bash
FixOnGo/
├── lib/
│   ├── core/               # Constants, themes, routes, utils
│   ├── features/
│   │   ├── auth/           # Login, Register, Profile
│   │   ├── home/           # Dashboard & Get Help Now
│   │   ├── ai_assistant/   # AI Chatbot screen
│   │   ├── map/            # Live location & tracking
│   │   ├── request/        # Mechanic/Tool request flow
│   │   ├── chat/           # In-app messaging
│   │   ├── payment/        # Payment & receipt screens
│   │   └── profile/        # User & vehicle management
│   ├── models/             # Data models (User, Mechanic, Request, etc.)
│   ├── services/           # Firebase, Maps, Payment services
│   ├── widgets/            # Reusable components
│   └── main.dart
├── assets/
│   ├── images/             # App icons, car illustrations
│   └── icons/
├── firebase.json
├── pubspec.yaml
├── README.md
└── docs/
    └── wireframes/         # All proposal wireframes
```

---

## 🚀 Quick Start

### Prerequisites
- Flutter SDK (≥ 3.24)
- Android Studio / Xcode
- Firebase Project (for backend)
- Google Maps API Key
- PayHere / Stripe Sandbox Account

### Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/FixOnGo.git
cd FixOnGo

# 2. Install dependencies
flutter pub get

# 3. Setup Firebase
#    - Download google-services.json (Android) & GoogleService-Info.plist (iOS)
#    - Place them in android/app/ and ios/Runner/ respectively

# 4. Add Google Maps API key in AndroidManifest & Info.plist

# 5. Run the app
flutter run
```

**Access Points**  
- Android Emulator / iOS Simulator  
- Physical Device (USB debugging enabled)

---

## 🗄️ Database Schema (Firebase Firestore)

**Collections**:
- `users` – Driver profiles & vehicle details
- `service_providers` – Verified mechanics, garages, towing services
- `breakdown_requests` – Active & past requests
- `chats` – In-app conversations
- `payments` – Transaction records
- `notifications` – User notifications

---

## 🔧 Configuration

**Firebase** – `firebase_options.dart` (auto-generated)  
**Google Maps** – Add API key in `AndroidManifest.xml` & `Info.plist`  
**Payment Gateways** – Keys stored in Firebase Remote Config (production) or `.env` (development)

---

## 📡 Backend Services (Firebase / REST)

- User Authentication
- Real-time Location Updates
- Mechanic Matching (geohash based)
- Push Notifications
- Payment Webhooks
- Chat (Firestore real-time listeners)

---

## 🎨 User Interface

Fully responsive dual-theme design (Dark & Light) with professional wireframes included in the proposal.

**Key Screens**:
- Splash & Onboarding
- Login / Registration (Mobile OTP + Google/Apple)
- Home Dashboard – “GET HELP NOW”
- AI Assistant Chat
- Live Map with Nearby Mechanics
- Mechanic/Tool Request Flow
- Real-time Tracking
- In-App Chat
- Payment Summary & Receipt
- Service Rating
- Profile & Vehicle Management

*(All wireframes available in `docs/wireframes/` – Dark & Light variants shown in proposal pages 7–15)*

---

## 💳 Payment System

- **Gateways**: PayHere (Sri Lanka) / Stripe (International)
- **Flow**: Upfront cost preview → Secure checkout → Digital receipt
- **Refund Policy**: Automatic refund for cancelled requests
- **History**: Full transaction log in user profile

---

## 🔐 Security Features

- Firebase Authentication (Email + OTP + Social)
- Secure token-based sessions
- Encrypted chat & payment data
- Verified service provider onboarding
- Privacy controls & data consent
- Input validation & rate limiting

---

## 📊 Benefits of the Proposed System

- Faster response time during breakdowns
- Reduced stress & improved safety
- Access to verified & rated service providers
- Transparent pricing & secure payments
- 24/7 AI + human support hybrid model
- Real-time tracking & communication

---

## 🚀 Deployment

### Android
```bash
flutter build apk --release
# or
flutter build appbundle --release
```

### iOS
```bash
flutter build ios --release
# Upload via Xcode / Transporter
```

**Stores**:
- Google Play Store
- Apple App Store

---

## 🧪 Testing

- Unit & Widget tests (Flutter test)
- Integration tests (real Firebase)
- Manual testing on multiple devices
- UI/UX testing with real scenarios

---

## 🔄 Development Workflow

- Git Flow (feature branches)
- Code reviews via Pull Requests
- Conventional Commits
- Flutter Analyze & Test in CI

---

## 👥 Group Members (Group 01)

| Name                  | Student ID |
|-----------------------|------------|
| KDH Thabrew           | 32348      |
| DMCDB Dissanayaka     | 32820      |
| DMCD Senarathna       | 32751      |
| PWTA Thilakarathna    | 32223      |
| EMIM Ekanayake        | 32735      |
| WPGAL Galappaththi    | 32649      |
| GGAKG Gurulumulla     | 32243      |
| AMVLB Athauda         | 33076      |

---

**FixOnGo** – *Help when you need it most.*

**NSBM Green University Town**  
**Mobile Application Development Project**  
**Academic Year 2025/2026**
```

Copy the entire content above into a new `README.md` file in your project root. It perfectly mirrors the professional structure and style of your VortexBid README while using every relevant detail from the official Group 01 project proposal. Let me know if you want a GitHub repo template or any section expanded!
