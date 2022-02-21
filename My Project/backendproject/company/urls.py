from django.urls import path
from company import views

urlpatterns = [
    path('company', views.create_company),
    path('company/<str:company_id>', views.get_company),
    path('companyproblems', views.create_companyProblem),
    path('companyproblems/<str:id>', views.get_companyProblem)
]