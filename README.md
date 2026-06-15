# FixGo

Home services marketplace connecting customers, service providers, companies, and administrators in Sri Lanka.

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Zustand, React Hook Form + Zod
- **Backend**: Java 17, Spring Boot 3.2, Spring Security (JWT), Spring Data JPA, Flyway, JavaMailSender, Twilio SMS
- **Database**: PostgreSQL 14+

---

## Folder Structure

```
fixgo_project/
├── backend/               Spring Boot API (port 8080)
│   ├── src/main           Production code
│   ├── src/test           JUnit 5 tests
│   └── uploads/           User-uploaded files (auto-created, gitignored)
├── frontend/              React SPA (port 5173)
│   ├── src/pages          All page components by role
│   ├── src/components     Shared UI components
│   ├── src/services       API client modules
│   └── src/store          Zustand state stores
├── database/              Reference schema dump
├── .env                   Local environment config (gitignored)
└── README.md
```

---

## Setup

### Prerequisites

| Tool       | Version  |
|------------|----------|
| Java JDK   | 17+      |
| Node.js    | 18+      |
| PostgreSQL | 14+      |

### 1. Create the Database

```bash
psql -U postgres
```

```sql
CREATE USER fixgo_user WITH PASSWORD 'fixgo_password';
CREATE DATABASE fixgo_db OWNER fixgo_user;
\q
```

### 2. Create the .env File

Create a file named `.env` in the project root:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fixgo_db
DB_USER=fixgo_user
DB_PASSWORD=fixgo_password

# Auth
JWT_SECRET=bXlfc3VwZXJfc2VjcmV0X2tleV9mb3JfZml4Z29fcHJvamVjdF9kZXZlbG9wbWVudA==
JWT_EXPIRATION=86400000

# Admin account (auto-created on first boot)
ADMIN_EMAIL=admin@fixgo.com
ADMIN_PASSWORD=Admin@123

# URLs
FRONTEND_URL=http://localhost:5173

# Email (optional — falls back to console logging if blank)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=
MAIL_APP_PASSWORD=
MAIL_FROM=FixGo <no-reply@fixgo.local>

# Stripe (optional — falls back to stub mode if blank)
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_CURRENCY=lkr

# Twilio SMS for admin OTP (optional — falls back to console logging)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_FROM_NUMBER=
ADMIN_PHONE=

