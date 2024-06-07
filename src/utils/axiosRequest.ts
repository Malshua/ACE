import axios from 'axios';

const axiosRequest = (token?: string) => {
  const headers: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (token) {
    headers['authorization'] = `Bearer ${token}`;
  }

  const axiosInst = axios.create({
    headers,
  });

  axiosInst.interceptors.request.use(
    async function (config: any) {
      return config;
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInst.interceptors.response.use(
    async function (response: any) {
      return response;
    },
    function (error: any) {
      if (
        error.response &&
        (error.response?.status === 403 ||
          error.response?.status === 401 ||
          error.response.data?.message === 'Access denied. No token provided.')
      ) {
        //logout user
        if (
          typeof window !== 'undefined' &&
          window.location.pathname !== '/login'
        ) {
          window.location.pathname = '/login';
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInst;
};

const axiosRequestFormData = (token: string) => {
  const headers: any = {
    'Content-Type': 'multipart/form-data',
    // Accept: "application/json",
  };

  headers['DOMAIN-ORIGIN-NAME'] = `${process.env.DOMAIN_NAME}`;

  if (token) {
    headers['authorization'] = `Bearer ${token}`;
  }

  // }

  const axiosInst = axios.create({
    headers,
  });

  axiosInst.interceptors.request.use(
    async function (config: any) {
      return config;
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInst.interceptors.response.use(
    async function (response: any) {
      return response;
    },
    function (error: any) {
      if (
        error.response?.status === 403 ||
        error.response?.status === 401 ||
        error.response.data?.message === 'Access denied. No token provided.'
      ) {
        //logout user
        if (
          typeof window !== 'undefined' &&
          window.location.pathname !== '/login'
        ) {
          window.location.pathname = '/login';
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInst;
};

export { axiosRequest, axiosRequestFormData };
