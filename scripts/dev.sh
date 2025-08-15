# shellcheck disable=SC2164
cd ../apps/backend
npm run dev &
BACKEND_PID=$!

# Start frontend
cd ../web
npm run dev &
FRONTEND_PID=$!

echo "🚀 Backend (PID $BACKEND_PID) and Frontend (PID $FRONTEND_PID) started."