import api from '@/lib/axios';

export const apiService = {
    // Auth
    login: (data: any) => api.post('/auth/login', data),
    register: (data: any) => api.post('/auth/signup', data),

    // Services
    getServices: () => api.get('/services'),
    getServiceById: (id: number) => api.get(`/services/${id}`),

    // Dashboard
    getDashboardStats: () => api.get('/dashboard/stats'),
};
