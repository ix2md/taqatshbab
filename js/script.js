document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const cardName = document.getElementById('card-name-placeholder');
    const downloadBtn = document.getElementById('btn-download-img');
    const cardElement = document.getElementById('greeting-card');

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
                quality: 0.95,
                backgroundColor: '#FFFBF2', // Match card bg to avoid transparent edges
                pixelRatio: 2, // Higher resolution
            };

            const dataUrl = await htmlToImage.toPng(cardElement, options);
            
            // Create link and trigger download
            const link = document.createElement('a');
            link.download = `tehnia-ramadan-${new Date().getTime()}.png`;
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
