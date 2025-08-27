import React, { useEffect, useRef, useState } from 'react';
import './ContentPanel.css';

const ContentPanel = ({ content, children }) => {
  const contentRef = useRef(null);
  const [copiedId, setCopiedId] = useState(null);

  // Handle both content prop and children
  const hasContent = content && (content.title || content.content);
  const hasChildren = children;

  const copyToClipboard = async (text, buttonId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(buttonId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedId(buttonId);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy failed: ', fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  useEffect(() => {
    if (!contentRef.current) return;

    // Handle copy buttons for new code block structure
    const copyButtons = contentRef.current.querySelectorAll('.copy-btn');
    
    copyButtons.forEach((button, index) => {
      const buttonId = `copy-btn-${index}`;
      
      // Skip if already has click handler
      if (button.hasAttribute('data-handler-attached')) return;
      
      button.setAttribute('data-handler-attached', 'true');
      
      button.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Find the code element within the same code-block
        const codeBlock = button.closest('.code-block');
        const codeElement = codeBlock ? codeBlock.querySelector('code') : null;
        const codeText = codeElement ? codeElement.textContent : '';
        
        copyToClipboard(codeText, buttonId);
        
        // Update button text temporarily
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copied');
        }, 2000);
      };
    });

    // Handle legacy pre elements without code-block wrapper
    const preElements = contentRef.current.querySelectorAll('pre:not(.has-copy-btn)');
    
    preElements.forEach((preElement, index) => {
      const codeElement = preElement.querySelector('code');
      const codeText = codeElement ? codeElement.textContent : preElement.textContent;
      
      // Create copy button
      const copyButton = document.createElement('button');
      const buttonId = `copy-btn-legacy-${index}`;
      copyButton.className = 'copy-btn';
      copyButton.setAttribute('title', 'Copy code');
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      copyButton.textContent = 'Copy';
      
      copyButton.onclick = (e) => {
        e.preventDefault();
        copyToClipboard(codeText, buttonId);
        
        // Update button text temporarily
        copyButton.textContent = 'Copied!';
        copyButton.classList.add('copied');
        
        setTimeout(() => {
          copyButton.textContent = 'Copy';
          copyButton.classList.remove('copied');
        }, 2000);
      };

      // Position the button
      preElement.style.position = 'relative';
      preElement.classList.add('has-copy-btn');
      preElement.appendChild(copyButton);
    });
  }, [content, children, copiedId]);

  // Early return if neither content nor children are available (after hooks)
  if (!hasContent && !hasChildren) {
    return (
      <div className="content-panel">
        <div className="content-wrapper">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-panel">
      <div className="content-wrapper" ref={contentRef}>
        {hasChildren ? (
          // Render children (for Home route)
          children
        ) : (
          // Render content prop (for Topic routes)
          <>
            {content.title && <h1>{content.title}</h1>}
            {content.content && (
              <div 
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContentPanel; 