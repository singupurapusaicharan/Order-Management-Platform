# 🚀 Order Management System

Welcome to the Order Management System, a feature-rich and user-friendly web application designed to streamline order management processes. This project showcases expertise in modern web development technologies, offering tools for viewing, creating, and managing orders efficiently, with integrated support features. ✨

---

## ✨ Features

### *1. Order List View 📋*
- **Homepage**: Displays all purchased orders in an organized and intuitive layout.
- **Reusable Order Card/Row Component**:
  - 🆔 **Order ID**: Unique identifier for each order.
  - 📅 **Date**: Date of order placement.
  - 💰 ***Total Amount***: Total cost of the order.
  - 🟢 ***Status***: Current status of the order (e.g., pending, completed).
- *Expandable View*: Click to reveal detailed order information. 🔍

### 2. New Order Creation 🛒
- ***"New Order" Button***: Easily initiate order creation from the homepage.
- ***Three-Panel Layout***:
  - ***Left Panel***: Displays cart items with a 🗑 delete button (visible on hover).
  - ***Center Panel***: Add items to the cart seamlessly.
  - ***Right Panel***: Lists available items for selection.
- ***Drag-and-Drop Functionality***: Simplifies adding items to the cart. 🤏
- ***Real-Time Cart Updates***: Reflects changes immediately. 🔄
- ***Item Quantity Controls***: Adjust item quantities with ➕➖ buttons.
- ***Order Summary***: Provides a comprehensive overview of the cart. 📊
- ***Form Validation***: Ensures all required fields are completed before submission. ✅

### 3. Support 💬
- **"Contact Support" Button**: Access support directly from the order details view.
- **Chat Window Features**:
  - 📌 Fixed position in the bottom-right corner of the page.
  - 🔽 Minimize/🔼 Maximize controls for better user experience.
  - 🔄 Retains order context during support interactions.
  - 📨 Supports message input and displays chat history.

---


## 🛠 Technologies Used

| Category         | Technology      |
|-----------------------|---------------------|
| Frontend              | React, JavaScript (ES6+) |
| State Management      | Redux (or Context API) |
| Styling               | SASS, TailwindCSS   |
| Testing               | Jest, React Testing Library |
| Version Control       | Git                 |

---


## 🚀 Getting Started

### Prerequisites ✅
- Node.js (version 14 or later)
- npm (Node Package Manager)
- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation 💻

1. Clone the repository:
  ``` bash
   git clone https://github.com/singupurapusaicharan/Order-Management-Platform.git
   ```

   
2. Navigate to the project directory:
  ``` bash
   cd ui-assignment-1
  ```


3. Install dependencies:
  ``` bash
   npm install
   ```


### Running the Application ▶
1. Start the development server:
  ``` bash
   npm start
   ```

---

## 📁 Folder Structure

```markdown
└── singupurapusaicharan/Order-Management-Platform/
    ├── README.md                     # Documentation for the project
    ├── eslint.config.js              # Configuration file for ESLint
    ├── index.html                    # Main HTML file for the application
    ├── package.json                  # Project metadata and dependencies
    ├── postcss.config.js             # Configuration for PostCSS
    ├── tailwind.config.js            # Tailwind CSS configuration file
    ├── tsconfig.app.json             # TypeScript configuration for the application
    ├── tsconfig.json                 # Base TypeScript configuration
    ├── tsconfig.node.json            # TypeScript configuration for Node.js
    ├── vite.config.ts                # Configuration file for Vite
    └── src/                          # Source files for the application
        ├── App.tsx                   # Main application component
        ├── index.css                 # Global CSS styles
        ├── main.tsx                  # Main entry point for the application
        ├── vite-env.d.ts             # TypeScript environment definitions for Vite
        ├── components/               # Reusable UI components
        │   ├── Background.tsx        # Background component for layout styling
        │   ├── CartItem.tsx          # Component for displaying items in the cart
        │   ├── ChatSupport.tsx       # Chat support interface component
        │   ├── DraggableItem.tsx     # Component for draggable items in the order form
        │   ├── DroppableZone.tsx     # Component for drop zones in the order form
        │   ├── EmptyCart.jsx         # Component displayed when the cart is empty
        │   ├── OrderCard.tsx         # Card component to display order summary
        │   ├── OrderDetails.tsx      # Component to display detailed order information
        │   ├── OrderForm.tsx         # Form component for creating a new order
        │   ├── OrderSummary.tsx      # Component to summarize the order before submission
        │   └── chat/                 # Components related to chat functionality
        │       ├── ChatHeader.tsx    # Header component for the chat window
        │       ├── ChatInput.tsx     # Input field component for chat messages
        │       ├── ChatMessages.tsx  # Component to display chat messages
        │       └── ChatWindow.tsx    # Main chat window component
        ├── data/                     # Static data used in the application
        │   ├── categories.ts         # Categories data for items
        │   └── items.ts              # Items data for the order form
        ├── hooks/                    # Custom React hooks
        │   └── useChatMessages.ts    # Hook to manage chat messages state
        ├── lib/                      # Utility libraries and configurations
        │   ├── theme.ts              # Theme configuration for the application
        │   └── utils.ts              # General utility functions
        ├── pages/                    # Page components
        │   ├── Home.tsx              # Home page component
        │   └── NewOrder.jsx          # New order creation page component
        ├── store/                    # State management files
        │   ├── cart.js               # State management for the cart
        │   └── orders.js             # State management for orders
        ├── types/                    # TypeScript type definitions
        │   ├── index.ts              # Common type definitions
        │   └── order.ts              # Type definitions related to orders
        └── utils/                    # Utility functions
            ├── chatbot.ts            # Utility functions for chatbot integration
            ├── orderValidation.ts    # Functions to validate order inputs
            └── validation.js         # General validation utilities

```

---

## 🔧 Key Features Demonstrated

- **Responsive Design**: Ensures compatibility across devices. 📱💻
- **Real-Time Updates**: Uses web sockets or state management for live updates. 🔄
- **Clean Code Architecture**: Adheres to SOLID principles and modular design. 🛠
- **User Experience (UX)**: Prioritizes intuitive interfaces and interactions. 🎨

---

## 📸 Screenshots

### Home Page
![WhatsApp Image 2025-01-06 at 09 50 01_0a9d511d](https://github.com/user-attachments/assets/7ccb0e17-b1b3-4e39-b968-e3927ed199bb)

![WhatsApp Image 2025-01-06 at 09 50 02_6d76eb22](https://github.com/user-attachments/assets/03270e05-5a1d-48e8-bcd9-61b3527195a4)

 

### New Order management
![WhatsApp Image 2025-01-06 at 09 50 03_83a0c82d](https://github.com/user-attachments/assets/16ba3ebe-6024-4f1b-a9ca-9ee655750f37)

![WhatsApp Image 2025-01-06 at 09 50 01_f9bba97e](https://github.com/user-attachments/assets/f44a2123-0325-46aa-acd6-4ce09df1a130)


---


## 🤝 Contributing

We welcome contributions! Follow these steps:

1. *Fork the repository*.
2. Create a new branch for your feature or bug fix:
  ``` bash
   git checkout -b feature/your-feature-name
   ```

   
3. Commit your changes and push the branch:
  ``` bash
   git push origin feature/your-feature-name
   ```

   
4. Create a Pull Request on GitHub.

---

## Acknowledgments

- *[React](https://reactjs.org/)* - A JavaScript library for building user interfaces.
- *[Redux](https://redux.js.org/)* - State management library.
- *[TailwindCSS](https://tailwindcss.com/)* - Utility-first CSS framework.
