# VortexBid - Online Auction Management System

## 🎯 Project Overview

VortexBid is a comprehensive online auction management system that provides a complete platform for conducting secure, real-time auctions. The system consists of a modern React frontend and a robust ASP.NET Core backend, offering a seamless experience for both auction creators and bidders.

## 🌟 Key Features

### 🏆 Core Auction Features

- **Real-time Bidding**: Live auction participation with instant bid updates
- **Multi-item Auctions**: Support for auctions with multiple items
- **Secure Payment Processing**: Integrated Stripe payment system
- **User Management**: Comprehensive user registration and profile management
- **Notification System**: Real-time notifications for bids, payments, and updates
- **Dashboard Analytics**: Detailed analytics and reporting for users

### 💳 Payment & Security

- **Stripe Integration**: Secure payment processing with credit card support
- **Upfront Payment**: 10% upfront payment requirement for bidding
- **Payment History**: Complete transaction history and receipts
- **Secure Authentication**: JWT-based authentication system
- **Data Protection**: Secure data handling and storage

### 📊 Analytics & Reporting

- **Dashboard Metrics**: KPI cards showing auction statistics
- **Chart Visualizations**: Interactive charts for auction trends and categories
- **Activity Tracking**: Real-time activity feeds and notifications
- **Performance Analytics**: User performance and auction success metrics

## 🏗️ System Architecture

### Technology Stack

#### Backend

- **Framework**: ASP.NET Core 8.0
- **Database**: MySQL with Entity Framework Core
- **ORM**: Entity Framework Core 8.0.8
- **Payment**: Stripe.net integration
- **API**: RESTful API with Swagger documentation
- **Background Services**: Hosted services for auction management

#### Frontend

- **Framework**: React 18.3.1
- **Build Tool**: Vite 7.1.9
- **Styling**: Tailwind CSS 3.4.10
- **Routing**: React Router DOM 6.26.1
- **Animations**: Framer Motion 11.5.4
- **Charts**: Chart.js 4.4.5
- **Icons**: FontAwesome 6.6.0
- **Payment**: Stripe React Components

#### Database

- **Database**: MySQL
- **Schema**: Normalized relational database
- **Relationships**: Well-defined entity relationships
- **Indexing**: Optimized for performance

## 📁 Project Structure

```
Vortex-Bid-New/
├── Backend/                       # ASP.NET Core API
│   ├── api/                      # Main API project
│   │   ├── Controllers/          # API Controllers
│   │   ├── Data/                 # Database context
│   │   ├── Dtos/                 # Data Transfer Objects
│   │   ├── Models/               # Entity models
│   │   ├── Migrations/           # Database migrations
│   │   └── uploads/              # File uploads
│   ├── docs/                     # Backend documentation
│   └── README.md                 # Backend documentation
├── Frontend/                     # React application
│   ├── src/                      # Source code
│   │   ├── components/           # Reusable components
│   │   ├── pages/               # Page components
│   │   ├── styles/              # CSS files
│   │   └── assets/              # Static assets
│   ├── public/                  # Public assets
│   ├── docs/                    # Frontend documentation
│   └── README.md                # Frontend documentation
├── auction_system.sql           # Database schema
└── README.md                    # Main project documentation
```

## 🚀 Quick Start

### Prerequisites

- **.NET 8.0 SDK** for backend development
- **Node.js 18+** for frontend development
- **MySQL Server** for database
- **Git** for version control

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/dulanthabrew/WEB-PROJECT-VortexBid.git
   cd Vortex-Bid-New
   ```

2. **Backend Setup**

   ```bash
   cd Backend/api
   dotnet restore
   dotnet ef database update
   dotnet watch run
   ```

3. **Frontend Setup**

   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

4. **Database Setup**
   - Import `auction_system.sql` into your MySQL database
   - Update connection strings in `Backend/api/appsettings.json`

### Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: https://localhost:5000
- **API Documentation**: https://localhost:5000/swagger

## 🗄️ Database Schema

### Core Entities

#### Users

- User authentication and profile management
- Personal information and contact details
- Authentication tokens and security

#### Auctions

- Auction details and metadata
- Start/end times and bidding rules
- Status tracking and winner management

#### Bids

- Bid tracking and validation
- Bidder information and amounts
- Status and timestamp management

#### Payments

- Payment processing and tracking
- Stripe integration and verification
- Transaction history and receipts

#### Notifications

- Real-time notification system
- User-specific notifications
- Read/unread status tracking

#### AuctionItems

- Multiple items per auction
- Item details and images
- Category and description management

## 🔧 Configuration

### Backend Configuration

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3306;Database=auction_system;User=root;Password=your_password;"
  },
  "Stripe": {
    "SecretKey": "sk_test_...",
    "PublishableKey": "pk_test_..."
  }
}
```

### Frontend Configuration

```javascript
// API Base URL
const API_BASE_URL = "https://localhost:5000/api";

// Stripe Configuration
const stripePromise = loadStripe("pk_test_...");
```

## 📡 API Endpoints

### Authentication

- `POST /api/users/signup` - User registration
- `POST /api/users/login` - User authentication
- `PUT /api/users/edit` - Profile updates

### Auctions

- `GET /api/auctions` - List all auctions
- `POST /api/auctions/create` - Create new auction
- `GET /api/auctions/{id}` - Get auction details
- `POST /api/auctions/my` - Get user's auctions
- `PUT /api/auctions/edit` - Update auction details
- `DELETE /api/auctions/delete` - Delete auction

### Bidding

- `POST /api/bids/create` - Place a bid
- `GET /api/bids/{id}` - Get bid details
- `POST /api/auctions/mybids` - Get user's bids

### Payments

