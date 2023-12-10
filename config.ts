let hostname = ""

if (process.client && typeof window !== 'undefined') {
  hostname = window.location.hostname
}

const localhost: boolean = hostname.includes('localhost');
const develop: boolean = localhost || hostname.includes('ngrok-free.app');

interface Environment {
  APP_ENVIRONMENT: string;
  BASE_URL: string;
}

const developEnv: Environment = {
  APP_ENVIRONMENT: 'develop',
  BASE_URL: 'http://localhost:4000/api/v1',
};

const productionEnv: Environment = {
  APP_ENVIRONMENT: 'production',
  BASE_URL: 'https://api.vesseltrustks.com/api/v1',
};

const environment: Environment = develop ? developEnv : productionEnv;

export default environment;
