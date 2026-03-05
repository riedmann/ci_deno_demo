# Deno REST Lab

A simple REST API built with Deno and Oak framework, featuring CI/CD with GitHub
Actions and pre-commit hooks.

## Features

- 🦕 Built with Deno 2.x
- 🌳 Oak framework for routing
- ✅ Automated testing
- 🎣 Git hooks with Husky
- 🔄 GitHub Actions CI/CD
- 📝 Auto-formatting checks

## Prerequisites

- [Deno](https://deno.land/) 2.x or higher
- [Node.js](https://nodejs.org/) (for Husky)
- Git

## Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd deno-rest-lab

# Install Husky (Git hooks)
npm install
```

### Running the Application

```bash
# Start the server
deno task start
# or
deno run --allow-net main.ts
```

The server will start on `http://localhost:8000`

### Running Tests

```bash
# Run all tests
deno task test
# or
deno test
```

### Code Formatting

```bash
# Format code
deno task fmt

# Check format without modifying
deno task fmt:check
```

### Linting

```bash
# Run linter
deno task lint
```

## Available Endpoints

### `GET /`

Returns API information and available endpoints.

**Response:**

```json
{
  "name": "Deno REST Lab API",
  "version": "1.0.0",
  "description": "A simple REST API built with Deno and Oak",
  "endpoints": [...],
  "timestamp": "2026-03-05T..."
}
```

### `GET /hello/:name`

Returns a personalized greeting message.

**Parameters:**

- `name` (string): The name to greet

**Response:**

```json
{
  "message": "Hello, John!"
}
```

## Pre-commit Hooks

This project uses Husky to run pre-commit checks automatically:

1. **Format Check**: Ensures all code is properly formatted
2. **Tests**: Runs all test suites

The commit will be blocked if any check fails. To fix formatting issues:

```bash
deno fmt
```

## CI/CD

The project uses GitHub Actions for continuous integration. On every push to
`main`:

1. Sets up Deno 2.x environment
2. Runs all tests

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml) for details.

## Project Structure

```
deno-rest-lab/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI configuration
├── .husky/                 # Git hooks
│   └── pre-commit          # Pre-commit hook
├── tests/
│   └── service_test.ts     # Service tests
├── main.ts                 # Application entry point
├── routes.ts               # API routes
├── service.ts              # Business logic
├── deno.json               # Deno configuration and tasks
├── deno.lock               # Dependency lock file
└── package.json            # NPM config for Husky
```

## Development

### Adding a New Route

1. Add the route handler in `routes.ts`
2. Add business logic in `service.ts`
3. Write tests in `tests/`
4. Run tests: `deno test`

### Git Workflow

```bash
# Make changes
git add .

# Pre-commit hooks will run automatically
git commit -m "Your message"

# If hooks fail, fix issues and try again
deno fmt
git add .
git commit -m "Your message"
```

## License

ISC
