export const baseProperties = {
  id: "base-properties",
  title: "BASE Properties",
  content: `
    <p>BASE principles are often employed in distributed systems and NoSQL databases, prioritizing availability and partition tolerance over strict consistency.</p>

    <h3>Basically Available</h3>
    <p>Focuses on providing availability over consistency, meaning that the system should remain operational even in the face of failures or network partitions.</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>Distributed System Availability</span>
      </div>
      <pre><code>-- Example: Basically Available System
-- Multiple database nodes for high availability
CREATE TABLE users (
  id VARCHAR(36) PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  last_login TIMESTAMP
);

-- Node 1 (Primary)
INSERT INTO users (id, username, email) 
VALUES ('123', 'john_doe', 'john@example.com');

-- Node 2 (Replica) - May have slight delay
-- System remains available even if Node 1 fails
SELECT * FROM users WHERE username = 'john_doe';
-- Returns data from available nodes</code></pre>
    </div>

    <h3>Soft State</h3>
    <p>Allows for temporary inconsistencies or relaxed consistency requirements, particularly useful in distributed systems.</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>Soft State Implementation</span>
      </div>
      <pre><code>-- Example: Soft State with Temporary Inconsistencies
-- User session data across multiple servers
CREATE TABLE user_sessions (
  session_id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36),
  last_activity TIMESTAMP,
  data JSON,
  ttl INT -- Time to live
);

-- Server 1: User updates profile
UPDATE user_sessions 
SET data = '{"theme": "dark", "language": "en"}'
WHERE session_id = 'session_123';

-- Server 2: May still show old data temporarily
SELECT data FROM user_sessions WHERE session_id = 'session_123';
-- Could return old theme until replication completes</code></pre>
    </div>

    <h3>Eventually Consistent</h3>
    <p>Promotes the idea that system-wide consistency will eventually be achieved, given enough time and lack of further updates.</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>Eventually Consistent Replication</span>
      </div>
      <pre><code>-- Example: Eventually Consistent System
-- Distributed cache with eventual consistency
CREATE TABLE cache_data (
  key VARCHAR(100) PRIMARY KEY,
  value TEXT,
  version INT,
  last_updated TIMESTAMP
);

-- Write to primary node
INSERT INTO cache_data (key, value, version) 
VALUES ('user:123:profile', '{"name": "John"}', 1);

-- Read from replica (may be stale initially)
SELECT value FROM cache_data WHERE key = 'user:123:profile';
-- May return old data until replication completes

-- After some time, all nodes will have consistent data
-- This is "eventual consistency"</code></pre>
    </div>

    <h3>BASE vs ACID Comparison</h3>
    <p>BASE and ACID represent different approaches to data consistency in distributed systems.</p>
    
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>ACID</th>
            <th>BASE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Consistency</strong></td>
            <td>Strong & Immediate</td>
            <td>Eventual Consistency</td>
          </tr>
          <tr>
            <td><strong>Availability</strong></td>
            <td>May sacrifice during partitions</td>
            <td>Always Available</td>
          </tr>
          <tr>
            <td><strong>Partition Tolerance</strong></td>
            <td>May fail during partitions</td>
            <td>Handles partitions gracefully</td>
          </tr>
          <tr>
            <td><strong>Use Cases</strong></td>
            <td>Financial systems, e-commerce</td>
            <td>Social media, analytics, IoT</td>
          </tr>
          <tr>
            <td><strong>Performance</strong></td>
            <td>Slower due to consistency checks</td>
            <td>Faster due to relaxed consistency</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="info-note">
      <strong>Note:</strong> BASE properties are the opposite of ACID properties and are commonly used in distributed systems where availability and partition tolerance are prioritized over strict consistency.
    </div>

  `
}; 