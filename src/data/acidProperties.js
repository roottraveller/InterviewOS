export const acidProperties = {
  id: "acid-properties",
  title: "ACID Properties",
  content: `
    <p>ACID properties are a set of guarantees for database transactions to ensure data validity despite errors, power failures, and other mishaps. They are typically associated with traditional relational databases and emphasize strong consistency.</p>

    <h3>Atomicity</h3>
    <p>Atomicity ensures that a transaction either succeeds completely or fails completely. If any part of a transaction fails, the entire transaction is rolled back, and the database is left unchanged.</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>Bank Transfer Transaction</span>
      </div>
      <pre><code>-- Example: Bank Transfer Transaction
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 100 WHERE id = 'A';
  UPDATE accounts SET balance = balance + 100 WHERE id = 'B';
COMMIT;

-- If any step fails, entire transaction is rolled back
-- Database remains in original state</code></pre>
    </div>

    <h3>Consistency</h3>
    <p>Consistency ensures that the database remains in a valid state before and after the execution of a transaction. It ensures any transaction will bring the database from one valid state to another, and prevents the database from entering an invalid state.</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>Consistency Check</span>
      </div>
      <pre><code>-- Example: Consistency Check
-- Constraint: Total balance must remain constant
CREATE TABLE accounts (
  id VARCHAR(10) PRIMARY KEY,
  balance DECIMAL(10,2) CHECK (balance >= 0)
);

-- Transaction maintains consistency
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 50 WHERE id = 'A';
  UPDATE accounts SET balance = balance + 50 WHERE id = 'B';
  -- If total balance changes, transaction fails
COMMIT;</code></pre>
    </div>

    <h3>Isolation</h3>
    <p>Isolation ensures that the execution of multiple transactions concurrently does not interfere with each other.</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>Transaction Isolation</span>
      </div>
      <pre><code>-- Example: Transaction Isolation
-- Transaction 1: Reading balance
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
  SELECT balance FROM accounts WHERE id = 'A';
  -- Sees consistent state, not affected by Transaction 2
COMMIT;

-- Transaction 2: Updating balance (concurrent)
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance + 100 WHERE id = 'A';
COMMIT;</code></pre>
    </div>

    <h3>Durability</h3>
    <p>Durability ensures that once a transaction is committed, it's permanently stored in the database and should not be lost even in the event of system failures (e.g., power outage, or hardware failure).</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>Durability Guarantee</span>
      </div>
      <pre><code>-- Example: Transaction with durability guarantee
BEGIN TRANSACTION;
  UPDATE accounts SET balance = balance - 200 WHERE id = 'A';
  -- Changes written to disk before commit
  COMMIT;
  -- Even if system crashes now, changes are permanent

-- After system restart, balance change persists
SELECT balance FROM accounts WHERE id = 'A';</code></pre>
    </div>

    <h3>ACID vs. BASE Comparison</h3>
    <p>While ACID is common in relational databases, many NoSQL databases follow the BASE philosophy, which prioritizes availability over strict consistency.</p>
    
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
            <td><strong>Stands for</strong></td>
            <td>Atomicity, Consistency, Isolation, Durability</td>
            <td>Basically Available, Soft state, Eventually consistent</td>
          </tr>
          <tr>
            <td><strong>Consistency</strong></td>
            <td>Strong & Immediate</td>
            <td>Eventual Consistency</td>
          </tr>
          <tr>
            <td><strong>Availability</strong></td>
            <td>May sacrifice availability during partitions</td>
            <td>Prioritizes availability</td>
          </tr>
          <tr>
            <td><strong>Model</strong></td>
            <td>Pessimistic (prevents conflicts)</td>
            <td>Optimistic (resolves conflicts later)</td>
          </tr>
          <tr>
            <td><strong>Use Cases</strong></td>
            <td>Financial systems, e-commerce, OLTP</td>
            <td>Social media, analytics, IoT, where availability is key</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>C in ACID vs C in CAP</h3>
    <p>While both ACID and CAP use "C" for Consistency, they refer to fundamentally different concepts that are often confused. <a href="https://stackoverflow.com/questions/4813282/why-is-c-in-cap-theorem-not-same-as-c-in-acid/4813479#4813479" target="_blank">Learn more about the differences here</a>.</p>

    <div class="reference-links">
      <h4>Further Reading and References</h4>
      <ul>
        <li><a href="https://www.educative.io/answers/what-are-acid-properties-in-a-database" target="_blank">What are ACID Properties in a Database</a></li>
        <li><a href="https://www.scaler.com/topics/dbms/acid-properties-in-dbms/" target="_blank">ACID Properties in DBMS</a></li>
        <li><a href="https://stackoverflow.com/questions/4813282/why-is-c-in-cap-theorem-not-same-as-c-in-acid/4813479#4813479" target="_blank">C in ACID vs C in CAP - Stack Overflow</a></li>
      </ul>
    </div>
  `
}; 