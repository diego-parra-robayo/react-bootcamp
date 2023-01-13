// export const mockAxios = {
//   create: jest.fn(() => ({
//     get: jest.fn().mockResolvedValue({ data: {} }),
//     interceptors: {
//       request: { use: jest.fn(), eject: jest.fn() },
//       response: { use: jest.fn(), eject: jest.fn() },
//     },
//     defaults: {
//       paramsSeliarizer: { encode: jest.fn(), serialize: jest.fn() },
//     },
//   })),
//   get: jest.fn().mockResolvedValue({ data: {} }),
// };

export const mockAxios = {
  create: jest.fn(() => mockAxios),
  get: jest.fn().mockResolvedValue({ data: {} }),
  interceptors: {
    request: { use: jest.fn(), eject: jest.fn() },
    response: { use: jest.fn(), eject: jest.fn() },
  },
  defaults: {
    paramsSeliarizer: { encode: jest.fn(), serialize: jest.fn() },
  },
};

export default mockAxios;
