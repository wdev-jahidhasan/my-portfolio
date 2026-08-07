export const projectsData = [
  {
    id: 'drive-fleet',
    title: 'Drive Fleet',
    description: 'A modern, responsive full-stack car rental platform where users can browse available cars, book rentals, manage their bookings, and add their own cars for rent.',
    fullDescription: 'Drive Fleet is a full-featured car rental system built to streamline vehicle booking, management, and rental processing. Users can browse cars, create bookings, and even list their own cars for rent.',
    techStack: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'JWT', 'Tailwind CSS'],
    liveUrl: 'https://drive-fleet-client-gamma.vercel.app/',
    githubUrl: 'https://github.com/wdev-jahidhasan/drive-fleet-client',
    imageUrl: '/images/drive-fleet.png',
    features: [
      'User Authentication & JWT Security',
      'Car Booking & Rental Management System',
      'Real-time Availability Search',
      'User Car Listing Dashboard'
    ],
    challenges: [
      'Implementing secure JWT authorization and protected routes for backend API endpoints.'
    ],
    futurePlans: [
      'Integrate payment gateway for seamless online rental payments.',
      'Implement Role-Based Access Control (RBAC) authentication system.'
    ]
  },
  {
    id: 'summer-cart',
    title: 'Summer Cart',
    description: 'Summer Cart is a summer-themed eCommerce web application where users can browse seasonal products, view details, and place orders after authentication.',
    fullDescription: 'Summer Cart delivers an intuitive online shopping experience designed specifically for seasonal products with real-time cart handling and user authentication.',
    techStack: ['Next.js', 'BetterAuth', 'MongoDB', 'Tailwind', 'DaisyUI'],
    liveUrl: 'https://summer-cart-next-tvg3.vercel.app/',
    githubUrl: 'https://github.com/wdev-jahidhasan/summer-cart-next',
    imageUrl: '/images/summer-cart-2.png',
    features: [
      'Product Browsing & Filtering',
      'Cart & Order Processing System',
      'Secure Authentication with BetterAuth'
    ],
    challenges: [
      'Handling route protection and dynamic page redirects based on active user sessions.'
    ],
    futurePlans: [
      'Develop a dedicated backend server architecture.',
      'Implement order cancellation features and full CRUD operations.'
    ]
  },
  {
    id: 'digitools-purchase',
    title: 'DigiTools Purchase',
    description: 'DigiTools Purchase is a simple and responsive React-based web application where users can browse and purchase different types of digital products and tools.',
    fullDescription: 'A smooth marketplace for digital tools, software licenses, and online subscriptions with an interactive purchasing system.',
    techStack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'React-Toastify'],
    liveUrl: 'https://digitools-purchase-react.netlify.app',
    githubUrl: 'https://github.com/wdev-jahidhasan/digitools-purchase',
    imageUrl: '/images/digitools-purchase.png',
    features: [
      'Interactive Product Catalog',
      'Instant Notifications with Toastify',
      'Mobile-first Responsive Design'
    ],
    challenges: [
      'Ensuring seamless UI responsiveness and layout adaptability across all device breakpoints.'
    ],
    futurePlans: [
      'Migrate the project to Next.js App Router for better performance.',
      'Integrate MongoDB database for dynamic product and order management.'
    ]
  }
];