export const rateLimiting = {
  id: 'rate-limiting',
  title: 'Rate Limiting',
  content: `
<p>Rate limiting is used to control the rate at which clients or users can access a particular resource or service over a specified period of time. It helps prevent abuse, misuse, or overloading of the system by limiting the number of requests or transactions that can be processed within a given timeframe.</p>

    <h3>Why Rate Limiting?</h3>
    
    <h4>Protection Against</h4>
    <ul>
      <li><strong>DDoS Attacks:</strong> Prevents overwhelming the system</li>
      <li><strong>Brute Force:</strong> Limits password guessing attempts</li>
      <li><strong>Resource Exhaustion:</strong> Prevents single user monopolizing resources</li>
      <li><strong>API Abuse:</strong> Controls excessive API usage</li>
      <li><strong>Cost Control:</strong> Manages third-party API costs</li>
    </ul>

    <h4>Benefits</h4>
    <ul>
      <li><strong>Fair Usage:</strong> Ensures equitable resource distribution</li>
      <li><strong>System Stability:</strong> Prevents overload</li>
      <li><strong>Quality of Service:</strong> Maintains performance for all users</li>
      <li><strong>Revenue Protection:</strong> Enforces pricing tiers</li>
      <li><strong>Security:</strong> Mitigates various attack vectors</li>
    </ul>

    <h3>Rate Limiting Algorithms</h3>
    
    <h4>1. Token Bucket</h4>
    <p>Uses a fixed-size token bucket. Each request consumes a token if available, else rate-limited. Tokens are refilled at a fixed rate.</p>

    <h4>2. Leaking Bucket</h4>
    <p>Uses a virtual "bucket/queue" with a fixed capacity and a constant leak rate. Requests are added to the bucket if not full, else rate-limited.</p>

    <h4>3. Fixed Window Counter</h4>
    <p>Requests are counted within fixed time intervals or windows. If the number of requests exceeds the allowed threshold, the request is rate-limited. The window is reset at a fixed time interval.</p>

    <h4>4. Sliding Window (Production)</h4>
    <p>Requests within the current rolling or sliding window are counted, and if they exceed the threshold, further requests are rate-limited.</p>

    <h3>Implementation Strategies</h3>
    
    <h4>1. Client-Side Rate Limiting</h4>
    <ul>
      <li><strong>SDK/Library:</strong> Built into client libraries</li>
      <li><strong>Retry Logic:</strong> Exponential backoff</li>
      <li><strong>Local Throttling:</strong> Prevents unnecessary requests</li>
      <li><strong>Cooperative:</strong> Relies on client compliance</li>
    </ul>

    <h4>2. Server-Side Rate Limiting</h4>
    <ul>
      <li><strong>API Gateway:</strong> Centralized rate limiting</li>
      <li><strong>Application Level:</strong> In-app implementation</li>
      <li><strong>Middleware:</strong> Framework middleware</li>
      <li><strong>Reverse Proxy:</strong> Nginx, HAProxy</li>
    </ul>

    <h4>3. Distributed Rate Limiting</h4>
    <ul>
      <li><strong>Redis-based:</strong> Shared counter storage</li>
      <li><strong>Sticky Sessions:</strong> Route to same server</li>
      <li><strong>Gossip Protocol:</strong> Sync between nodes</li>
      <li><strong>Token Bucket Service:</strong> Centralized token management</li>
    </ul>

    <h3>Rate Limiter Response</h3>
    
    <p>The rate limiter returns HTTP response code 429 - Too Many Requests with the following HTTP headers to the client:</p>
    
    <div class="code-block">
      <div class="code-label">CODE</div>
      <pre><code>HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1623456789
Retry-After: 58
Content-Type: application/json

{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "API rate limit exceeded",
    "retry_after": 58
  }
}

// Header Meanings:
// X-RateLimit-Limit: Max requests per window
// X-RateLimit-Remaining: Requests left in current window
// X-RateLimit-Reset: Unix timestamp when limit resets
// Retry-After: Seconds until next request allowed</code></pre>
    </div>

    <h3>Hard vs Soft Rate Limiting</h3>
    
    <h4>Hard Rate Limiting</h4>
    <ul>
      <li><strong>Strict Enforcement:</strong> No exceptions</li>
      <li><strong>Immediate Rejection:</strong> 429 response</li>
      <li><strong>No Grace Period:</strong> Exact limit</li>
      <li><strong>Use Case:</strong> Security, cost control</li>
    </ul>

    <h4>Soft Rate Limiting</h4>
    <ul>
      <li><strong>Flexible:</strong> Allows burst traffic</li>
      <li><strong>Grace Period:</strong> Warning before blocking</li>
      <li><strong>Degraded Service:</strong> Reduced functionality</li>
      <li><strong>Use Case:</strong> User experience, elasticity</li>
    </ul>

    <h3>Rate Limiting Examples</h3>
    
    <h4>Popular Libraries</h4>
    <ul>
      <li><strong>express-rate-limit (Node.js):</strong> Express middleware</li>
      <li><strong>Resilience4j (Java):</strong> Rate limiter module</li>
      <li><strong>rack-attack (Ruby):</strong> Rack middleware</li>
      <li><strong>django-ratelimit (Python):</strong> Django decorator</li>
      <li><strong>Bucket4j (Java):</strong> Token bucket implementation</li>
      <li><strong>golang.org/x/time/rate (Go):</strong> Official rate limiter</li>
    </ul>

    <h4>Infrastructure Solutions</h4>
    <ul>
      <li><strong>Nginx:</strong> ngx_http_limit_req_module</li>
      <li><strong>HAProxy:</strong> stick-table rate limiting</li>
      <li><strong>Cloudflare:</strong> Rate limiting rules</li>
      <li><strong>AWS API Gateway:</strong> Usage plans and API keys</li>
      <li><strong>Kong:</strong> Rate limiting plugin</li>
    </ul>

    <h3>Further Reading and References</h3>
    <ul>
      <li><a href="https://tech.groww.in/rate-limiter-and-its-algorithms-with-illustrations-564455162935" target="_blank">Rate Limiter and Its Algorithms with Illustrations - Groww Tech</a></li>
      <li><a href="https://www.system.design/SystemDesign/RateLimiter" target="_blank">Rate Limiter - System Design</a></li>
    </ul>

`
}; 