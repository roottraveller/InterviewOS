export const authorization = {
  id: 'authorization',
  title: 'Authorization',
  content: `
    <p>Authorization is the process of determining what actions or resources an authenticated user is permitted to access within a system. While authentication answers "Who are you?", authorization answers "What are you allowed to do?" It's a critical security control that enforces access policies and ensures users can only perform actions appropriate to their role and context.</p>

    <h3>Core Authorization Concepts</h3>
    <p>Authorization systems are built on fundamental concepts that define how access decisions are made and enforced across different system components.</p>

    <h4>Key Authorization Elements</h4>
    <ul>
      <li><strong>Subject:</strong> The entity requesting access (user, service, application)</li>
      <li><strong>Object:</strong> The resource being accessed (file, database, API endpoint)</li>
      <li><strong>Action:</strong> The operation being performed (read, write, delete, execute)</li>
      <li><strong>Context:</strong> Environmental factors (time, location, device, network)</li>
      <li><strong>Policy:</strong> Rules that define access permissions</li>
    </ul>

    <div class="info-note">
      <strong>Example: Google Drive File Sharing</strong><br>
      When you share a Google Drive document, you're setting authorization policies. You can give someone "View" access (read-only), "Comment" access (read + comment), or "Edit" access (full permissions). The system checks these permissions every time someone tries to access the file, ensuring they can only perform actions you've authorized.
    </div>

    <h3>Authorization Models</h3>
    <p>Different authorization models provide various approaches to managing access control, each suited for different organizational needs and security requirements.</p>

    <h4>1. Role-Based Access Control (RBAC)</h4>
    <p>RBAC is the most widely used authorization model, organizing permissions around roles that reflect job functions or responsibilities.</p>

    <ul>
      <li><strong>Users:</strong> Individual entities in the system</li>
      <li><strong>Roles:</strong> Job functions or responsibilities (Admin, Editor, Viewer)</li>
      <li><strong>Permissions:</strong> Specific actions on resources</li>
      <li><strong>Role Assignment:</strong> Users assigned to one or more roles</li>
      <li><strong>Permission Assignment:</strong> Permissions assigned to roles</li>
    </ul>

    <div class="info-note">
      <strong>Example: Hospital Management System RBAC</strong><br>
      In a hospital system, a Doctor role might have permissions to read patient records, write prescriptions, and update treatment plans. A Nurse role might read patient records and update vital signs but cannot write prescriptions. An Administrator role manages user accounts and system settings but cannot access patient medical data, ensuring proper separation of duties.
    </div>

    <h4>2. Attribute-Based Access Control (ABAC)</h4>
    <p>ABAC provides fine-grained, dynamic access control based on attributes of the user, resource, action, and environment.</p>

    <ul>
      <li><strong>User attributes:</strong> Department, clearance level, job title</li>
      <li><strong>Resource attributes:</strong> Classification, owner, creation date</li>
      <li><strong>Action attributes:</strong> Operation type, urgency level</li>
      <li><strong>Environmental attributes:</strong> Time, location, network security</li>
    </ul>

    <div class="info-note">
      <strong>Example: Military Document Access (ABAC)</strong><br>
      A military system might allow access to classified documents only if: the user has appropriate security clearance (user attribute), the document classification matches or is below the user's clearance (resource attribute), the access is during business hours (environmental attribute), and the user is accessing from a secure network (environmental attribute).
    </div>

    <h4>3. Discretionary Access Control (DAC)</h4>
    <ul>
      <li><strong>Owner control:</strong> Resource owners set access permissions</li>
      <li><strong>Flexible permissions:</strong> Users can grant/revoke access to their resources</li>
      <li><strong>Access Control Lists (ACLs):</strong> Per-resource permission lists</li>
      <li><strong>Inheritance:</strong> Permissions can be inherited from parent objects</li>
    </ul>

    <h4>4. Mandatory Access Control (MAC)</h4>
    <ul>
      <li><strong>System-enforced:</strong> Access policies set by system administrators</li>
      <li><strong>Security labels:</strong> Resources and users have security classifications</li>
      <li><strong>No user override:</strong> Users cannot change access permissions</li>
      <li><strong>High security:</strong> Used in military and government systems</li>
    </ul>

    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Control</th>
            <th>Flexibility</th>
            <th>Complexity</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>RBAC</strong></td>
            <td>Role-based</td>
            <td>Medium</td>
            <td>Low</td>
            <td>Enterprise applications</td>
          </tr>
          <tr>
            <td><strong>ABAC</strong></td>
            <td>Attribute-based</td>
            <td>High</td>
            <td>High</td>
            <td>Complex, dynamic environments</td>
          </tr>
          <tr>
            <td><strong>DAC</strong></td>
            <td>Owner-based</td>
            <td>High</td>
            <td>Medium</td>
            <td>File systems, collaborative tools</td>
          </tr>
          <tr>
            <td><strong>MAC</strong></td>
            <td>System-enforced</td>
            <td>Low</td>
            <td>Medium</td>
            <td>High-security environments</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>OAuth 2.0 and Scopes</h3>
    <p>OAuth 2.0 uses scopes to define specific permissions for API access, providing fine-grained authorization for third-party applications.</p>

    <h4>Scope-Based Authorization</h4>
    <ul>
      <li><strong>Granular permissions:</strong> Specific actions on specific resources</li>
      <li><strong>User consent:</strong> Users explicitly grant permissions</li>
      <li><strong>Limited access:</strong> Applications get only requested permissions</li>
      <li><strong>Revocable:</strong> Users can revoke permissions at any time</li>
    </ul>

    <h4>Common OAuth Scopes</h4>
    <ul>
      <li><strong>read:</strong> Read access to resources</li>
      <li><strong>write:</strong> Create and update resources</li>
      <li><strong>delete:</strong> Delete resources</li>
      <li><strong>admin:</strong> Administrative access</li>
      <li><strong>profile:</strong> Access to user profile information</li>
    </ul>

    <div class="info-note">
      <strong>Example: GitHub OAuth Scopes</strong><br>
      When a CI/CD tool requests access to your GitHub repositories, it might request scopes like "repo:status" (access to commit status), "public_repo" (access to public repositories), or "repo" (full repository access). You can see exactly what permissions the application is requesting and approve only the necessary scopes, following the principle of least privilege.
    </div>

    <h3>JWT Claims and Authorization</h3>
    <p>JSON Web Tokens can include authorization information in their claims, enabling stateless authorization decisions.</p>

    <h4>Authorization Claims</h4>
    <ul>
      <li><strong>Roles:</strong> User's assigned roles</li>
      <li><strong>Permissions:</strong> Specific permissions granted</li>
      <li><strong>Scopes:</strong> OAuth scopes for API access</li>
      <li><strong>Context:</strong> Time limits, IP restrictions</li>
    </ul>

    <h4>JWT Authorization Example</h4>
    <div class="code-block">
      <div class="code-label">JWT CLAIMS</div>
      <pre><code>{
  "sub": "user123",
  "name": "John Doe",
  "roles": ["editor", "reviewer"],
  "permissions": ["read:articles", "write:articles"],
  "scopes": ["api:read", "api:write"],
  "department": "engineering",
  "clearance": "confidential",
  "exp": 1640995200
}</code></pre>
    </div>

    <h3>Authorization Strategies</h3>
    <p>Different strategies can be employed to implement authorization effectively across various system architectures.</p>

    <h4>1. Access Control Lists (ACL)</h4>
    <ul>
      <li><strong>Resource-specific:</strong> Permissions attached to individual resources</li>
      <li><strong>User/group lists:</strong> Explicit lists of allowed users or groups</li>
      <li><strong>Action granularity:</strong> Different permissions for different actions</li>
      <li><strong>Inheritance:</strong> Permissions can be inherited from parent resources</li>
    </ul>

    <h4>2. Capability-Based Security</h4>
    <ul>
      <li><strong>Capability tokens:</strong> Tokens represent specific permissions</li>
      <li><strong>Unforgeable:</strong> Cryptographically secured capabilities</li>
      <li><strong>Transferable:</strong> Capabilities can be delegated</li>
      <li><strong>Revocable:</strong> Capabilities can be revoked</li>
    </ul>

    <h4>3. Context-Aware Authorization</h4>
    <ul>
      <li><strong>Time-based:</strong> Access allowed only during specific hours</li>
      <li><strong>Location-based:</strong> Access restricted by geographic location</li>
      <li><strong>Device-based:</strong> Access limited to specific devices</li>
      <li><strong>Network-based:</strong> Access restricted to specific networks</li>
    </ul>

    <div class="info-note">
      <strong>Example: Banking Context-Aware Authorization</strong><br>
      A banking application might allow normal transactions during business hours from known devices, but require additional verification for large transfers, transactions outside business hours, or access from new devices. The system considers time, location, transaction amount, and device trust level to make dynamic authorization decisions.
    </div>

    <h3>Modern Authorization Patterns</h3>
    <p>Contemporary authorization systems incorporate advanced patterns to address modern security challenges and architectural requirements.</p>

    <h4>Zero Trust Authorization</h4>
    <ul>
      <li><strong>Never trust, always verify:</strong> Continuous authorization verification</li>
      <li><strong>Context-aware decisions:</strong> Consider all available context</li>
      <li><strong>Micro-segmentation:</strong> Fine-grained access control</li>
      <li><strong>Dynamic policies:</strong> Policies adapt to changing conditions</li>
    </ul>

    <h4>Policy as Code</h4>
    <ul>
      <li><strong>Version control:</strong> Authorization policies in source control</li>
      <li><strong>Automated testing:</strong> Test authorization policies like application code</li>
      <li><strong>CI/CD integration:</strong> Deploy policy changes through pipelines</li>
      <li><strong>Audit trail:</strong> Track policy changes over time</li>
    </ul>

    <h4>Microservices Authorization</h4>
    <ul>
      <li><strong>Service-to-service:</strong> Authorization between microservices</li>
      <li><strong>Distributed decisions:</strong> Authorization at service boundaries</li>
      <li><strong>Token propagation:</strong> Pass authorization context between services</li>
      <li><strong>Service mesh:</strong> Authorization at the infrastructure level</li>
    </ul>

    <div class="info-note">
      <strong>Example: Netflix's Microservices Authorization</strong><br>
      Netflix uses a distributed authorization model where each microservice makes its own authorization decisions based on JWT tokens. The tokens contain user context and permissions, allowing services to make authorization decisions without calling back to a central authorization service. This approach scales well with their thousands of microservices while maintaining security.
    </div>

    <h3>Implementation Challenges</h3>
    <p>Authorization systems face various challenges that must be addressed for effective security and usability.</p>

    <h4>Performance Considerations</h4>
    <ul>
      <li><strong>Caching strategies:</strong> Cache authorization decisions to improve performance</li>
      <li><strong>Lazy evaluation:</strong> Evaluate permissions only when needed</li>
      <li><strong>Batch operations:</strong> Group authorization checks for efficiency</li>
      <li><strong>Async processing:</strong> Non-blocking authorization checks</li>
    </ul>

    <h4>Scalability Challenges</h4>
    <ul>
      <li><strong>Distributed systems:</strong> Authorization across multiple services</li>
      <li><strong>Data consistency:</strong> Keeping authorization data synchronized</li>
      <li><strong>High availability:</strong> Authorization system uptime requirements</li>
      <li><strong>Global distribution:</strong> Authorization across geographic regions</li>
    </ul>

    <h4>Complexity Management</h4>
    <ul>
      <li><strong>Policy conflicts:</strong> Resolving conflicting authorization rules</li>
      <li><strong>Role explosion:</strong> Managing large numbers of roles</li>
      <li><strong>Permission creep:</strong> Users accumulating unnecessary permissions</li>
      <li><strong>Debugging:</strong> Troubleshooting authorization failures</li>
    </ul>

    <div class="reference-links">
      <h4>Further Reading and References</h4>
      <ul>
        <li><a href="https://auth0.com/docs/manage-users/access-control" target="_blank">Auth0: Access Control Documentation</a></li>
      </ul>
    </div>
  `
}; 