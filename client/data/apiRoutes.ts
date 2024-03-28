const baseUrl = 'http://localhost:8585';

export const apiRoutes = {
    auth: {
        login: `${baseUrl}/auth/login`,
        create: `${baseUrl}/auth/create`,
        logout: `${baseUrl}/auth/logout`,
    },
    user: {
        getAll: `${baseUrl}/users`,
        delete: `${baseUrl}/users/`,
        edit: `${baseUrl}/users/`,
    },
    sts: {
        create: `${baseUrl}/sts/create`,
        getAll: `${baseUrl}/sts`,
        delete: `${baseUrl}/sts/`,
        edit: `${baseUrl}/sts/`,
        vehicle: {            
            delete: `${baseUrl}/sts-entry/`,            
        },
    },
    landfill: {
        create: `${baseUrl}/landfills/create`,
        getAll: `${baseUrl}/landfills`,
        delete: `${baseUrl}/landfills/`,
        edit: `${baseUrl}/landfills/`,
    },
    rbac: {
        create: `${baseUrl}/rbac/create`,
        getByRole: `${baseUrl}/rbac/roles/`,
        delete: `${baseUrl}/rbac/`,
        edit: `${baseUrl}/rbac/`,
    },
    vehicle: {
        create: `${baseUrl}/vehicles/create`,
        getAll: `${baseUrl}/vehicles`,
        delete: `${baseUrl}/vehicles/`,
        edit: `${baseUrl}/vehicles/`,
    },
}