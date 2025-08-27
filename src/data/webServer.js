export const webServer = {
  id: 'web-server',
  title: 'Web Server',
  content: `
    <h2>Web Server</h2>
    <p>A web server processes HTTP requests and delivers web content to clients, handling both static and dynamic content delivery.</p>

    <h3>Core Components</h3>
    <ul>
      <li><strong>HTTP Engine:</strong> Request/Response processing</li>
      <li><strong>Static File Handler:</strong> Serves HTML, CSS, JS, images</li>
      <li><strong>Dynamic Content Processor:</strong> Executes server-side code</li>
      <li><strong>Connection Manager:</strong> Manages client connections</li>
      <li><strong>Security Module:</strong> Authentication, SSL/TLS</li>
    </ul>

    <h3>Popular Web Servers</h3>
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Server</th>
            <th>Architecture</th>
            <th>Performance</th>
            <th>Use Cases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Apache</strong></td>
            <td>Multi-process/threaded</td>
            <td>2,000-5,000 req/sec</td>
            <td>Traditional hosting, PHP</td>
          </tr>
          <tr>
            <td><strong>Nginx</strong></td>
            <td>Event-driven</td>
            <td>10,000-50,000 req/sec</td>
            <td>High-traffic, reverse proxy</td>
          </tr>
          <tr>
            <td><strong>IIS</strong></td>
            <td>Multi-threaded</td>
            <td>3,000-8,000 req/sec</td>
            <td>Windows, ASP.NET</td>
          </tr>
          <tr>
            <td><strong>Tomcat</strong></td>
            <td>Java-based</td>
            <td>1,000-3,000 req/sec</td>
            <td>Java applications</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>HTTP Request Lifecycle</h3>
    <ol>
      <li><strong>Connection:</strong> TCP handshake, SSL/TLS setup</li>
      <li><strong>Parsing:</strong> HTTP method, URL, headers, body</li>
      <li><strong>Routing:</strong> Virtual host, path matching, authentication</li>
      <li><strong>Processing:</strong> Static file serving or dynamic content</li>
      <li><strong>Response:</strong> Status code, headers, body generation</li>
      <li><strong>Delivery:</strong> Send response, manage connection</li>
    </ol>

    <h3>Caching Layers</h3>
    <ul>
      <li><strong>Browser Cache:</strong> Client-side, Cache-Control headers</li>
      <li><strong>CDN Cache:</strong> Edge servers, geographic distribution</li>
      <li><strong>Reverse Proxy:</strong> Nginx/Varnish, shared cache</li>
      <li><strong>Application Cache:</strong> Server memory, Redis/Memcached</li>
      <li><strong>Database Cache:</strong> Query results, query optimization</li>
    </ul>

    <h3>Security Essentials</h3>
    <ul>
      <li><strong>HTTPS:</strong> TLS 1.3, HSTS, certificate management</li>
      <li><strong>Authentication:</strong> Basic, JWT, OAuth 2.0, MFA</li>
      <li><strong>Input Validation:</strong> SQL injection, XSS, CSRF prevention</li>
      <li><strong>Security Headers:</strong> CSP, X-Frame-Options, X-XSS-Protection</li>
      <li><strong>Rate Limiting:</strong> Request throttling, DDoS protection</li>
    </ul>

    <h3>Performance Optimization</h3>
    <ul>
      <li><strong>Connection Pooling:</strong> Reuse TCP connections</li>
      <li><strong>HTTP/2:</strong> Multiplexing, server push, header compression</li>
      <li><strong>Compression:</strong> gzip/brotli for text content</li>
      <li><strong>Load Balancing:</strong> Round-robin, least connections, health checks</li>
      <li><strong>Resource Management:</strong> Memory allocation, CPU utilization</li>
    </ul>

    <div class="info-note">
      <strong>Performance Targets</strong><br>
      Static content: &lt;100ms | Dynamic content: &lt;500ms | API responses: &lt;200ms | Page load: &lt;3 seconds
    </div>

    <h3>Interview Questions</h3>
    
    <h4>Q: What's the difference between a web server and an application server?</h4>
    <p><strong>A:</strong> Web server handles HTTP requests and serves static content, while application server executes business logic and dynamic applications.</p>

    <h4>Q: How do you handle 10,000 concurrent connections?</h4>
    <p><strong>A:</strong> Use event-driven architecture (Nginx), connection pooling, HTTP/2 multiplexing, load balancing with health checks.</p>

    <h4>Q: Explain the HTTP request lifecycle.</h4>
    <p><strong>A:</strong> TCP connection → HTTP parsing → routing/auth → content processing → response generation → delivery.</p>

    <h4>Q: How do you optimize web server performance?</h4>
    <p><strong>A:</strong> Enable compression, implement caching layers, use CDN, HTTP/2, connection pooling, asynchronous I/O.</p>

    <h4>Q: What are the main security threats?</h4>
    <p><strong>A:</strong> DDoS, SQL injection, XSS, CSRF, directory traversal. Mitigate with WAF, input validation, HTTPS, rate limiting.</p>

    <h4>Q: What's the difference between Apache and Nginx?</h4>
    <p><strong>A:</strong> Apache: multi-process/threaded, better for dynamic content, more flexible. Nginx: event-driven, better for static content and high concurrency, more memory-efficient.</p>

    <h3>Key Takeaways</h3>
    <ul>
      <li><strong>Architecture:</strong> Choose based on use case - Apache for flexibility, Nginx for performance</li>
      <li><strong>Performance:</strong> 1,000-50,000 req/sec depending on server type</li>
      <li><strong>Caching:</strong> Multiple layers essential for optimal performance</li>
      <li><strong>Security:</strong> HTTPS, input validation, rate limiting are critical</li>
      <li><strong>Scalability:</strong> Load balancing and horizontal scaling</li>
    </ul>

    <h3>Further Reading and References</h3>
    <ul>
      <li><a href="https://stackoverflow.com/questions/936197/what-is-the-difference-between-application-server-and-web-server" target="_blank">Stack Overflow: What is the difference between application server and web server?</a></li>
      <li><a href="https://httpd.apache.org/docs/" target="_blank">Apache HTTP Server Documentation</a></li>
      <li><a href="https://nginx.org/en/docs/" target="_blank">Nginx Documentation</a></li>
      <li><a href="https://tools.ietf.org/html/rfc7540" target="_blank">RFC 7540: HTTP/2</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP" target="_blank">MDN HTTP Documentation</a></li>
    </ul>
  `
}; 