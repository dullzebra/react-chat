export default {
  API_URL:
    process.env.NODE_ENV === 'production'
      ? 'https://dogecodes-chat-api.herokuapp.com/v1'
      : 'http://localhost:8000/v1',
  SOCKET_URL:
    process.env.NODE_ENV === 'production'
      ? 'wss://dogecodes-chat-api.herokuapp.com/'
      : 'ws://localhost:8000/',
};
