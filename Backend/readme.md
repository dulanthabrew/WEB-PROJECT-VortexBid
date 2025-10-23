# VortexBid Backend API

## Overview

VortexBid is a comprehensive auction management system built with ASP.NET Core 8.0 and Entity Framework Core. The backend provides a robust REST API for managing auctions, bids, payments, users, and notifications with MySQL database integration.

## 🏗️ Architecture

### Technology Stack
- **Framework**: ASP.NET Core 8.0
- **Database**: MySQL with Entity Framework Core
- **ORM**: Entity Framework Core 8.0.8
- **Payment Processing**: Stripe.net integration
- **API Documentation**: Swagger/OpenAPI
- **Background Services**: Hosted services for auction management

### Project Structure
```
Backend/
├── api/                          # Main API project
│   ├── Controllers/              # API Controllers
│   │   ├── AuctionsController.cs
│   │   ├── BidsController.cs
│   │   ├── Dashboard.cs
│   │   ├── NotificationsController.cs
│   │   ├── PaymentController.cs
│   │   └── UsersController.cs
│   ├── Data/                     # Database context
│   │   └── APIContext.cs
│   ├── Dtos/                     # Data Transfer Objects
│   │   ├── Auctions/
│   │   ├── Bids/
│   │   ├── Dashboard/
│   │   ├── Notifications/
│   │   ├── Payments/
│   │   └── Users/
│   ├── Mappers/                  # Object mappers
│   ├── Migrations/               # Database migrations
│   ├── Models/                   # Entity models
│   │   ├── Auction.cs
│   │   ├── AuctionItem.cs
│   │   ├── Bid.cs
│   │   ├── Notification.cs
│   │   ├── Payment.cs
│   │   └── User.cs
│   ├── uploads/                  # File uploads directory
│   ├── Program.cs                # Application entry point
│   └── BgServices.cs             # Background services
└── docs/                         # Documentation
```

## 🗄️ Database Schema

### Core Entities

#### Users
- **UserId**: Primary key
- **Personal Info**: FirstName, LastName, Email, Username, Gender, Mobile, Address
- **Authentication**: Password, Token
- **Timestamps**: CreatedAt, UpdatedAt
- **Relationships**: One-to-many with Auctions and Bids

#### Auctions
- **AuctionId**: Primary key
- **Details**: Title, Description, AuctionImage, AuctionCategory
- **Participants**: SellerId, WinnerId
- **Timing**: StartTime, EndTime
- **Financial**: StartingBid, WinningBid
- **Status**: Status, IsLive
- **Relationships**: One-to-many with AuctionItems and Bids

#### Bids
- **BidId**: Primary key
- **References**: AuctionId, BidderId
- **Details**: BidderName, Status, BidAmount
- **Timestamps**: CreatedAt, UpdatedAt

#### Payments
- **PaymentId**: Primary key
- **References**: UserId, AuctionId
- **Details**: Amount, PaymentMethod, Type, IsOK, PaymentStatus
- **Timestamps**: CreatedAt, UpdatedAt

#### Notifications
- **Id**: Primary key
- **References**: UserId
- **Content**: Link, Title, Message, IsRead
- **Timestamps**: CreatedAt, UpdatedAt

#### AuctionItems
- **AuctionItemId**: Primary key
- **References**: AuctionId
- **Details**: ItemName, ItemDescription, ItemImage, ItemCategory
- **Timestamps**: CreatedAt, UpdatedAt

## 🚀 Getting Started

### Prerequisites
- .NET 8.0 SDK
- MySQL Server
- Visual Studio 2022 or VS Code

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dulanthabrew/WEB-PROJECT-VortexBid.git
   cd Vortex-Bid-New/Backend
   ```

2. **Restore dependencies**
   ```bash
   dotnet restore
   ```

3. **Install Entity Framework tools**
   ```bash
   dotnet tool install --global dotnet-ef --version 8.*
   ```

4. **Configure database connection**
   
   Update `appsettings.json`:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Port=3306;Database=auction_system;User=root;Password=your_password;"
     }
   }
   ```

5. **Navigate to API directory**
   ```bash
   cd api
   ```

6. **Run database migrations**
   ```bash
   dotnet ef database update
   ```

7. **Run the application**
   ```bash
   dotnet watch run
   ```

The API will be available at `https://localhost:5000` with Swagger documentation at `https://localhost:5000/swagger`.

## 📡 API Endpoints

