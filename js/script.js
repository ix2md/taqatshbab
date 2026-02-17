document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const cardName = document.getElementById('card-name-placeholder');
    const downloadBtn = document.getElementById('btn-download-img');
    const cardElement = document.getElementById('greeting-card');
    const currentYearSpan = document.getElementById('current-year');

    // Set Dynamic Year
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Update Name Live
    nameInput.addEventListener('input', (e) => {
        const text = e.target.value.trim();
        if (text) {
            cardName.textContent = text;
        } else {
            cardName.textContent = 'الاسم هنا';
        }
    });

    // Download Functionality
    downloadBtn.addEventListener('click', async () => {
        const originalText = downloadBtn.textContent;
        downloadBtn.textContent = 'جاري التحميل...';
        downloadBtn.disabled = true;

        try {
            // Use html2canvas to capture the card
            const canvas = await html2canvas(cardElement, {
                scale: 3, // High quality
                useCORS: true, // Allow cross-origin images
                allowTaint: true, // Allow local file images (for dev mode)
                backgroundColor: '#FFFBF2',
                logging: false,
                imageTimeout: 0,
            });
            
            // Convert canvas to blob and download
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.download = `tehnia-ramadan-${new Date().getTime()}.jpg`;
                link.href = url;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                
                // Reset button
                downloadBtn.textContent = originalText;
                downloadBtn.disabled = false;
            }, 'image/jpeg', 0.95);

        } catch (error) {
            console.error('Error generating image:', error);
            alert('حدث خطأ أثناء تحميل الصورة. يرجى المحاولة مرة أخرى.');
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }
    });
});
