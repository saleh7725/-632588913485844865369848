// قائمة القيم العشوائية للنقود السعودية (بدون كتابة كلمة "ريال")
const moneyGifts = [5, 10, 20, 50, 100, 200];  // القيم بالـ ريال السعودي

// دالة لاختيار هدية عشوائية
function openEnvelope() {
    const randomAmount = moneyGifts[Math.floor(Math.random() * moneyGifts.length)];
    displayGift(randomAmount);
}

// دالة لعرض الجائزة في نافذة منبثقة
function displayGift(amount) {
    const giftDisplay = document.getElementById("giftDisplay");
    giftDisplay.innerHTML = `لقد فزت بـ ${amount}`;
    
    // إظهار النافذة المنبثقة
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

// دالة لإغلاق النافذة المنبثقة
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
