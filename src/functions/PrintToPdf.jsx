import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function PrintToPdf() {
    const [isLoader, setIsLoader] = useState(false);

    const handleDownload = () => {
        const capturePage = document.querySelector("#printMe");
        if (!capturePage) {
            console.error("Element with id 'printMe' not found.");
            return;
        }
        setIsLoader(true);
    
        html2canvas(capturePage, {
            backgroundColor: null,
            scale: 2, // Increase the scale for better resolution
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("p", "mm", "a4");
    
                const pageHeight = pdf.internal.pageSize.getHeight();
                const pageWidth = pdf.internal.pageSize.getWidth();
    
                const imgWidth = pageWidth - 2 * 10;
                const imgHeight = (imgWidth * canvas.height) / canvas.width;
                const imgX = (pageWidth - imgWidth) / 2;
                const imgY = (pageHeight - imgHeight) / 2;
                pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);
    
                // Add borders around the content
                pdf.setDrawColor(0); // Set border color to black
                pdf.rect(imgX - 5, imgY - 5, imgWidth + 10, imgHeight + 10); // Draw border
    
                pdf.save("page.pdf");
                setIsLoader(false);
            })
            .catch((error) => {
                console.error("Error capturing page:", error);
                setIsLoader(false);
            });
    };  
    // Call handleDownload when the component is used
    return handleDownload;
}