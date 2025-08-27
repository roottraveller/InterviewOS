export const apiGateway = {
  id: 'api-gateway',
  title: 'API Gateway',
  content: `
    <p>An API Gateway is a server that acts as a single entry point for multiple backend services in a microservices architecture. It handles routing, authentication, rate limiting, and other cross-cutting concerns, providing a unified interface for clients while abstracting the complexity of the underlying service ecosystem.</p>

    <h3>Core Functions</h3>
    <p>API Gateways serve as the central hub for managing API traffic and implementing common functionality across all services.</p>

    <h4>Request Routing & Load Balancing</h4>
    <ul>
      <li><strong>Intelligent routing:</strong> Direct requests to appropriate backend services</li>
      <li><strong>Load distribution:</strong> Balance traffic across multiple service instances</li>
      <li><strong>Health checking:</strong> Monitor service availability and route around failures</li>
      <li><strong>Circuit breaking:</strong> Prevent cascade failures in distributed systems</li>
    </ul>

    <h4>Authentication & Authorization</h4>
    <ul>
      <li><strong>Centralized security:</strong> Single point for authentication logic</li>
      <li><strong>Token validation:</strong> JWT, OAuth, API key verification</li>
      <li><strong>Role-based access:</strong> Control permissions at the gateway level</li>
      <li><strong>Security policies:</strong> Enforce consistent security across all APIs</li>
    </ul>

    <h4>Rate Limiting & Throttling</h4>
    <ul>
      <li><strong>Usage control:</strong> Prevent API abuse and ensure fair usage</li>
      <li><strong>Tiered limits:</strong> Different limits for different client types</li>
      <li><strong>Burst handling:</strong> Allow temporary spikes within limits</li>
      <li><strong>Quota management:</strong> Track and enforce usage quotas</li>
    </ul>

    <div class="code-block">
      <div class="code-label">ARCHITECTURE</div>
      <pre><code>// API Gateway Architecture
                    ┌─────────────────┐
                    │   API Gateway   │
                    │                 │
                    │ ┌─────────────┐ │
                    │ │ Rate Limit  │ │
                    │ │ Auth/Authz  │ │
                    │ │ Routing     │ │
                    │ │ Monitoring  │ │
                    │ └─────────────┘ │
                    └─────────┬───────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
        ┌───────────┐   ┌───────────┐   ┌───────────┐
        │  User     │   │  Product  │   │  Order    │
        │  Service  │   │  Service  │   │  Service  │
        │  :8001    │   │  :8002    │   │  :8003    │
        └───────────┘   └───────────┘   └───────────┘

// Request Flow
Client → API Gateway → Authentication → Rate Limiting → Routing → Backend Service</code></pre>
    </div>

    <h3>Key Features & Capabilities</h3>

    <h4>Protocol Translation & Transformation</h4>
    <ul>
      <li><strong>Protocol bridging:</strong> HTTP to gRPC, WebSocket, or messaging queues</li>
      <li><strong>Data transformation:</strong> Convert between JSON, XML, and other formats</li>
      <li><strong>Request/Response modification:</strong> Add headers, modify payloads</li>
      <li><strong>API versioning:</strong> Handle multiple API versions simultaneously</li>
    </ul>

    <h4>Monitoring & Analytics</h4>
    <ul>
      <li><strong>Real-time metrics:</strong> Request counts, latency, error rates</li>
      <li><strong>Distributed tracing:</strong> Track requests across multiple services</li>
      <li><strong>Logging:</strong> Centralized request/response logging</li>
      <li><strong>Alerting:</strong> Automated notifications for issues</li>
    </ul>

    <h4>Caching & Performance</h4>
    <ul>
      <li><strong>Response caching:</strong> Store frequently requested data</li>
      <li><strong>Cache invalidation:</strong> Smart cache refresh strategies</li>
      <li><strong>Compression:</strong> Reduce bandwidth usage</li>
      <li><strong>Connection pooling:</strong> Optimize backend connections</li>
    </ul>

    <h3>Common Implementation Patterns</h3>

    <h4>Backend for Frontend (BFF)</h4>
    <p>Separate gateways optimized for different client types (mobile, web, IoT).</p>

    <h4>Microservices Gateway</h4>
    <p>Central entry point for microservices architecture with service discovery integration.</p>

    <h4>Legacy Modernization</h4>
    <p>Gradually modernize legacy systems by exposing them through modern APIs.</p>

    <h3>Popular API Gateway Solutions</h3>

    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Gateway</th>
            <th>Type</th>
            <th>Key Strengths</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Amazon API Gateway</strong></td>
            <td>Managed Service</td>
            <td>AWS integration, serverless, auto-scaling</td>
            <td>AWS-centric architectures</td>
          </tr>
          <tr>
            <td><strong>Kong</strong></td>
            <td>Open Source</td>
            <td>Plugin ecosystem, high performance</td>
            <td>Flexible, customizable deployments</td>
          </tr>
          <tr>
            <td><strong>Envoy Proxy</strong></td>
            <td>Open Source</td>
            <td>High performance, observability, CNCF</td>
            <td>Cloud-native, service mesh</td>
          </tr>
          <tr>
            <td><strong>Azure API Management</strong></td>
            <td>Managed Service</td>
            <td>Enterprise features, developer portal</td>
            <td>Microsoft ecosystem, enterprise</td>
          </tr>
          <tr>
            <td><strong>Zuul (Netflix)</strong></td>
            <td>Open Source</td>
            <td>Battle-tested at scale, Java ecosystem</td>
            <td>Java-based microservices</td>
          </tr>
          <tr>
            <td><strong>Istio Gateway</strong></td>
            <td>Service Mesh</td>
            <td>Kubernetes native, security, observability</td>
            <td>Kubernetes, service mesh architectures</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="reference-links">
      <h4>References</h4>
      <ul>
        <li><a href="https://microservices.io/patterns/apigateway.html" target="_blank">Microservices.io: API Gateway Pattern</a></li>
        <li><a href="https://aws.amazon.com/api-gateway/api-gateway-patterns/" target="_blank">AWS: API Gateway Patterns and Best Practices</a></li>
        <li><a href="https://konghq.com/learning-center/api-gateway/" target="_blank">Kong: API Gateway Learning Center</a></li>
        <li><a href="https://docs.microsoft.com/en-us/azure/architecture/microservices/design/gateway" target="_blank">Microsoft: API Gateway Design Patterns</a></li>
      </ul>
    </div>
  `
}; 