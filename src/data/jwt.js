export const jwt = {
  id: 'jwt',
  title: 'JWT',
  content: `
    <p>JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. JWT token can be used for both authentication and authorization purposes. A JWT token consists of three parts: a header (metadata), a payload (claims), and a signature.</p>

    <h3>JWT Structure</h3>
    <p>JWT consists of three parts separated by dots (.): <strong>Header.Payload.Signature</strong></p>
    <p>The format follows this pattern: <code>&lt;Base64URL encoded header&gt;.&lt;Base64URL encoded payload&gt;.&lt;Base64URL encoded signature&gt;</code></p>

    <div class="code-block">
      <div class="code-label">Example JWT</div>
      <pre><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</code></pre>
    </div>

    <h3>JWT Components</h3>
    <p>Each part of the JWT serves a specific purpose in the token's functionality and security.</p>

    <h4>1. Header</h4>
    <p>The header contains metadata about the token, such as the type of token (JWT) and the cryptographic algorithm used for signing.</p>
    <ul>
      <li><strong>alg</strong>: Algorithm used for signing (e.g., HS256, RS256)</li>
      <li><strong>typ</strong>: Token type (JWT)</li>
      <li><strong>kid</strong>: Key ID for signature verification</li>
    </ul>

    <div class="code-block">
      <div class="code-label">DECODED HEADER</div>
      <pre><code>{
  "alg": "HS256",
  "typ": "JWT"
}</code></pre>
    </div>

    <h4>2. Payload (Claims)</h4>
    <p>The payload contains the claims, which are statements about an entity (typically the user) and additional data. Claims include the subject (sub), issuer (iss), expiration time (exp), and custom user information.</p>

    <h4>Common Claims</h4>
    <ul>
      <li><strong>iss</strong>: Issuer of the token</li>
      <li><strong>sub</strong>: Subject (user ID)</li>
      <li><strong>aud</strong>: Audience (intended recipient)</li>
      <li><strong>exp</strong>: Expiration time</li>
      <li><strong>iat</strong>: Issued at time</li>
      <li><strong>nbf</strong>: Not before time</li>
    </ul>

    <div class="code-block">
      <div class="code-label">DECODED PAYLOAD</div>
      <pre><code>{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622,
  "role": "user",
  "permissions": ["read", "write"]
}</code></pre>
    </div>

    <h4>3. Signature</h4>
    <p>The signature is created by taking the encoded header, the encoded payload, and a secret key known only to the server. This data is combined and then signed using a cryptographic algorithm specified in the header (e.g., HMAC SHA-256, RSA). The resulting signature is appended to the first two parts of the JWT.</p>

    <div class="code-block">
      <div class="code-label">SIGNATURE CREATION</div>
      <pre><code>HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)</code></pre>
    </div>

    <h3>JWT Advantages</h3>
    <ul>
      <li><strong>Stateless</strong>: No server-side session storage required</li>
      <li><strong>Compact</strong>: Smaller than XML-based tokens</li>
      <li><strong>Self-contained</strong>: All necessary information is in the token</li>
      <li><strong>Cross-domain</strong>: Works across different domains and services</li>
      <li><strong>Scalable</strong>: No need for centralized session storage</li>
      <li><strong>Standardized</strong>: RFC 7519 standard ensures interoperability</li>
    </ul>

    <h3>JWT Issues and Challenges</h3>
    <p>While JWTs offer many benefits, they also present several challenges that must be carefully considered in implementation.</p>

    <h4>1. Security Risks</h4>
    <ul>
      <li><strong>Long expiration times:</strong> JWTs have long token expiration times which can pose a security risk if a token is compromised</li>
      <li><strong>No built-in revocation:</strong> Cannot invalidate individual tokens before expiration</li>
      <li><strong>Token size:</strong> If JWTs contain a lot of claims, they can become large, increasing the size of HTTP headers</li>
    </ul>

    <h4>2. Data Exposure</h4>
    <ul>
      <li><strong>Base64 encoding:</strong> JWTs are base64-encoded but not encrypted by default, making sensitive information in the payload easily decodable</li>
      <li><strong>Client-side storage:</strong> Tokens stored in browsers can be vulnerable to XSS attacks</li>
      <li><strong>Information leakage:</strong> Payload data is visible to anyone who can decode the token</li>
    </ul>

    <h4>3. Performance Considerations</h4>
    <ul>
      <li><strong>Header size:</strong> Large tokens increase HTTP header size, potentially impacting performance</li>
      <li><strong>Mobile impact:</strong> Particularly affects mobile and low-bandwidth connections</li>
      <li><strong>Parsing overhead:</strong> Each request requires token parsing and validation</li>
    </ul>

    <h3>Security Best Practices</h3>
    <ul>
      <li><strong>Secret Management</strong>: Protect signing keys and rotate them regularly</li>
      <li><strong>Token Expiration</strong>: Use short lifetimes and implement refresh tokens</li>
      <li><strong>Sensitive Data</strong>: Don't store sensitive information in the payload</li>
      <li><strong>HTTPS Only</strong>: Always use secure transmission</li>
      <li><strong>Algorithm Selection</strong>: Use strong algorithms (RS256, ES256) for production</li>
      <li><strong>Token Storage</strong>: Store tokens securely (HttpOnly cookies, secure storage)</li>
    </ul>

    <h3>Use Cases</h3>
    <ul>
      <li><strong>Authentication</strong>: User login sessions and identity verification</li>
      <li><strong>Authorization</strong>: API access control and permission management</li>
      <li><strong>Information Exchange</strong>: Secure data transfer between services</li>
      <li><strong>Single Sign-On</strong>: Cross-application authentication</li>
      <li><strong>Microservices</strong>: Service-to-service authentication</li>
      <li><strong>Mobile Apps</strong>: Stateless authentication for mobile applications</li>
    </ul>

    <h3>JWT vs Session-Based Authentication</h3>
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>JWT</th>
            <th>Session-Based</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Storage</strong></td>
            <td>Client-side</td>
            <td>Server-side</td>
          </tr>
          <tr>
            <td><strong>Scalability</strong></td>
            <td>Highly scalable</td>
            <td>Requires session sharing</td>
          </tr>
          <tr>
            <td><strong>Security</strong></td>
            <td>Depends on implementation</td>
            <td>Server-controlled</td>
          </tr>
          <tr>
            <td><strong>Revocation</strong></td>
            <td>Difficult until expiration</td>
            <td>Immediate</td>
          </tr>
          <tr>
            <td><strong>Performance</strong></td>
            <td>No server lookup needed</td>
            <td>Server lookup required</td>
          </tr>
          <tr>
            <td><strong>Data Storage</strong></td>
            <td>Limited by token size</td>
            <td>Unlimited server storage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Interview Questions</h3>
    <div class="interview-qa">
      <h4>Q: What are the main differences between JWT and session-based authentication?</h4>
      <p><strong>A:</strong> JWT is stateless (no server storage), while sessions require server-side storage. JWT is better for scalability and microservices, but sessions offer better security control and immediate revocation capabilities.</p>
    </div>

    <div class="interview-qa">
      <h4>Q: How do you handle JWT token revocation?</h4>
      <p><strong>A:</strong> JWT tokens cannot be directly revoked since they're stateless. Common approaches include using short expiration times with refresh tokens, maintaining a blacklist of revoked tokens, or using a hybrid approach with session-like storage for critical applications.</p>
    </div>

    <div class="interview-qa">
      <h4>Q: What security risks are associated with JWTs?</h4>
      <p><strong>A:</strong> Key risks include long expiration times, base64 encoding (not encryption), potential for XSS attacks if stored in localStorage, and the inability to revoke individual tokens. Proper implementation requires short expiration times, secure storage, and careful payload design.</p>
    </div>

    <div class="reference-links">
      <h4>Further Reading and References</h4>
      <ul>
        <li><a href="https://jwt.io/" target="_blank">JWT.io - Debugger and Documentation</a></li>
        <li><a href="https://blog.bytebytego.com/p/ep69-explaining-json-web-token-jwt" target="_blank">ByteByteGo: Explaining JSON Web Token (JWT)</a></li>
        <li><a href="https://www.scaler.com/topics/spring-boot/jwt-token/" target="_blank">Scaler: JWT Token in Spring Boot</a></li>
      </ul>
    </div>
  `
}; 