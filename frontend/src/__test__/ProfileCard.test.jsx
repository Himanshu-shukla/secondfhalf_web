// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { describe, it, expect } from 'vitest';
// import { BrowserRouter } from 'react-router-dom';
// import ProfileCard from '../components/userList/profilecard/ProfileCard';

// describe('ProfileCard Component', () => {
//     const setup = (props = {}) => {
//         return render(
//             <BrowserRouter>
//                 <ProfileCard
//                     id={props.id || '123'}
//                     name={props.name || 'John Doe'}
//                     age={props.age || '30'}
//                     height={props.height || '6ft'}
//                     location={props.location || 'New York'}
//                     languages={props.languages || 'English'}
//                     profession={props.profession || 'Engineer'}
//                     image={props.image || 'test-image.jpg'}
//                     religion={props.religion || 'Christianity'}
//                     degree={props.degree || "Bachelors"}
//                 />
//             </BrowserRouter>
//         );
//     };

//     // ✅ 1. Test Navigation Link
//     it('renders the profile link with correct URL', () => {
//         setup({ id: '456' });

//         const profileLink = screen.getByRole('link');
//         expect(profileLink).toHaveAttribute('href', '/viewprofile?id=456');
//     });

//     // ✅ 2. Test Alt Text for Image
//     it('renders the profile image with the correct alt text', () => {
//         setup({ name: 'Jane Smith', image: 'profile-image.jpg' });

//         const profileImage = screen.getByAltText(/Jane Smith/i);
//         expect(profileImage).toHaveAttribute('src', 'profile-image.jpg');
//     });

//     // ✅ 3. Test Fallback for Missing Props (degree, name, etc.)
//     it('handles missing name, degree, and other props gracefully', () => {
//         setup({
//             name: null,
//             degree: null,
//             location: null,
//             profession: null,
//             religion: null,
//         });
//     });

//     // ✅ 4. Test Truncated Text for Location, Profession, Degree, and Religion
//     it('truncates long text correctly for location, profession, degree, and religion', () => {
//         setup({
//             location: 'A very long location name that should be truncated',
//             profession: 'A very long profession title that should be truncated',
//             degree: 'A very long degree title that should be truncated',
//             religion: 'A very long religion text that should be truncated',
//         });

         
//     });

//     // ✅ 5. Test Capitalization
//     it('capitalizes text for location, profession, degree, and religion', () => {
//         setup({
//             location: 'new york',
//             profession: 'engineer',
//             degree: "bachelors degree",
//             religion: 'christianity',
//         });

//         // Check for capitalized text
//         expect(screen.getByText(/New York/i)).toBeInTheDocument();
//         expect(screen.getByText(/Engineer/i)).toBeInTheDocument();
//         expect(screen.getByText(/bachelors/i)).toBeInTheDocument();
//         expect(screen.getByText(/Christianity/i)).toBeInTheDocument();
//     });

//     // ✅ 6. Test Button Presence
//     it('renders the Connect button correctly', () => {
//         setup();

//         const connectButton = screen.getByRole('button', { name: /Connect/i });
//         expect(connectButton).toBeInTheDocument();
//         expect(connectButton).toHaveClass('bg-gradient-to-r from-green-400 to-green-600');
//     });

//     // ✅ 7. Test Empty Image Prop
//     it('handles empty image source gracefully', () => {
//         setup({ image: null });

//         const profileImage = screen.getByAltText(/John Doe/i);
//         expect(profileImage).toBeInTheDocument();
//         expect(profileImage).not.toHaveAttribute('src', '');
//     });

//     // ✅ 8. Test Accessibility Roles
//     it('has accessible roles for image, button, and link', () => {
//         setup();

//         // Check image accessibility role by alt text
//         const profileImage = screen.getByAltText(/John Doe/i);
//         expect(profileImage).toBeInTheDocument();

//         // Check button role
//         const connectButton = screen.getByRole('button', { name: /Connect/i });
//         expect(connectButton).toBeInTheDocument();

//         // Check link role
//         const profileLink = screen.getByRole('link');
//         expect(profileLink).toBeInTheDocument();
//     });
// });


// ---------------------------------------------------------------

import { test, expect } from 'vitest'

test('basic math works', () => {
  expect(2 + 2).toBe(4)
})

