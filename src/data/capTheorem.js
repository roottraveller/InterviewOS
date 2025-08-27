export const capTheorem = {
  id: "cap-theorem",
  title: "CAP Theorem",
  content: `
    <p>CAP theorem highlights the trade-offs in distributed systems.</p>

    <h3>Consistency</h3>
    <p>Consistency means all clients see the same data at the same time no matter which node they connect to.</p>

    <h3>Availability</h3>
    <p>Availability means any client which requests data gets a response even if some of the nodes are down.</p>

    <h3>Partition Tolerance</h3>
    <p>A partition indicates a communication break between two nodes. Partition tolerance means the system continues to operate despite network partitions.</p>

    <div class="info-note">
      <strong>Key Insight:</strong> According to CAP theorem, a distributed system can only guarantee two of the three properties at any given time.
    </div>

    <div class="image-container">
      <img src="/images/cap_theorem.jpg" alt="CAP Theorem Diagram - Pick Two" class="content-image" />
      <p class="image-caption">
        <em>Source: <a href="https://www.nitendratech.com/database/cap-theorem/" target="_blank" rel="noopener noreferrer">NitendraTech - What is the CAP Theorem?</a></em>
      </p>
    </div>

    <h3>CAP vs PACELC Theorem</h3>
    <p>While CAP theorem provides a fundamental framework for understanding distributed systems, PACELC extends it by addressing performance considerations that CAP doesn't account for.</p>
    
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>CAP Theorem</th>
            <th>PACELC Theorem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Scope</strong></td>
            <td>Only considers partition scenarios</td>
            <td>Considers both partition and normal operation</td>
          </tr>
          <tr>
            <td><strong>Performance</strong></td>
            <td>No consideration of latency</td>
            <td>Explicitly includes latency trade-offs</td>
          </tr>
          <tr>
            <td><strong>Database Classification</strong></td>
            <td>AP, CP, CA systems</td>
            <td>PA/EL, PC/EC, PA/EC, PC/EL systems</td>
          </tr>
          <tr>
            <td><strong>Real-world Applicability</strong></td>
            <td>Simplified model</td>
            <td>More nuanced framework</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>C in CAP vs C in ACID</h3>
    <p>While both CAP and ACID use "C" for Consistency, they refer to fundamentally different concepts that are often confused. <a href="https://stackoverflow.com/questions/4813282/why-is-c-in-cap-theorem-not-same-as-c-in-acid/4813479#4813479" target="_blank">Learn more about the differences here</a>.</p>

    <div class="reference-links">
      <h4>Further Reading and References</h4>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=BlkAOdFjGa8&list=PLGo1-Ya-AEQDFaT8RFh-lTQrh7RJCs4Ly&index=9" target="_blank">CAP Theorem Explained (Video)</a></li>
        <li><a href="https://www.scaler.com/topics/cap-theorem-mongodb/" target="_blank">CAP Theorem MongoDB</a></li>
        <li><a href="https://www.scylladb.com/glossary/pacelc-theorem/" target="_blank">PACELC Theorem - ScyllaDB</a></li>
        <li><a href="https://stackoverflow.com/questions/4813282/why-is-c-in-cap-theorem-not-same-as-c-in-acid/4813479#4813479" target="_blank">C in ACID vs C in CAP - Stack Overflow</a></li>
      </ul>
    </div>
  `
}; 