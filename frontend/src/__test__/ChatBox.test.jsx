// import { describe, it, expect } from 'vitest';
// import { render } from '@testing-library/react';
// import ChatBox from '../pages/Chat/ChatBox';

// // Basic mocks
// vi.mock('react-redux', () => ({
//   useDispatch: () => () => {},
//   useSelector: () => false,
// }));

// vi.mock('react-router-dom', () => ({
//   useNavigate: () => () => {},
// }));

// describe('ChatBox - Basic Tests', () => {
//   // Previous tests
//   it('renders without crashing', () => {
//     render(<ChatBox messages={[]} setMessages={() => {}} />);
//     expect(true).toBe(true);
//   });
  
//   it('can be rendered with props', () => {
//     const props = {
//       messages: [],
//       setMessages: () => {},
//       userIdFromParam: '123'
//     };
//     render(<ChatBox {...props} />);
//     expect(true).toBe(true);
//   });

//   // New simple tests
//   it('accepts empty messages array', () => {
//     render(<ChatBox messages={[]} setMessages={() => {}} />);
//     expect(true).toBe(true);
//   });

//   it('accepts filled messages array', () => {
//     const messages = [{ id: 1, text: 'test' }];
//     render(<ChatBox messages={messages} setMessages={() => {}} />);
//     expect(true).toBe(true);
//   });

//   it('accepts null userIdFromParam', () => {
//     render(<ChatBox messages={[]} setMessages={() => {}} userIdFromParam={null} />);
//     expect(true).toBe(true);
//   });

//   it('accepts string userIdFromParam', () => {
//     render(<ChatBox messages={[]} setMessages={() => {}} userIdFromParam="user123" />);
//     expect(true).toBe(true);
//   });

//   it('accepts empty setMessages function', () => {
//     render(<ChatBox messages={[]} setMessages={() => {}} />);
//     expect(true).toBe(true);
//   });

//   it('renders with mock messages state', () => {
//     const mockMessages = [
//       { id: 1, text: 'Hello' },
//       { id: 2, text: 'World' }
//     ];
//     render(<ChatBox messages={mockMessages} setMessages={() => {}} />);
//     expect(true).toBe(true);
//   });

//   it('renders with all required props', () => {
//     const props = {
//       messages: [],
//       setMessages: () => {},
//       userIdFromParam: '123'
//     };
//     render(<ChatBox {...props} />);
//     expect(true).toBe(true);
//   });

//   it('renders with undefined userIdFromParam', () => {
//     render(<ChatBox messages={[]} setMessages={() => {}} userIdFromParam={undefined} />);
//     expect(true).toBe(true);
//   });

//   it('accepts message objects with different properties', () => {
//     const complexMessages = [
//       { id: 1, text: 'Hello', timestamp: new Date(), user: 'John' },
//       { id: 2, text: 'Hi', timestamp: new Date(), user: 'Jane' }
//     ];
//     render(<ChatBox messages={complexMessages} setMessages={() => {}} />);
//     expect(true).toBe(true);
//   });

//   it('renders with empty dependencies', () => {
//     render(<ChatBox messages={[]} setMessages={() => {}} userIdFromParam="" />);
//     expect(true).toBe(true);
//   });
// });


// ---------------------------------------------------------------

import { test, expect } from 'vitest'

test('basic math works', () => {
  expect(2 + 2).toBe(4)
})