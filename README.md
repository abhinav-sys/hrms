# AttendPro – Attendance & HR Portal

A full-stack **Attendance & HR Management** app built with **React + TypeScript** (frontend) and **FastAPI + Python** (backend). Track attendance, manage employees, and view live stats with a clean, modern UI.

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

### Core
- **Dashboard** – Live attendance rate, stat cards, recent employees, quick-action shortcuts
- **Employee Management** – Add, search, filter by department, view details, delete (with cascade)
- **Attendance Tracking** – Mark attendance (Present / Absent / Late / Half Day), edit records, date-range filter

### Bonus
- Total present days shown per employee
- Filter attendance by date range, employee, and status
- Mini summary bar on attendance page (counts per status)
- Attendance rate progress bar on dashboard

### UX
- Toast notifications for all actions
- Confirmation dialogs before destructive actions
- Loading states, error states, and empty states
- Fully responsive (mobile sidebar, card-based mobile tables)

---

## Tech Stack

### Frontend
- **React 18** – UI library
- **Vite** – Build tool and dev server
- **React Router** – Client-side routing
- **Tailwind CSS** – Styling
- **Axios** – HTTP client

### Backend
- **FastAPI** – Python web framework
- **SQLAlchemy** – ORM
- **PostgreSQL** – Database
- **Pydantic** – Validation
- **Uvicorn** – ASGI server

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
- Python 3.11+
- Node.js 18+

### 1 – Backend

```bash
cd backend

python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

API: `http://localhost:8000` · Docs: `http://localhost:8000/docs`

### 2 – Frontend

```bash
cd frontend
npm install
npm run dev
```

App: `http://localhost:5173`

---

## Deploy to production

**Repo:** [https://github.com/abhinav-sys/hrms](https://github.com/abhinav-sys/hrms)

Deploy **backend first** (Render), then **frontend** (Vercel) so you can set the API URL.

### 1. Push code to GitHub

```bash
cd path/to/hrms-portal-main   # or your project root (where frontend/ and backend/ are)
git init
git add .
git commit -m "AttendPro: full-stack attendance app"
git branch -M main
git remote add origin https://github.com/abhinav-sys/hrms.git
git push -u origin main
```

(If the repo already has content, use `git pull origin main --rebase` then `git push origin main`.)

---

### 2. Backend on Render

1. Go to [render.com](https://render.com) → **Dashboard** → **New** → **Web Service**.
2. Connect the repository **abhinav-sys/hrms** (or push your code there first).
3. Configure:
   - **Name:** `attendpro-backend` (or any name)
   - **Root Directory:** `backend`
   - **Runtime:** Python 3
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. **Environment:**
   - Add **DATABASE_URL** = your Neon (or other Postgres) URL, e.g.  
     `postgresql://user:pass@host/dbname?sslmode=require`
5. Click **Create Web Service**. Wait for the first deploy.
6. Copy your backend URL, e.g. `https://attendpro-backend-xxxx.onrender.com`.

---

### 3. Frontend on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. Import **abhinav-sys/hrms** (or the repo you pushed).
3. Configure:
   - **Root Directory:** `frontend` (click Edit, set to `frontend`)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Framework Preset:** Vite (optional; Vercel usually detects it)
4. **Environment variable:**
   - Name: `VITE_API_URL`  
   - Value: your Render backend URL (e.g. `https://hrms-uc3g.onrender.com`)  
   - No trailing slash.
5. Deploy. Your app will be at `https://hrms-iota-three.vercel.app/` (or your custom domain).

---

### 4. After deploy

- **Frontend:** Open `https://hrms-iota-three.vercel.app/`; the app will call the backend using `VITE_API_URL`.
- **API docs:** `https://hrms-uc3g.onrender.com/docs`
- If you change the Render service URL, update `VITE_API_URL` in Vercel and redeploy the frontend.

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
