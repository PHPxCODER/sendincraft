# SendinCraft 📧

A powerful, self-hosted email automation platform that makes sending transactional emails, marketing campaigns, and automated workflows simple and reliable.

## ✨ Features

- **🚀 Transactional Emails**: Send emails programmatically via REST API
- **📊 Email Campaigns**: Create and send marketing campaigns to your contacts
- **⚡ Automation**: Set up triggered email workflows based on user events
- **📈 Analytics**: Track email opens, clicks, bounces, and delivery rates
- **🔧 Templates**: Create reusable email templates with dynamic content
- **👥 Contact Management**: Manage subscriber lists and contact metadata
- **🏷️ Event Tracking**: Track user events and trigger automated responses
- **🔒 Domain Verification**: Verify your domains for better deliverability
- **📋 Team Management**: Collaborate with team members on projects
- **📱 Dashboard**: Intuitive web interface for managing everything

## 🛠️ Tech Stack

### Backend
- **Node.js** with **TypeScript**
- **Express.js** with **@overnightjs/core** for API routing
- **Prisma** ORM with **PostgreSQL** database
- **Redis** for caching and session management
- **AWS SES** for email delivery
- **Zod** for schema validation
- **MJML** for responsive email templates

### Frontend
- **React** with **TypeScript**
- **Next.js** framework
- **Tailwind CSS** for styling
- Modern component architecture

### Infrastructure
- **Docker** support for easy deployment
- **Yarn Workspaces** for monorepo management
- **Prisma Migrations** for database schema management

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Yarn 4.3.x
- PostgreSQL database
- Redis server
- AWS SES credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PHPxCODER/sendincraft.git
   cd sendincraft
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   
   **API Environment (.env)**
   ```env
   # Database
   DATABASE_URL=postgresql://username:password@localhost:5432/sendincraft
   
   # Redis
   REDIS_URL=redis://localhost:6379
   
   # JWT Secret
   JWT_SECRET=your-super-secret-jwt-key
   
   # AWS SES Configuration
   AWS_REGION=us-east-1
   AWS_ACCESS_KEY_ID=your-aws-access-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret-key
   AWS_SES_CONFIGURATION_SET=your-ses-configuration-set
   
   # App URLs
   API_URI=http://localhost:4000
   APP_URI=http://localhost:3000
   
   # Optional: Disable signups
   DISABLE_SIGNUPS=false
   ```

4. **Set up the database**
   ```bash
   yarn generate
   yarn migrate
   ```

5. **Start development servers**
   ```bash
   # Start all services (PostgreSQL, Redis)
   yarn services:up
   
   # Start API server
   yarn dev:api
   
   # Start dashboard (in another terminal)
   yarn dev:dashboard
   ```

6. **Access the application**
   - Dashboard: http://localhost:3000
   - API: http://localhost:4000

## 📁 Project Structure

```
sendincraft/
├── packages/
│   ├── api/                 # Backend API server
│   │   ├── src/
│   │   │   ├── controllers/ # API route controllers
│   │   │   ├── services/    # Business logic
│   │   │   ├── middleware/  # Express middleware
│   │   │   ├── util/        # Utility functions
│   │   │   └── database/    # Database configuration
│   │   └── package.json
│   ├── dashboard/           # Frontend React app
│   │   ├── src/
│   │   │   ├── components/  # React components
│   │   │   ├── pages/       # Next.js pages
│   │   │   ├── hooks/       # Custom React hooks
│   │   │   └── utils/       # Frontend utilities
│   │   └── package.json
│   └── shared/              # Shared schemas and types
│       ├── src/
│       │   └── index.ts     # Zod schemas
│       └── package.json
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── migrations/          # Database migrations
├── docker-compose.dev.yml   # Development services
└── package.json             # Root package.json
```

## 🔧 Configuration

### Domain Setup

SendinCraft uses custom MAIL FROM domains for better email deliverability:

1. **Default Configuration**: Emails are sent from `sendincraft.yourdomain.com`
2. **Custom Subdomain**: You can specify custom subdomains like `bounces.yourdomain.com`
3. **DNS Records**: The platform provides the required DNS records for setup

### AWS SES Setup

1. Create an AWS SES configuration set
2. Set up SNS notifications for bounces, complaints, and delivery tracking
3. Configure the webhook endpoint: `https://yourapi.com/webhooks/incoming/sns`

## 📖 API Documentation

### Authentication

All API endpoints require authentication via API keys:

- **Secret Key**: `sk_...` for server-side operations
- **Public Key**: `pk_...` for client-side tracking

### Core Endpoints

#### Send Transactional Email
```bash
POST /v1/send
Authorization: Bearer sk_your_secret_key

{
  "to": ["user@example.com"],
  "subject": "Welcome!",
  "body": "<h1>Welcome to our platform!</h1>",
  "from": "hello@yourdomain.com"
}
```

#### Track Events
```bash
POST /v1/track
Authorization: Bearer pk_your_public_key

{
  "email": "user@example.com",
  "event": "user-signup",
  "data": {
    "plan": "premium"
  }
}
```

#### Manage Contacts
```bash
POST /v1/contacts
Authorization: Bearer sk_your_secret_key

{
  "email": "user@example.com",
  "subscribed": true,
  "data": {
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

## 🚢 Deployment

### Docker Deployment

1. **Build the containers**
   ```bash
   docker-compose up -d
   ```

2. **Run migrations**
   ```bash
   docker-compose exec api yarn migrate:deploy
   ```

### Environment Setup

Ensure all environment variables are properly configured for production:
- Use strong JWT secrets
- Configure proper database connections
- Set up AWS SES with appropriate permissions
- Configure Redis for production use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📜 Scripts

### Development
- `yarn dev:api` - Start API development server
- `yarn dev:dashboard` - Start dashboard development server
- `yarn dev:shared` - Watch shared package for changes

### Building
- `yarn build:api` - Build API for production
- `yarn build:dashboard` - Build dashboard for production
- `yarn build:shared` - Build shared package

### Database
- `yarn migrate` - Run database migrations
- `yarn migrate:deploy` - Deploy migrations to production
- `yarn generate` - Generate Prisma client

### Services
- `yarn services:up` - Start development services (PostgreSQL, Redis)
- `yarn services:down` - Stop development services

### Utilities
- `yarn clean` - Clean all dependencies and reinstall

## 🔒 Security

- All API endpoints are protected with proper authentication
- JWT tokens for session management
- Input validation using Zod schemas
- SQL injection protection via Prisma ORM
- Rate limiting and request validation

## 📊 Monitoring

The platform includes built-in analytics for:
- Email delivery rates
- Open and click tracking
- Bounce and complaint monitoring
- Contact growth metrics
- Campaign performance

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Verify PostgreSQL is running
   - Check DATABASE_URL format
   - Ensure database exists

2. **Redis Connection Issues**
   - Verify Redis server is running
   - Check REDIS_URL configuration

3. **AWS SES Issues**
   - Verify AWS credentials
   - Check SES service limits
   - Ensure domain verification is complete

4. **Email Delivery Issues**
   - Check DNS records are properly configured
   - Verify domain verification status
   - Review AWS SES reputation

## 📄 License

This project is licensed under the AGPL-3.0 License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the need for self-hosted email automation
- Community-driven development

---

**Ready to send amazing emails?** 🚀

Start by setting up your first project and verifying your domain!
