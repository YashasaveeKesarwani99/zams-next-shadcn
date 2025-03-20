# zams-next-shadcn

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YashasaveeKesarwani99/zams-next-shadcn.git
   cd zams-next-shadcn
   ```

2. **Install dependencies:**

   ```bash
   cd zams-next-shadcn
   npm install
   ```

## Usage

1. **Navigate to the `root` directory:**

   ```bash
   cd zams-next-shadcn
   ```

2. **Start the React development server:**

   ```bash
   npm run start
   ```

   This will run the next app on `http://localhost:3000`.

## Notes

- **pages** - Home (/) and `/dashboard` route show the two pages.

- **nextjs** - Although nextjs comes with lot of features but this project majorily focuses on the UI side of things because of which only routing and error handling feature has been leveraged.

- **tailwind and shadcn** - components like `Dialog`, `Sidebar`, `Layout`, `Input`, `Textarea`, `Button` have been used. I've tried to customize the components using tailwind classes to meet the design implementation requirements.

- **react-hook-form** - In order to add more rows in the datasource, I've used `Dialog` with `react-hook-form` to handle form interactions ( validating inputs, error handling, the submit action ).

- **typescript** - To ensure type safety.

## Additional Points

- **Intentions** - Will be adding `server-side` code using `express` to fetch and post data in the datasource section to give this app a fullstack context. Will add `unit` and `integration` tests using `rtl` with `user-event` to make code bug free and maintainable.
