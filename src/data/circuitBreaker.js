export const circuitBreaker = {
  id: 'circuit-breaker',
  title: 'Circuit Breaker Pattern',
  content: `
    <p>The Circuit Breaker pattern is a resilience design pattern that prevents cascading failures in distributed systems by monitoring service calls and automatically stopping requests when failures exceed a defined threshold. Named after electrical circuit breakers that protect electrical circuits from damage, this pattern provides fail-fast behavior and automatic recovery detection.</p>

    <h4>Real-World Example: Netflix's Hystrix Implementation</h4>
    <p>Netflix pioneered the Circuit Breaker pattern with Hystrix to protect their microservices architecture. When their recommendation service experiences high failure rates, Hystrix automatically opens the circuit breaker, causing all requests to fail immediately instead of waiting for timeouts. This prevents the 2-second timeout from cascading to other services, allowing Netflix to serve 200+ million users even when individual services fail, with fallback responses like "Popular Movies" instead of personalized recommendations.</p>

    <h3>Core Concept & Problem</h3>
    <p>In distributed systems, services often depend on remote calls to other services, databases, or external APIs. When a downstream service becomes slow or unavailable, upstream services can become overwhelmed waiting for responses, leading to resource exhaustion and cascading failures throughout the system.</p>

    <h3>Circuit Breaker States</h3>
    <p>The Circuit Breaker pattern operates through three distinct states, each with specific behaviors and transition conditions.</p>

    <h4>State Diagram</h4>
    <div class="code-block">
      <pre><code>Circuit Breaker State Machine:

                    ┌─────────────┐
                    │   CLOSED    │◀──────────────┐
                    │ (Normal)    │               │
                    └─────────────┘               │
                            │                     │
                      Failure rate               │
                      exceeds threshold          │
                            │                     │
                            ▼                     │
                    ┌─────────────┐               │
                    │    OPEN     │               │
                    │(Fail Fast)  │               │
                    └─────────────┘               │
                            │                     │
                      After timeout              │
                      period                     │
                            │                     │
                            ▼                     │
                    ┌─────────────┐               │
                    │ HALF-OPEN   │               │
                    │  (Testing)  │               │
                    └─────────────┘               │
                            │                     │
                    ┌───────┴───────┐             │
                    │               │             │
              Test succeeds    Test fails        │
                    │               │             │
                    └───────────────┘─────────────┘</code></pre>
    </div>

    <h4>1. Closed State (Normal Operation)</h4>
    <p><strong>Behavior:</strong> All requests pass through to the downstream service normally.</p>
    <ul>
      <li><strong>Request Handling:</strong> Forward all requests to the target service</li>
      <li><strong>Failure Tracking:</strong> Monitor success/failure rates within a sliding window</li>
      <li><strong>Transition Condition:</strong> Move to Open state when failure rate exceeds threshold</li>
      <li><strong>Performance Impact:</strong> Minimal overhead, just monitoring</li>
    </ul>

    <h4>2. Open State (Fail Fast)</h4>
    <p><strong>Behavior:</strong> All requests fail immediately without calling the downstream service.</p>
    <ul>
      <li><strong>Request Handling:</strong> Return failure response immediately (< 10ms)</li>
      <li><strong>Resource Protection:</strong> Prevent resource exhaustion from hanging requests</li>
      <li><strong>Fallback Execution:</strong> Execute fallback mechanisms or cached responses</li>
      <li><strong>Transition Condition:</strong> Move to Half-Open state after timeout period</li>
    </ul>

    <h4>3. Half-Open State (Recovery Testing)</h4>
    <p><strong>Behavior:</strong> Allow limited requests to test if the service has recovered.</p>
    <ul>
      <li><strong>Request Handling:</strong> Allow a small number of test requests through</li>
      <li><strong>Success Monitoring:</strong> Track if test requests succeed or fail</li>
      <li><strong>Transition Conditions:</strong> 
        <ul>
          <li>Close circuit if test requests succeed</li>
          <li>Re-open circuit if test requests fail</li>
        </ul>
      </li>
    </ul>

    <h4>Example: Amazon's DynamoDB Circuit Breaker</h4>
    <p>Amazon's DynamoDB client libraries implement circuit breakers to handle throttling and service unavailability. When DynamoDB returns throttling errors (400 status) at a rate exceeding 50% over a 1-minute window, the circuit breaker opens. During the open state, requests fail immediately with cached responses or default values. After 30 seconds, the circuit moves to half-open, allowing 3 test requests. If 2 out of 3 succeed, the circuit closes; otherwise, it reopens for another 30 seconds.</p>

    <h3>Key Configuration Parameters</h3>
    <p>Circuit breakers require careful tuning of parameters to balance protection with availability and performance.</p>

    <h4>Critical Parameters</h4>
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
            <th>Typical Values</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Failure Threshold</strong></td>
            <td>Error rate to trigger circuit opening</td>
            <td>50-70%</td>
            <td>Lower = More sensitive</td>
          </tr>
          <tr>
            <td><strong>Timeout Period</strong></td>
            <td>Time to wait before testing recovery</td>
            <td>30-60 seconds</td>
            <td>Longer = Slower recovery</td>
          </tr>
          <tr>
            <td><strong>Success Threshold</strong></td>
            <td>Successful calls needed to close circuit</td>
            <td>5-10 requests</td>
            <td>Higher = More conservative</td>
          </tr>
          <tr>
            <td><strong>Monitoring Window</strong></td>
            <td>Time period for failure calculation</td>
            <td>1-5 minutes</td>
            <td>Longer = More stable</td>
          </tr>
          <tr>
            <td><strong>Minimum Requests</strong></td>
            <td>Minimum calls before evaluating failure rate</td>
            <td>10-20 requests</td>
            <td>Prevents premature opening</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4>Parameter Tuning Guidelines</h4>
    <div class="code-block">
      <pre><code>Configuration Example:
{
  "failureThreshold": 0.6,        // 60% failure rate
  "timeoutPeriod": 30000,         // 30 seconds
  "successThreshold": 5,          // 5 successful calls
  "monitoringWindow": 60000,      // 1 minute window
  "minimumRequests": 10,          // At least 10 requests
  "requestTimeout": 5000          // 5 second timeout
}</code></pre>
    </div>

    <h3>Popular Circuit Breaker Libraries</h3>
    <p>Various libraries and frameworks provide circuit breaker implementations across different programming languages and platforms.</p>

    <h4>Library Comparison</h4>
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Library</th>
            <th>Language</th>
            <th>Status</th>
            <th>Features</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Hystrix</strong></td>
            <td>Java</td>
            <td>Deprecated</td>
            <td>Circuit breaker, bulkhead, metrics</td>
            <td>Legacy Netflix stack</td>
          </tr>
          <tr>
            <td><strong>Resilience4j</strong></td>
            <td>Java</td>
            <td>Active</td>
            <td>Lightweight, functional, reactive</td>
            <td>Modern Java applications</td>
          </tr>
          <tr>
            <td><strong>Polly</strong></td>
            <td>.NET</td>
            <td>Active</td>
            <td>Comprehensive resilience patterns</td>
            <td>.NET applications</td>
          </tr>
          <tr>
            <td><strong>Opossum</strong></td>
            <td>Node.js</td>
            <td>Active</td>
            <td>Simple, event-driven</td>
            <td>Node.js microservices</td>
          </tr>
          <tr>
            <td><strong>py-breaker</strong></td>
            <td>Python</td>
            <td>Active</td>
            <td>Decorator-based, simple</td>
            <td>Python applications</td>
          </tr>
          <tr>
            <td><strong>Istio</strong></td>
            <td>Service Mesh</td>
            <td>Active</td>
            <td>Language-agnostic, config-driven</td>
            <td>Kubernetes environments</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4>Alerting Strategies</h4>
    <ul>
      <li><strong>Circuit Opening:</strong> Immediate alert when circuit breaker opens</li>
      <li><strong>Prolonged Open State:</strong> Alert if circuit remains open beyond expected time</li>
      <li><strong>High Failure Rate:</strong> Warning when failure rate approaches threshold</li>
      <li><strong>Frequent State Changes:</strong> Alert for oscillating circuit behavior</li>
      <li><strong>Fallback Degradation:</strong> Monitor fallback performance and availability</li>
    </ul>

    <h3>References</h3>
    <ul>
      <li><a href="https://martinfowler.com/bliki/CircuitBreaker.html" target="_blank">Circuit Breaker - Martin Fowler</a></li>
      <li><a href="https://github.com/Netflix/Hystrix/wiki" target="_blank">Netflix Hystrix Documentation</a></li>
      <li><a href="https://resilience4j.readme.io/docs/circuitbreaker" target="_blank">Resilience4j Circuit Breaker</a></li>
    </ul>
  `
}; 