### Authentication & Users
- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users/signup` - Register new user
- `POST /api/users/login` - User login
- `PUT /api/users/edit` - Update user profile
- `POST /api/users/resetPassword` - Reset user password

### Auctions
- `GET /api/auctions` - Get all auctions
- `GET /api/auctions/{id}` - Get auction by ID
- `POST /api/auctions/create` - Create new auction
- `POST /api/auctions/my` - Get user's auctions
- `POST /api/auctions/mybids` - Get user's bids
- `POST /api/auctions/statusUpdate` - Update auction status
- `POST /api/auctions/additem` - Add item to auction
- `POST /api/auctions/upload-image` - Upload auction image
- `PUT /api/auctions/edit` - Update auction details
- `DELETE /api/auctions/delete` - Delete auction

### Bids
- `GET /api/bids` - Get all bids
- `GET /api/bids/{id}` - Get bid by ID
- `POST /api/bids/create` - Create new bid

### Payments
- `GET /api/payments/{id}` - Get payment by ID
- `POST /api/payments/create` - Create payment
- `POST /api/payments/info` - Get payment info
- `POST /api/payments/check` - Check payment status
- `POST /api/payments/my` - Get user's payments

### Notifications
- `GET /api/notifications/{id}` - Get notifications by user ID
- `POST /api/notifications/check` - Check for new notifications
- `POST /api/notifications/read` - Mark notification as read

### Dashboard
- `POST /api/dashboard/all` - Get dashboard data

## 🔧 Configuration

### CORS Configuration
The API is configured to allow requests from the frontend:
```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policyBuilder =>
    {
        policyBuilder.WithOrigins("http://localhost:5173");
        policyBuilder.AllowAnyHeader();
        policyBuilder.AllowAnyMethod();
        policyBuilder.AllowCredentials();
    });
});
```

### Static Files
Uploaded images are served from the `/uploads` directory:
```csharp
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "uploads")),
    RequestPath = "/uploads"
});
```

## 💳 Payment Integration

The system integrates with Stripe for payment processing:
- **Package**: Stripe.net 46.2.0
- **Features**: Credit card processing, payment verification
- **Security**: Secure payment handling with Stripe's infrastructure

## 🔄 Background Services

The application includes background services for:
- Auction status management
- Automatic auction closing
- Notification generation
- Payment processing

## 📊 Data Models

### Key Relationships
- **User** → **Auctions** (One-to-Many)
- **User** → **Bids** (One-to-Many)
- **Auction** → **AuctionItems** (One-to-Many)
- **Auction** → **Bids** (One-to-Many)
- **User** → **Payments** (One-to-Many)
- **User** → **Notifications** (One-to-Many)

### Data Validation
- String length constraints on all text fields
- Decimal precision for monetary values
- Required fields validation
- Foreign key constraints

## 🛡️ Security Features

- **CORS Protection**: Configured for specific origins
- **Input Validation**: Data annotations on all models
- **SQL Injection Prevention**: Entity Framework parameterized queries
- **File Upload Security**: Controlled file uploads to specific directory

## 📈 Performance Considerations

- **Database Indexing**: Primary keys and foreign keys indexed
- **Lazy Loading**: Configured for optimal data loading
- **Connection Pooling**: MySQL connection pooling enabled
- **Static File Caching**: Optimized static file serving

## 🧪 Testing

### API Testing
Use the Swagger UI at `https://localhost:5000/swagger` to test endpoints interactively.

### Database Testing
```bash
# Check migration status
dotnet ef migrations list

# Create new migration
dotnet ef migrations add MigrationName

# Update database
dotnet ef database update
```

## 🚀 Deployment

### Production Considerations
1. **Database**: Configure production MySQL connection
2. **Security**: Update CORS origins for production domains
3. **File Storage**: Configure proper file upload paths
4. **Logging**: Implement structured logging
5. **Monitoring**: Add health checks and monitoring

### Environment Variables
```bash
# Database
ConnectionStrings__DefaultConnection="Server=prod-server;Database=auction_system;User=prod_user;Password=secure_password;"

# Stripe
Stripe__SecretKey="sk_live_..."
Stripe__PublishableKey="pk_live_..."
```

## 📝 API Documentation

The API includes comprehensive Swagger documentation accessible at `/swagger` when running in development mode. The documentation includes:

- Complete endpoint descriptions
- Request/response schemas
- Example payloads
- Authentication requirements
- Error response formats

## 🔧 Development

### Adding New Features
1. Create new models in `Models/` directory
2. Add corresponding DTOs in `Dtos/` directory
3. Create controllers in `Controllers/` directory
4. Add database migrations
5. Update API documentation

### Code Structure
- **Controllers**: Handle HTTP requests and responses
- **Models**: Define database entities
- **DTOs**: Define data transfer objects for API
- **Mappers**: Convert between models and DTOs
- **Services**: Business logic (can be added for complex operations)

## 📞 Support

For technical support or questions about the backend API:
- Review the Swagger documentation
- Check the database schema in `auction_system.sql`
- Examine the existing controllers for implementation patterns
- Refer to Entity Framework Core documentation for database operations

## 🔄 Version History

- **v1.0.0**: Initial release with core auction functionality
- **v1.1.0**: Added payment integration with Stripe
- **v1.2.0**: Enhanced notification system
- **v1.3.0**: Added dashboard analytics and reporting