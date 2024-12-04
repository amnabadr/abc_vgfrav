const quotations = [
    "Every time history repeats itself the price goes up. - Anonymous",
    "The moment you think you understand a great work of art, it's dead for you. - Robert Wilson",
    "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve. - Quaid e Azam",
    "Every violation of truth is not only a sort of suicide in the liar, but is a stab at the health of human society. - Ralph Waldo",
    "Man is to be found in reason, God in the passions. - G. C. Lichtenberg",
    "Great innovations should not be forced on slender majorities. - Thomas Jefferson",
    "In this world nothing can be said to be certain, except death and taxes. - Benjamin Franklin",
    "We have no more right to consume happiness without producing it than to consume wealth without producing it. - George Bernard",
    "So little done, so much to do. - Cecil Rhodes",
    "Nine-tenths of wisdom consists in being wise in time. - Theodore Roosevelt"
];

// Function to get a random quotation
function getRandomQuotation() {
    const randomIndex = Math.floor(Math.random() * quotations.length);
    return quotations[randomIndex];
}

// Display the random quotation on page load
document.getElementById('quotation').innerText = getRandomQuotation();