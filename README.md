# AttendPro – Attendance & HR Portal

AttendPro is a small, opinionated **HR & attendance portal** for teams.  
The UI is built with **React + TypeScript** and **Vite**, while the API is powered by **FastAPI**, **PostgreSQL**, and **SQLAlchemy**.  
Use it to keep a lightweight record of employees, daily check‑ins, and high‑level attendance trends.

---

## Live Demo

Live deployment:

| Layer    | URL |
|----------|-----|
| Frontend | `https://hrms-iota-three.vercel.app/` |
| Backend  | `https://hrms-uc3g.onrender.com/` |
| API Docs | `https://hrms-uc3g.onrender.com/docs` |

---

## Features

### What you can do
- **Monitor the day at a glance** – Attendance percentage, quick stats, and the latest activity on a single dashboard.
- **Manage employees** – Create, search, and filter employees by department; view key details and remove records safely.
- **Record attendance** – Mark staff as Present, Absent, Late, or Half Day; update records and slice by date range.

### Nice touches
- Per‑employee **total present days** so you can see consistency over time.
- Rich filters on the attendance table (date span, employee, status).
- A compact summary bar that breaks down counts by status.
- Clean, responsive layout that works from mobile to desktop.

### UX details
- Non‑blocking toast notifications for all mutations.
- Confirmation prompts before destructive actions.
- Dedicated loading, error, and empty states for smoother flows.

---

## Tech Stack

### Frontend
- **React 18** – Component‑based UI.
- **Vite** – Fast dev server and bundler.
- **React Router** – Client‑side navigation between pages.
- **Tailwind CSS** – Utility‑first styling.
- **Axios** – HTTP client for talking to the API.

### Backend
- **FastAPI** – Async web framework with automatic docs.
- **SQLAlchemy** – ORM and query layer.
- **PostgreSQL** – Relational data store.
- **Pydantic** – Data validation and serialization.
- **Uvicorn** – ASGI server used in production.

---

## Project Structure

```
├── backend/
│   ├── app/
│   │   ├── main.py          # FastAPI app + CORS + routers
│   │   ├── database.py      # PostgreSQL
│   │   ├── models.py        # Employee & Attendance models
│   │   ├── schemas.py       # Pydantic schemas
│   │   └── routers/
│   │       ├── employees.py
│   │       ├── attendance.py
│   │       └── dashboard.py
│   ├── requirements.txt
│   └── .env
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── pages/
    │   └── types/
    ├── tailwind.config.js
    └── package.json
```

---

## Running Locally

### Prerequisites
- Python 3.11+ available on your PATH
- Node.js 18+ (LTS) and npm

### 1 – Start the backend API

```bash
cd backend

python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The API will be reachable at `http://localhost:8000` and the interactive docs at `http://localhost:8000/docs`.

### 2 – Start the frontend

```bash
cd frontend
npm install
npm run dev
```

By default Vite serves the app on `http://localhost:5173`.

---

## Deploy to production

**Repository:** [`abhinav-sys/hrms`](https://github.com/abhinav-sys/hrms)

The production setup used for this demo is:

- **Backend:** Render (`https://hrms-uc3g.onrender.com/`)
- **Frontend:** Vercel (`https://hrms-iota-three.vercel.app/`)

You can either reuse that layout or adapt the steps below for your own accounts.

### 1. Backend on Render

1. Sign in to [Render](https://render.com) and choose **New → Web Service**.
2. Connect the GitHub repo `abhinav-sys/hrms`.
3. Configure the service:
   - **Name:** anything you like (for example, `attendpro-backend`)
   - **Root Directory:** `backend`
   - **Runtime:** Python 3
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. Add environment variables:
   - `DATABASE_URL` – your Postgres connection string (Neon, Render, RDS, etc.),  
     e.g. `postgresql://user:pass@host/dbname?sslmode=require`
5. Create the service and wait for the first deployment to finish.
6. Note the public URL, for example `https://hrms-uc3g.onrender.com/`.

### 2. Frontend on Vercel

1. Go to [Vercel](https://vercel.com) → **Add New → Project**.
2. Import the `abhinav-sys/hrms` repository.
3. Under **Project Settings → Build & Development**:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Framework Preset:** Vite
4. Under **Environment Variables**, add:
   - `VITE_API_URL` = your Render backend URL (for example, `https://hrms-uc3g.onrender.com`) – without a trailing slash.
5. Deploy the project; Vercel will give you a URL such as `https://hrms-iota-three.vercel.app/`.

### 3. After deploy

- Visit `https://hrms-iota-three.vercel.app/` to use the app in production.
- Confirm that API requests are going to `https://hrms-uc3g.onrender.com`.
- If you ever change the backend URL, update `VITE_API_URL` in Vercel and trigger a new deployment.

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET    | `/api/employees` | List (search/dept filter) |
| POST   | `/api/employees` | Create employee |
| PUT    | `/api/employees/{id}` | Update |
| DELETE | `/api/employees/{id}` | Delete |
| GET    | `/api/attendance` | List (filters) |
| POST   | `/api/attendance` | Mark attendance |
| PUT    | `/api/attendance/{id}` | Update record |
| GET    | `/api/dashboard/stats` | Stats summary |

---

## Notes

- Create a PostgreSQL database named **attendpro** (or set `DATABASE_URL`).
- Attendance statuses: **Present**, **Absent**, **Late**, **Half Day**.
- Future dates cannot be marked for attendance.

---

## License
MIT
