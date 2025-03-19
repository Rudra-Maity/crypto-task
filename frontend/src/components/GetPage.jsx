import React, { useEffect, useState } from "react";

const PageRenderer = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Load the extracted HTML file dynamically
    fetch(import.meta.env.VITE_API+'/') // Ensure this file is accessible from the public folder
      .then(response => response.text())
      .then(data => {
        console.log(data);
        
        setHtmlContent(data)})
      .catch(error => console.error("Error loading HTML:", error));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default PageRenderer;
