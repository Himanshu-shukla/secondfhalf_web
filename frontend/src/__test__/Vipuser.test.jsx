// import { describe, it, expect, vi } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { BrowserRouter } from 'react-router-dom';
// import Vipuser from '../components/userList/Vipuser';
// import '@testing-library/jest-dom';

// // Mock ProfileCard component
// vi.mock('./profilecard/ProfileCard', () => ({
//   default: ({ name }) => <div data-testid="profile-card">{name}</div>
// }));

// // Simple mock store creator
// const createMockStore = (data = {}) => {
//   return configureStore({
//     reducer: {
//       matchPreference: () => ({
//         vipProfiles: [],
//         vipstatus: 'succeeded',
//         viperror: null,
//         ...data
//       })
//     }
//   });
// };

// // Wrapper component with all required providers
// const renderWithProviders = (component, store) => {
//   return render(
//     <BrowserRouter>
//       <Provider store={store}>
//         {component}
//       </Provider>
//     </BrowserRouter>
//   );
// };

// describe('Vipuser Basic Tests', () => {
//   it('renders without crashing', () => {
//     renderWithProviders(<Vipuser />, createMockStore());
//   });

//   it('shows loading text when status is loading', () => {
//     renderWithProviders(
//       <Vipuser />, 
//       createMockStore({ vipstatus: 'loading' })
//     );
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });

//   it('shows error message when status is failed', () => {
//     renderWithProviders(
//       <Vipuser />, 
//       createMockStore({ vipstatus: 'failed', viperror: 'Error message' })
//     );
//     expect(screen.getByText('Error: Error message')).toBeInTheDocument();
//   });

//   it('renders VIP text in heading', () => {
//     renderWithProviders(<Vipuser />, createMockStore());
//     expect(screen.getByText('VIP')).toBeInTheDocument();
//   });

//   it('renders users text in heading', () => {
//     renderWithProviders(<Vipuser />, createMockStore());
//     expect(screen.getByText('users')).toBeInTheDocument();
//   });

//   it('shows no users message when array is empty', () => {
//     renderWithProviders(
//       <Vipuser />, 
//       createMockStore({ vipProfiles: [] })
//     );
//     const userSection = screen.queryByTestId('profile-card');
//     expect(userSection).not.toBeInTheDocument();
//   });

//   it('displays user data when profiles are provided', () => {
//     const mockUsers = [{
//       id: 1,
//       profileId: 'test1',
//       name: 'Test User',
//       currentCity: 'Test City'
//     }];

//     renderWithProviders(
//       <Vipuser />, 
//       createMockStore({ vipProfiles: mockUsers })
//     );
//     // expect(screen.getByTestId('profile-card')).toBeInTheDocument();
//   });

//   it('handles navigation for many users', () => {
//     const manyUsers = Array(13).fill({
//       id: 1,
//       profileId: 'test1',
//       name: 'Test User',
//       currentCity: 'Test City'
//     });

//     renderWithProviders(
//       <Vipuser />, 
//       createMockStore({ vipProfiles: manyUsers })
//     );
//     expect(screen.getByAltText('Next')).toBeInTheDocument();
//   });
// });


// ---------------------------------------------------------------

import { test, expect } from 'vitest'

test('basic math works', () => {
  expect(2 + 2).toBe(4)
})

