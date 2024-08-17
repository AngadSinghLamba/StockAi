# Stock AI App

A web app for analyzing stock data using Alpha Vantage API and Azure AI services.

## Architecture

The app is built using a microservices architecture and deployed on Azure Kubernetes Service (AKS). The main components are:

- **Frontend Service**: Built with React.js for user interactions and data visualization.
- **Backend Services**:
  - **Stock Data Service**: Fetches stock data from Alpha Vantage.
  - **AI Insights Service**: Processes stock data and generates insights using Azure OpenAI.
- **Database**: Azure SQL Database for storing user queries, results, and feedback.
- **CI/CD Pipeline**: Automated using Azure DevOps or GitHub Actions.
- **Azure Kubernetes Service (AKS)**: Orchestrates and manages the microservices.

## Setup

### Prerequisites

- Python 3.9
- Conda
- Docker
- Azure account

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/stock-ai-app.git
    cd stock-ai-app
    ```

2. **Create and activate the Conda environment**:
    ```bash
    conda create --name stock-ai-env python=3.9
    conda activate stock-ai-env
    ```

3. **Install the required packages**:
    ```bash
    conda install flask
    pip install requests python-dotenv
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the root directory and add your Alpha Vantage API key:
      ```
      ALPHA_VANTAGE_API_KEY=your_api_key_here
      ```

5. **Run the app**:
    ```bash
    python app.py
    ```

## Usage

1. **Select a scenario** from the dropdown menu on the landing page.
2. **Enter the required information** (e.g., company names, dates).
3. **Click "Analyze"** to fetch and display the stock data.

## Deployment

### Docker

1. **Build Docker images** for each microservice:
    ```bash
    docker build -t stock-data-service ./stock-data-service
    docker build -t ai-insights-service ./ai-insights-service
    ```

2. **Push Docker images** to a container registry (e.g., Docker Hub, Azure Container Registry).

### Kubernetes

1. **Create an AKS cluster** using the Azure portal or Azure CLI.
2. **Deploy the microservices** to the AKS cluster using Kubernetes manifests.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