# Chatbot LLM (optional — works without it using FAQ retrieval only)
LLM_PROVIDER=groq
LLM_API_KEY=
LLM_MAX_TOKENS=400
```

### 3. Start the Backend

```bash
cd backend
./mvnw spring-boot:run
```

First run creates all tables via Flyway and seeds the admin account + 8 service categories.

### 4. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173.

### Default Admin Login

| Email            | Password   |
|------------------|------------|
| admin@fixgo.com  | Admin@123  |

Admin login requires a 6-digit OTP code. If email/SMS is not configured, the code is printed in the backend terminal logs.

---

## User Roles

### Customer
- Browse and search verified providers by category and city
- Book services with date, time, and address
- Request quotations from providers
- Raise emergency requests with urgency level and city
- Review and confirm provider offers (emergency flow)
- Pay via Stripe (online) or cash/bank transfer (manual)
- Leave reviews and ratings
- File complaints
- Community forum and AI chat assistant

### Service Provider
- Register with ID document upload (required)
- Approval required by admin before portal access (profile and settings accessible while pending)
- Add services by category with base price (must meet admin's minimum starting rate)
- Set weekly availability schedule
- Accept/reject bookings, start and complete jobs
- Accept emergency requests with estimated price and ETA (only for services they offer in their city)
- Emergency dispatch board filtered to show only matching service category and nearby (same city) requests
- Respond to quotation requests with price, timeline, and message
- Upload portfolio photos
- View earnings, reviews, and notifications

### Company
- Post multi-job projects with budget range, category, duration, and location
- Review provider applications, shortlist, and hire
- Manage company profile and service history

### Admin
- Dashboard with platform analytics and reports
- Verify/reject providers with full detail review (profile, ID document, completeness checklist)
- Manage service categories (create, edit, disable) with starting prices
- Oversee all bookings, emergencies, payments, reviews, and complaints
- Force-assign emergencies to providers (restricted to providers who offer the required service)
- Force-resolve or force-cancel emergencies with notes (notifies customer and provider)
- Receives notifications for all new emergency requests
- Moderate reviews (flag/hide)
- Resolve complaints with notes
- Audit log of system actions
- Chatbot query management
- User management (suspend/activate accounts)
- Notifications inbox

---

## Key Flows

### Booking Flow
1. Customer browses providers, selects one, picks category/date/address
2. Provider receives notification, confirms the booking
3. Provider marks job as started, then completed
4. Customer pays (online via Stripe or manual cash/bank transfer)
5. Customer leaves a review

### Quotation Flow
1. Customer sends a quote request to a provider with job description
2. Provider responds with proposed price, estimated time, and message
3. Customer reviews the quote — accepts or rejects
4. If accepted, customer is redirected to a pre-filled booking form

### Emergency Flow
1. Customer raises emergency request with city, service type, urgency, address, description, and photos
2. System notifies only providers who offer the matching service category **and** are in the same city
3. If no city match, falls back to all providers who offer the matching service category
4. Providers who do not offer the service are never notified and cannot see or accept the emergency
5. Admin is also notified of every new emergency request
6. Provider accepts the request with an estimated price and ETA — customer is notified
7. Customer reviews the provider's offer (name, price, ETA) — confirms or rejects
8. If customer confirms, a booking and payment are auto-created — provider is notified
9. If customer rejects, the request reopens for other providers — provider is notified
10. Admin can force-assign a provider, but only from providers who offer the required service
11. All status changes (accept, confirm, reject, resolve, cancel) trigger notifications to the other party
12. Once confirmed, provider manages the job through the normal booking flow (start, complete)
13. Customer pays through the booking detail page

### Provider Approval Flow
1. Provider registers with name, email, phone, city, services, and ID document (required)
2. Provider portal is blocked (approval pending screen) — only profile and settings accessible
3. Admin reviews provider details (bio, experience, hourly rate, email verified, ID document, completeness checklist)
4. Admin approves or rejects with optional note
5. On approval, provider gets full portal access and an email notification

### Payment Flow
- Every completed booking shows a Pay button with two options:
  - **Pay Online** — redirects to Stripe checkout (credit/debit card)
  - **Pay Manually** — marks payment as completed (cash or bank transfer)
- Payment method (Online/Manual) is displayed on the booking detail and payments pages
- Provider service prices are enforced to be at or above the admin's category starting rate

---

## API Overview

All responses use `{ success, message, data, timestamp }`.

### Public Endpoints (no auth)
- `GET /api/categories` — active service categories
- `GET /api/providers` — verified providers with live ratings and stats
- `GET /api/providers/{id}` — provider detail
- `GET /api/reviews/provider/{id}` — reviews for a provider
- `GET /api/provider-services/by-provider/{id}` — services offered by a provider
- `GET /api/portfolio/{providerId}` — provider portfolio images
- `POST /api/auth/signup` — register
- `POST /api/auth/login` — login (returns JWT or MFA ticket for admin)
- `POST /api/auth/upload-id` — upload ID document during registration

### Authenticated Endpoints
- `/api/bookings/**` — booking CRUD and status updates
- `/api/quotations/**` — quotation requests and responses
- `/api/emergencies/**` — emergency dispatch, accept, confirm, reject
- `/api/payments/**` — payment records, checkout, confirm
- `/api/reviews/**` — review CRUD
- `/api/users/me/**` — profile management
- `/api/notifications/**` — notification inbox
- `/api/admin/**` — admin-only management endpoints

---

## Tech Notes

- JWT authentication with role-based access control (ROLE_CUSTOMER, ROLE_SERVICE_PROVIDER, ROLE_COMPANY, ROLE_ADMIN)
- Admin login uses two-factor authentication (password + 6-digit OTP via email/SMS)
- Account lockout after 5 failed login attempts
- All phone inputs restrict to numeric characters only
- All form fields have placeholders and mandatory field markers
- Select dropdowns styled consistently with custom chevron
- City selection uses a predefined Sri Lankan cities list across all forms
- Service categories fetched from backend (admin-managed, not hardcoded)
- Provider ratings, reviews count, jobs completed, and response time computed from live database data
- File uploads stored locally under `backend/uploads/` (configurable via UPLOADS_DIR)
- Flyway manages all database migrations (V1 through V28)
- Currency is Sri Lankan Rupees (LKR) throughout the platform
