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
            // Options for html-to-image
            const options = {
                quality: 1.0,
                backgroundColor: '#FFFBF2',
                pixelRatio: 3,
                cacheBust: true,
                useCORS: true, // Allow cross-origin images
                skipFonts: false,
            };
            
            // Wait for images to load
            await new Promise(resolve => setTimeout(resolve, 300));

            const dataUrl = await htmlToImage.toJpeg(cardElement, options);
            
            // Create link and trigger download
            const link = document.createElement('a');
            link.download = `tehnia-ramadan-${new Date().getTime()}.jpg`;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Error generating image:', error);
            alert('حدث خطأ أثناء تحميل الصورة. يرجى المحاولة مرة أخرى.');
        } finally {
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }
    });
});
