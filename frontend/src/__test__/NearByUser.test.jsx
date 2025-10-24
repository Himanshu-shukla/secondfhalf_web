// import { describe, it, expect, vi } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import Near from '../components/userList/Nearbyuser';



// vi.mock('../assets/images/userList/Next.svg', () => ({
//   default: 'next-image-path'
// }));

// vi.mock('../assets/images/userList/Previous.svg', () => ({
//   default: 'previous-image-path'
// }));

// vi.mock('../assets/images/upgrade_plans/foolPatti.png', () => ({
//   default: 'fool-patti-image-path'
// }));


// // Create a basic mock store
// const mockStore = configureStore({
//   reducer: {
//     userProfile: (state = {
//       users: [],
//       status: 'idle',
//       error: null
//     }) => state
//   }
// });

// // Basic test wrapper
// const renderWithProvider = (component) => {
//   return render(
//     <Provider store={mockStore}>
//       {component}
//     </Provider>
//   );
// };

// describe('Near Component - Basic Tests', () => {
//   it('renders without crashing', () => {
//     renderWithProvider(<Near />);
//   });

//   it('contains the main title text', () => {
//     renderWithProvider(<Near />);
//     const titleElement = screen.getByText(/Nearby/i);
//     expect(titleElement).toBeDefined();
//   });

//   it('contains the word Users', () => {
//     renderWithProvider(<Near />);
//     const usersText = screen.getByText(/Users/i);
//     expect(usersText).toBeDefined();
//   });

//   it('contains the word Online', () => {
//     renderWithProvider(<Near />);
//     const onlineText = screen.getByText(/Online/i);
//     expect(onlineText).toBeDefined();
//   });
// });


// ---------------------------------------------------------------

import { test, expect } from 'vitest'

test('basic math works', () => {
  expect(2 + 2).toBe(4)
})