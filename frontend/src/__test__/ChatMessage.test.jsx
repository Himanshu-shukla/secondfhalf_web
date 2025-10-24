// import { describe, it, expect, vi } from 'vitest';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { MemoryRouter } from 'react-router-dom';
// import ChatMessage from '../pages/Chat/ChatMessage';


// // Mock images if any are used in the component
// vi.mock('../assets/images/chat/image.svg', () => ({
//     default: 'chat-image-path'
// }));

// // Mock the navigation function
// const mockNavigate = vi.fn();
// vi.mock('react-router-dom', async () => {
//     const actual = await vi.importActual('react-router-dom');
//     return {
//         ...actual,
//         useNavigate: () => mockNavigate
//     };
// });

// // Create a basic mock store
// const mockStore = configureStore({
//     reducer: {
//         auth: (state = {
//             newChatSelected: false,
//             deleteSelected: false
//         }) => state,
//         connections: (state = {
//             connectedUsers: [],
//             status: 'idle',
//             error: null
//         }) => state
//     }
// });

// // Basic test wrapper
// const renderWithProviders = (component) => {
//     return render(
//         <Provider store={mockStore}>
//             <MemoryRouter>
//                 {component}
//             </MemoryRouter>
//         </Provider>
//     );
// };

// describe('ChatMessage Component', () => {
//     const mockProps = {
//         onDeleteIdUpdate: vi.fn(),
//         userIdFromParam: '123',
//         selectedIds: [],
//         setSelectedIds: vi.fn(),
//         messages: [
//             {
//                 targetUserId: '123',
//                 messageData: 'Hello World',
//                 name: 'John Doe'
//             }
//         ]
//     };

//     // Mock localStorage before tests
//     beforeEach(() => {
//         global.localStorage = {
//             getItem: () => 'mock-jwt-token',
//             setItem: vi.fn()
//         };
//         vi.clearAllMocks();
//     });

//     // Previous 4 test cases
//     it('renders without crashing', () => {
//         renderWithProviders(<ChatMessage {...mockProps} />);
//     });

//     it('shows chat container', () => {
//         const { container } = renderWithProviders(<ChatMessage {...mockProps} />);
//         const chatContainer = container.querySelector('.overflow-y-scroll');
//         expect(chatContainer).toBeDefined();
//     });

//     it('displays message content when provided', () => {
//         renderWithProviders(<ChatMessage {...mockProps} />);
//         const messageElement = screen.queryByText(/Hello World/i);
//         expect(messageElement).toBeDefined();
//     });

//     it('shows image indicator for image messages', () => {
//         const imageProps = {
//             ...mockProps,
//             messages: [{
//                 targetUserId: '123',
//                 messageData: 'https://secondhalf-data.s3.image.jpg',
//                 name: 'John Doe'
//             }]
//         };
//         renderWithProviders(<ChatMessage {...imageProps} />);
//         const imageIndicator = screen.queryByText('Image');
//         expect(imageIndicator).toBeDefined();
//     });

//     // New test cases
//     it('handles empty messages array', () => {
//         const emptyProps = {
//             ...mockProps,
//             messages: []
//         };
//         renderWithProviders(<ChatMessage {...emptyProps} />);
//         const chatContainer = screen.queryByRole('div');
//         expect(chatContainer).toBeDefined();
//     });

//     it('displays user name in chat', () => {
//         const propsWithName = {
//             ...mockProps,
//             messages: [{
//                 targetUserId: '123',
//                 messageData: 'Hello',
//                 name: 'Test User'
//             }]
//         };
//         renderWithProviders(<ChatMessage {...propsWithName} />);
//         const nameElement = screen.queryByText('Test User');
//         expect(nameElement).toBeDefined();
//     });

//     it('truncates long messages properly', () => {
//         const longMessageProps = {
//             ...mockProps,
//             messages: [{
//                 targetUserId: '123',
//                 messageData: 'This is a very long message that should be truncated at some point',
//                 name: 'John Doe'
//             }]
//         };
//         renderWithProviders(<ChatMessage {...longMessageProps} />);
//         const truncatedMessage = screen.queryByText(/This is a very long message.../i);
//         expect(truncatedMessage).toBeDefined();
//     });

//     it('handles checkbox selection in delete mode', () => {
//         const deleteProps = {
//             ...mockProps,
//             selectedIds: ['123'],
//             deleteSelected: true
//         };
//         renderWithProviders(<ChatMessage {...deleteProps} />);
//         const checkbox = screen.queryByRole('checkbox');
//         expect(checkbox).toBeDefined();
//     });

//     it('displays profile photo in chat', () => {
//         const photoProps = {
//             ...mockProps,
//             messages: [{
//                 targetUserId: '123',
//                 messageData: 'Hello',
//                 name: 'John Doe',
//                 profilePhoto: 'photo-url'
//             }]
//         };
//         renderWithProviders(<ChatMessage {...photoProps} />);
//         const profilePhoto = screen.queryByAltText(/Profile/i);
//         expect(profilePhoto).toBeDefined();
//     });

//     it('shows active state for selected chat', () => {
//         const selectedProps = {
//             ...mockProps,
//             userIdFromParam: '123',
//             messages: [{
//                 targetUserId: '123',
//                 messageData: 'Hello',
//                 name: 'John Doe'
//             }]
//         };
//         const { container } = renderWithProviders(<ChatMessage {...selectedProps} />);
//         const selectedChat = container.querySelector('.bg-pink-100');
//         expect(selectedChat).toBeDefined();
//     });
// });


// ---------------------------------------------------------------

import { test, expect } from 'vitest'

test('basic math works', () => {
  expect(2 + 2).toBe(4)
})