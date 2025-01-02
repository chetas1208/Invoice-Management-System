# Invoice Management System

## Description

A full-stack Invoice Management System built with Laravel for the backend and React for the frontend. This application allows users to create, manage, and track invoices efficiently.

## Features

- **Invoice Creation:** Create new invoices with a title and date.
- **Item Management:** Add, edit, and delete items within each invoice.
- **Real-time Updates:** Changes are reflected instantly in the user interface.
- **User-Friendly Interface:** Intuitive design for easy navigation and management.

## Technologies Used

### Backend

- **Framework:** Laravel
- **Language:** PHP
- **Database:** MySQL
- **Dependencies:** Managed via Composer

### Frontend

- **Library:** React
- **Language:** JavaScript
- **Styling:** CSS
- **Dependencies:** Managed via npm

## Installation

### Prerequisites

- **Backend:**
  - PHP >= 8.0
  - Composer
  - MySQL
- **Frontend:**
  - Node.js >= 14.x
  - npm

### Backend Setup

1. **Navigate to the Backend Directory:**
    ```bash
    cd backend/invoice-backend
    ```

2. **Install Dependencies:**
    ```bash
    composer install
    ```

3. **Environment Configuration:**
    - Copy the example environment file and modify as needed.
    ```bash
    cp .env.example .env
    ```
    - Update the `.env` file with your database credentials.

4. **Generate Application Key:**
    ```bash
    php artisan key:generate
    ```

5. **Run Migrations:**
    ```bash
    php artisan migrate
    ```

6. **Start the Development Server:**
    ```bash
    php artisan serve
    ```

### Frontend Setup

1. **Navigate to the Frontend Directory:**
    ```bash
    cd frontend/src
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Start the Development Server:**
    ```bash
    npm start
    ```

## Usage

- **Accessing the Application:**
  - Open your browser and navigate to `http://localhost:3000` to use the frontend.
  - The backend API is accessible at `http://localhost:8000`.

- **Managing Invoices:**
  - Create new invoices by providing a title and date.
  - Add items to invoices with name, price, and quantity.
  - Edit or delete existing items as needed.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**
2. **Create a Feature Branch**
    ```bash
    git checkout -b feature/YourFeature
    ```
3. **Commit Your Changes**
    ```bash
    git commit -m "Add Your Feature"
    ```
4. **Push to the Branch**
    ```bash
    git push origin feature/YourFeature
    ```
5. **Open a Pull Request**

## License

This project is licensed under the MIT License.