from rest_framework import viewsets, permissions, filters
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    """
    /api/tasks/ 支持：
    - GET /api/tasks/?status=TODO|DOING|DONE
    - POST /api/tasks/ {"title": "...", "description": "..."}
    - PATCH /api/tasks/{id}/ {"status": "DONE"}
    - DELETE /api/tasks/{id}/
    """
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ["title", "description"]

    def get_queryset(self):
        qs = Task.objects.filter(user=self.request.user).order_by("-created_at")
        status_ = self.request.query_params.get("status")
        return qs.filter(status=status_) if status_ else qs

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
