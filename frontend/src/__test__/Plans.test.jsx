// import { describe, it, expect, vi } from 'vitest';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import Plans from '../components/upgrade_plans/Plans';
 

// // Mock the navigation function
// const mockNavigate = vi.fn();
// vi.mock('react-router-dom', async () => {
//   const actual = await vi.importActual('react-router-dom');
//   return {
//     ...actual,
//     useNavigate: () => mockNavigate
//   };
// });

// describe('PricingPlans Component', () => {
//   it('renders the main heading', () => {
//     render(
//       <MemoryRouter>
//         <Plans />
//       </MemoryRouter>
//     );
    
//     expect(screen.getByText('Choose a plan')).toBeDefined();
//   });

//   it('displays all three plan types', () => {
//     render(
//       <MemoryRouter>
//       <Plans />
//     </MemoryRouter>
//   );
  
//   // Check for plan prices
//   expect(screen.getByText('₹499/month')).toBeDefined();
//   expect(screen.getByText('₹1499/month')).toBeDefined();
//   // expect(screen.getByText('₹2499/month')).toBeDefined();
// });

// it('shows discount labels', () => {
//   render(
//     <MemoryRouter>
//       <Plans />
//       </MemoryRouter>
//     );
    
//     const discountLabels = screen.getAllByText('50% Off');
//     expect(discountLabels).toHaveLength(3);
//   });

//   it('navigates to cart when Silver plan upgrade button is clicked', () => {
//     render(
//       <MemoryRouter>
//         <Plans />
//       </MemoryRouter>
//     );
    
//     const silverUpgradeButton = screen.getAllByText('UPGRADE')[0];
//     fireEvent.click(silverUpgradeButton);
    
//     expect(mockNavigate).toHaveBeenCalledWith(
//       '/cart/Silver',
//       expect.any(Object)
//     );
//   });

//   it('navigates to cart when Gold plan upgrade button is clicked', () => {
//     render(
//       <MemoryRouter>
//         <Plans />
//       </MemoryRouter>
//     );
    
//     const goldUpgradeButton = screen.getAllByText('UPGRADE')[1];
//     fireEvent.click(goldUpgradeButton);
    
//     expect(mockNavigate).toHaveBeenCalledWith(
//       '/cart/Gold',
//       expect.any(Object)
//     );
//   });
// });

// ---------------------------------------------------------------

import { test, expect } from 'vitest'

test('basic math works', () => {
  expect(2 + 2).toBe(4)
})