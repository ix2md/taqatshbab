document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const cardName = document.getElementById('card-name-placeholder');
    const downloadBtn = document.getElementById('btn-download-img');
    const cardElement = document.getElementById('greeting-card');
    const currentYearSpan = document.getElementById('current-year');
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');
    const imageLoader = document.getElementById('imageLoader');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = 'img/3.jpeg';
    function draw() {
    // ضبط حجم الكانفاس ليكون بنفس حجم الصورة الأصلي
    canvas.width = img.width;
    canvas.height = img.height;

    // رسم الصورة أولاً
    ctx.drawImage(img, 0, 0);

    // إضافة النص فوقها
    const text = nameInput.value.trim() || "الاسم هنا";
    ctx.font = "bold 65px Amiri, serif"; // اختر الخط المناسب
    ctx.fillStyle = "#2c3e50"; 
    ctx.textAlign = "center";
    
    // إحداثيات النص (المنتصف أفقياً، وقبل النهاية بـ 100 بكسل عمودياً)
    ctx.fillText(text, canvas.width / 2, canvas.height - 195);
}

// تشغيل الرسم بعد تحميل الصورة والخط معاً
img.onload = () => {
    document.fonts.ready.then(() => {
        draw();
    });
};

// 3. تحديث الرسم فورياً أثناء الكتابة

    nameInput.addEventListener('input', (e) => {
        draw();
        const text = e.target.value.trim();
        if (text) {
            cardName.textContent = text;
        } else {
            cardName.textContent = 'الاسم هنا';
        }
    });

// 4. وظيفة التنزيل
downloadBtn.addEventListener('click', () => {
    try {
        const link = document.createElement('a');
        link.download = 'greeting-card.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('خطأ في التحميل:', error);
        alert('حدث خطأ أثناء تحميل الصورة. جرّب فتح الصفحة من سيرفر محلي.');
    }
});



    // Set Dynamic Year
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Update Name Live
    // nameInput.addEventListener('input', (e) => {
    //     const text = e.target.value.trim();
    //     if (text) {
    //         cardName.textContent = text;
    //     } else {
    //         cardName.textContent = 'الاسم هنا';
    //     }
    // });

    // Download Functionality
    // downloadBtn.addEventListener('click', async () => {
    //     const originalText = downloadBtn.textContent;
    //     downloadBtn.textContent = 'جاري التحميل...';
    //     downloadBtn.disabled = true;

    //     try {
    //         // Use html2canvas to capture the card
    //         const canvas = await html2canvas(cardElement, {
    //             scale: 3, // High quality
    //             useCORS: true, // Allow cross-origin images
    //             allowTaint: false,
    //             backgroundColor: '#FFFBF2',
    //             logging: false,
    //             imageTimeout: 0,
    //         });
            
    //         // Convert canvas to blob and download
    //         canvas.toBlob((blob) => {
    //             const url = URL.createObjectURL(blob);
    //             const link = document.createElement('a');
    //             link.download = `tehnia-ramadan-${new Date().getTime()}.jpg`;
    //             link.href = url;
    //             document.body.appendChild(link);
    //             link.click();
    //             document.body.removeChild(link);
    //             URL.revokeObjectURL(url);
                
    //             // Reset button
    //             downloadBtn.textContent = originalText;
    //             downloadBtn.disabled = false;
    //         }, 'image/jpeg', 0.95);

    //     } catch (error) {
    //         console.error('Error generating image:', error);
    //         alert('حدث خطأ أثناء تحميل الصورة. يرجى المحاولة مرة أخرى.');
    //         downloadBtn.textContent = originalText;
    //         downloadBtn.disabled = false;
    //     }
    // });
});
