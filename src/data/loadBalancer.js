export const loadBalancer = {
  id: "load-balancer",
  title: "Load Balancer",
  content: `
    <h2>Load Balancer (LB)</h2>
    <p>LB is responsible for Traffic Distribution, High Availability, Scalability, Session Persistence, Health Checks, SSL Termination, Content-Based Routing, Rate Limiting, Logging and Monitoring etc.</p>

    <h3>Examples</h3>
    <ul>
      <li>HAProxy (High Availability Proxy)</li>
      <li>Nginx</li>
      <li>AWS ELB (Elastic Load Balancing)</li>
      <li>Azure Load Balancer</li>
      <li>Google Cloud Load Balancing</li>
    </ul>

    <h3>Health Checks</h3>
    <p>If a server fails a health check, it is automatically removed from the pool, and traffic will not be forwarded to it until it responds to the health checks again.</p>

    <h3>Types of Load Balancing Technology</h3>
    <ul>
      <li><strong>Hardware Load Balancers:</strong> Dedicated physical devices</li>
      <li><strong>Software Load Balancers:</strong> Software-based solutions</li>
    </ul>

    <h3>Types of Load Balancer</h3>
    
    <h4>Application Load Balancer (L7 Balancer)</h4>
    <p>Provides advanced routing features and can make routing decisions based on HTTP headers, session information, request/response data, and content. Supports features like SSL termination, content-based routing, and host-based routing. Ideal for modern web applications with complex routing requirements and microservices architectures.</p>

    <h4>Network Load Balancer (L4 Balancer)</h4>
    <p>Routes traffic based on IP address and port information only.</p>

    <h4>DNS Load Balancer</h4>
    <p>Distributes traffic across multiple servers using DNS (Domain Name System) resolution. Works by resolving domain names to multiple IP addresses, each corresponding to a different server.</p>

    <h3>Load Balancing Algorithms</h3>

    <h4>Dynamic Load Balancing Algorithms</h4>
    <ul>
      <li><strong>Least Connection:</strong> Routes requests to the server with the fewest active connections</li>
      <li><strong>Weighted Least Connection:</strong> Considers both connection count and server capacity</li>
      <li><strong>Least Response Time:</strong> Routes to the server with the fastest response time</li>
      <li><strong>Resource-based:</strong> Routes based on server resource utilization</li>
      <li><strong>Adaptive Load Balancing:</strong> Adjusts routing based on real-time conditions</li>
      <li><strong>Dynamic Proximity-based:</strong> Routes based on geographic proximity</li>
    </ul>

    <h4>Static Load Balancing Algorithms</h4>
    <ul>
      <li><strong>Round Robin:</strong> Distributes requests sequentially across servers</li>
      <li><strong>Weighted Round Robin:</strong> Assigns weights to servers based on their capacity</li>
      <li><strong>IP Hash:</strong> Uses hash of client IP address to determine server assignment. This ensures that requests from the same client are always routed to the same server, which can be useful for maintaining session state.</li>
      <li><strong>Static Proximity-based:</strong> Routes based on predefined geographic regions</li>
      <li><strong>Static Content-based:</strong> Routes based on content type or URL patterns</li>
    </ul>

    <h3>Load Balancing vs Consistent Hashing</h3>
    <p>While both load balancing and consistent hashing are used in distributed systems, they serve different purposes and operate at different levels:</p>
    
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Load Balancing</th>
            <th>Consistent Hashing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Primary Purpose</strong></td>
            <td>Request distribution across replicas/nodes</td>
            <td>Data partitioning and distribution across nodes</td>
          </tr>
          <tr>
            <td><strong>Operation Level</strong></td>
            <td>Request layer - determines which node handles specific requests</td>
            <td>Data layer - determines which node stores specific data</td>
          </tr>
          <tr>
            <td><strong>Key Function</strong></td>
            <td>Decides which replica or node should handle a request among the replicas based on load balancing algorithms</td>
            <td>Handles the distribution of data (data partitioning) across nodes and determines which node is responsible for each piece of data based on a consistent hashing scheme</td>
          </tr>
          <tr>
            <td><strong>Consistency</strong></td>
            <td>May not guarantee consistent routing for the same client</td>
            <td>Minimizes data movement when nodes are added/removed</td>
          </tr>
          <tr>
            <td><strong>Use Cases</strong></td>
            <td>Web servers, application servers, API gateways</td>
            <td>Distributed caches, databases, storage systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="reference-links">
      <h4>Further Reading and References</h4>
      <ul>
        <li><a href="https://www.scaler.com/topics/aws/load-balancing/" target="_blank">Load Balancing - AWS</a></li>
        <li><a href="https://www.nginx.com/resources/glossary/load-balancing/" target="_blank">Load Balancing - Nginx</a></li>
        <li><a href="https://blog.bytebytego.com/p/ep47-common-load-balancing-algorithms" target="_blank">Common Load Balancing Algorithms</a></li>
      </ul>
    </div>
  `
}; 