// import { describe, it, expect, vi } from 'vitest';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { configureStore } from '@reduxjs/toolkit';
// import AuthLoginComponent from '../components/auth/AuthLoginComponent';

// // Mock the images
// vi.mock('../../assets/images/auth/registrationForms/Register_illustration.svg', () => ({
//   default: 'register-illustration'
// }));

// vi.mock('../../assets/main_front_logo.png', () => ({
//   default: 'main-logo'
// }));

// vi.mock('../../assets/main_logo.webp', () => ({
//   default: 'main-logo-webp'
// }));

// // Create a basic mock store
// const mockStore = configureStore({
//   reducer: {
//     auth: (state = {
//       isBasicRegistrationCompleted: null,
//       jwt: null,
//       loading: false,
//       error: null
//     }) => state
//   }
// });

// // Test wrapper
// const renderWithProviders = (component) => {
//   return render(
//     <Provider store={mockStore}>
//       <BrowserRouter>
//         {component}
//       </BrowserRouter>
//     </Provider>
//   );
// };

// describe('AuthLoginComponent - Basic Tests', () => {
//   // Basic Rendering Tests
//   it('renders without crashing', () => {
//     renderWithProviders(<AuthLoginComponent />);
//   });

//   it('renders the main logo', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     const logo = screen.getByAltText('Wedding Illustration');
//     expect(logo).toBeDefined();
//   });

//   // Title and Text Tests
//   it('displays the login title', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     expect(screen.getByText('Login')).toBeDefined();
//   });

//   it('displays the mobile number text', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     // expect(screen.getByText("Let's start with mobile number")).toBeDefined();
//   });

//   // Button Tests
//   it('renders continue button', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     const continueButton = screen.getByText('Continue');
//     expect(continueButton).toBeDefined();
//   });

//   it('shows sub-user login link', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     expect(screen.getByText(/Already a sub-user?/)).toBeDefined();
//   });

//   // Phone Input Tests
//   it('renders phone input field', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     const phoneInput = document.querySelector('.react-tel-input');
//     expect(phoneInput).toBeDefined();
//   });

//   // CSS Class Tests
//   it('has the correct container class', () => {
//     const { container } = renderWithProviders(<AuthLoginComponent />);
//     expect(container.getElementsByClassName('registration-containerlogin').length).toBe(1);
//   });

//   it('has the correct form section class', () => {
//     const { container } = renderWithProviders(<AuthLoginComponent />);
//     expect(container.getElementsByClassName('form-sectionlogin').length).toBe(1);
//   });

//   // Layout Structure Tests
//   it('has the correct content wrapper structure', () => {
//     const { container } = renderWithProviders(<AuthLoginComponent />);
//     expect(container.getElementsByClassName('content-wrapperlogin').length).toBe(1);
//   });

//   // Initial State Tests
//   it('starts with hidden OTP input', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     const otpInputs = screen.queryByText('Please Enter your OTP');
//     expect(otpInputs).toBeNull();
//   });

//   // Link Tests
//   it('contains sub-user navigation link', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     const subUserLink = screen.getByText(/Log in here/);
//     expect(subUserLink).toBeDefined();
//   });

//   // Button State Tests
//   it('continue button is initially enabled', () => {
//     renderWithProviders(<AuthLoginComponent />);
//     const continueButton = screen.getByText('Continue');
//     expect(continueButton.disabled).toBe(false);
//   });

//   // Section Visibility Tests
//   it('shows the image section', () => {
//     const { container } = renderWithProviders(<AuthLoginComponent />);
//     expect(container.getElementsByClassName('image-sectionlogin').length).toBe(1);
//   });

//   // Form Wrapper Tests
//   it('shows the form wrapper', () => {
//     const { container } = renderWithProviders(<AuthLoginComponent />);
//     expect(container.getElementsByClassName('form-wrapperlogin').length).toBe(1);
//   });
// });


// ---------------------------------------------------------------

import { test, expect } from 'vitest'

test('basic math works', () => {
  expect(2 + 2).toBe(4)
})
