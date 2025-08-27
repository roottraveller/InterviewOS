export const pacelcTheorem = {
  id: "pacelc-theorem",
  title: "PACELC Theorem",
  content: `
<p>PACELC is an extension of the CAP theorem.</p>

    <h3>The PACELC Trade-off</h3>
    <p>If there is a partition (<strong>P</strong>), a distributed system can tradeoff between availability (<strong>A</strong>) and consistency (<strong>C</strong>), else (<strong>E</strong>), when the system is running normally in the absence of partitions, the system can tradeoff between latency (<strong>L</strong>) and consistency (<strong>C</strong>).</p>

    <h3>Breaking Down PACELC</h3>
    <ul>
      <li><strong>P</strong> - Partition: Network partition occurs</li>
      <li><strong>A</strong> - Availability: System remains available</li>
      <li><strong>C</strong> - Consistency: Data consistency across nodes</li>
      <li><strong>E</strong> - Else: Normal operation (no partitions)</li>
      <li><strong>L</strong> - Latency: Response time performance</li>
      <li><strong>C</strong> - Consistency: Data consistency during normal operation</li>
    </ul>

    <div class="image-container">
      <img src="/images/PACELC-theorem.jpg" alt="PACELC Theorem Flowchart" class="content-image" />
      <p class="image-caption">
        <em>Source: <a href="https://www.scylladb.com/glossary/pacelc-theorem/" target="_blank" rel="noopener noreferrer">ScyllaDB - PACELC Theorem</a></em>
      </p>
    </div>

    <div class="info-note">
      <strong>Key Insight:</strong> PACELC extends CAP by considering the trade-offs that exist even when the system is operating normally without network partitions.
    </div>

    <h3>PACELC vs CAP Theorem</h3>
    <p>PACELC addresses a key limitation of the CAP theorem: it makes no provision for performance or latency. According to the CAP theorem, a database could be considered "Available" if a query returns a response after 30 days, which would be unacceptable for real-world applications.</p>
    
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

    <div class="reference-links">
      <h4>Further Reading and References</h4>
      <ul>
        <li><a href="https://www.scylladb.com/glossary/pacelc-theorem/" target="_blank">PACELC Theorem - ScyllaDB</a></li>
      </ul>
    </div>
  `
}; 