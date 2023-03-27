import baseKy from 'ky';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const ky = baseKy.create({
  prefixUrl: `${baseURL}/api`,
  headers: {
    'content-type': 'application/json',
  },
  cache: 'no-store',
});

export default ky;