- `POST /api/payments/create` - Process payment
- `POST /api/payments/my` - Get payment history
- `POST /api/payments/check` - Verify payment status

### Notifications

- `GET /api/notifications/{id}` - Get user notifications
- `POST /api/notifications/read` - Mark as read

## 🎨 User Interface

### Public Pages

- **Landing Page**: Compelling homepage with featured auctions
- **Authentication**: Login and registration forms
- **How It Works**: Process explanation and user guide

### Dashboard Pages

- **Main Dashboard**: Analytics and overview
- **Auctions Management**: Create and manage auctions
- **Bidding Interface**: Real-time bidding experience
- **Profile Management**: User profile and settings
- **Payment History**: Transaction tracking
- **Notifications**: Real-time notification center

### Design Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, intuitive interface
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG compliant design
- **Performance**: Optimized for speed and efficiency

## 💳 Payment System

### Stripe Integration

- **Secure Processing**: PCI-compliant payment handling
- **Multiple Payment Methods**: Credit card support
- **Real-time Validation**: Instant payment verification
- **Receipt Generation**: Automatic receipt creation

### Payment Flow

1. **Bid Placement**: 10% upfront payment required
2. **Payment Processing**: Secure Stripe processing
3. **Verification**: Real-time payment verification
4. **Confirmation**: Payment confirmation and receipt
5. **Refund Process**: Automatic refund for non-winning bids

## 🔐 Security Features

### Authentication & Authorization

- **JWT Tokens**: Secure token-based authentication
- **Password Security**: Encrypted password storage
- **Session Management**: Secure session handling
- **Route Protection**: Protected dashboard routes

### Data Security

- **Input Validation**: Comprehensive input validation
- **SQL Injection Prevention**: Parameterized queries
- **XSS Protection**: Cross-site scripting prevention
- **CSRF Protection**: Cross-site request forgery prevention

### Payment Security

- **PCI Compliance**: Stripe's PCI-compliant infrastructure
- **Encrypted Transmission**: HTTPS for all communications
- **Secure Storage**: Encrypted sensitive data storage
- **Audit Trail**: Complete transaction logging

## 📊 Analytics & Reporting

### Dashboard Metrics

- **Total Auctions**: Count of all auctions
- **Active Bids**: Current active bids
- **Auction Income**: Total revenue generated
- **Completed Auctions**: Successfully completed auctions

### Visual Analytics

- **Category Distribution**: Pie charts showing auction categories
- **Trend Analysis**: Bar charts showing auction trends
- **Activity Feed**: Real-time activity updates
- **Performance Metrics**: User and system performance data

## 🚀 Deployment

### Production Requirements

- **Web Server**: IIS or Linux server
- **Database**: MySQL production server
- **SSL Certificate**: HTTPS configuration
- **Domain**: Production domain setup

### Environment Configuration

```bash
# Production Environment Variables
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__DefaultConnection="Server=prod-server;Database=auction_system;User=prod_user;Password=secure_password;"
Stripe__SecretKey="sk_live_..."
Stripe__PublishableKey="pk_live_..."
```

### Deployment Steps

1. **Database Setup**: Configure production MySQL
2. **Backend Deployment**: Deploy ASP.NET Core application
3. **Frontend Build**: Build and deploy React application
4. **SSL Configuration**: Set up HTTPS certificates
5. **Domain Configuration**: Configure production domain
6. **Monitoring**: Set up application monitoring

## 🧪 Testing

### Backend Testing

- **API Testing**: Swagger UI for endpoint testing
- **Database Testing**: Entity Framework migrations
- **Integration Testing**: End-to-end API testing
- **Performance Testing**: Load and stress testing

### Frontend Testing

- **Component Testing**: Individual component testing
- **Integration Testing**: Page-level testing
- **User Experience Testing**: Usability testing
- **Cross-browser Testing**: Browser compatibility testing

## 📈 Performance Optimization

### Backend Optimization

- **Database Indexing**: Optimized database queries
- **Caching**: Response caching for frequently accessed data
- **Connection Pooling**: Efficient database connections
- **Async Operations**: Asynchronous processing

### Frontend Optimization

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Component lazy loading
- **Bundle Optimization**: Minimized bundle size
- **Asset Optimization**: Optimized images and assets

## 🔄 Development Workflow

### Version Control

- **Git**: Distributed version control
- **Branching Strategy**: Feature branch workflow
- **Code Review**: Pull request reviews
- **Continuous Integration**: Automated testing and deployment

### Development Tools

- **IDE**: Visual Studio 2022 or VS Code
- **Package Managers**: NuGet (backend), npm (frontend)
- **Build Tools**: .NET CLI, Vite
- **Linting**: ESLint for code quality

## 📞 Support & Documentation

### Documentation

- **Backend Documentation**: `/Backend/README.md`
- **Frontend Documentation**: `/Frontend/README.md`
- **API Documentation**: Swagger UI at `/swagger`
- **Database Schema**: `auction_system.sql`

### Getting Help

- **Code Comments**: Comprehensive inline documentation
- **API Examples**: Swagger documentation with examples
- **Component Documentation**: React component documentation
- **Troubleshooting**: Common issues and solutions

## 🔄 Version History

### v1.0.0 - Initial Release

- Basic auction functionality
- User authentication
- Simple bidding system
- Basic payment integration

### v1.1.0 - Payment Integration

- Stripe payment processing
- Secure payment handling
- Payment history tracking
- Receipt generation

### v1.2.0 - Enhanced Features

- Real-time notifications
- Dashboard analytics
- Chart visualizations
- Performance improvements

### v1.3.0 - Advanced Analytics

- Comprehensive reporting
- Advanced dashboard metrics
- User performance tracking
- System optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**VortexBid** - Your comprehensive solution for online auction management.
