function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

  const lines1 = ["Hi, I am\nKadavakollu Anil Kumar"];
let index1 = 0, charIndex1 = 0;
const typingSpeed1 = 100;
const el1 = document.getElementById("typing1");

function typeLine1(callback) {
  if (charIndex1 < lines1[index1].length) {
    el1.textContent += lines1[index1].charAt(charIndex1);
    charIndex1++;
    setTimeout(() => typeLine1(callback), typingSpeed1);
  } else {
    if (callback) callback(); // call second line when done
  }
}

// Second line (loops through roles)
const lines2 = [
  "Computer Science Student • Java Developer",

];
let index2 = 0, charIndex2 = 0;
const typingSpeed2 = 100, delayBetween2 = 2000;
const el2 = document.getElementById("typing2");

function typeLine2() {
  if (charIndex2 < lines2[index2].length) {
    el2.textContent += lines2[index2].charAt(charIndex2);
    charIndex2++;
    setTimeout(typeLine2, typingSpeed2);

}
}
// Start animations
document.addEventListener("DOMContentLoaded", () => {
  typeLine1(typeLine2); // start second only after first finishes
});
