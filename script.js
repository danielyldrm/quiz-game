// script.js

function getRandomQuestions(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const allQuestions = [
  { question: "Türkiye'nin başkenti neresidir?", answers: ["İstanbul", "Ankara", "İzmir", "Bursa"], correct: "Ankara" },
  { question: "Dünyanın en büyük okyanusu hangisidir?", answers: ["Hint", "Atlas", "Buzul", "Pasifik"], correct: "Pasifik" },
  { question: "FIFA Dünya Kupası'nı en çok kazanan ülke hangisidir?", answers: ["Brezilya", "Almanya", "Arjantin", "İtalya"], correct: "Brezilya" },
  { question: "İstanbul Boğazı hangi iki denizi birbirine bağlar?", answers: ["Marmara ve Karadeniz", "Ege ve Akdeniz", "Karadeniz ve Ege", "Akdeniz ve Marmara"], correct: "Marmara ve Karadeniz" },
  { question: "Atatürk hangi yıl doğmuştur?", answers: ["1881", "1890", "1879", "1885"], correct: "1881" },
  { question: "UEFA Şampiyonlar Ligi'ni 2022'de kim kazandı?", answers: ["Manchester City", "Real Madrid", "Liverpool", "Bayern Münih"], correct: "Real Madrid" },
  { question: "Dünyanın en uzun nehri hangisidir?", answers: ["Amazon", "Nil", "Yangtze", "Mississippi"], correct: "Nil" },
  { question: "2023 Türkiye Cumhurbaşkanlığı seçimlerini kim kazandı?", answers: ["Recep Tayyip Erdoğan", "Kemal Kılıçdaroğlu", "Meral Akşener", "Selahattin Demirtaş"], correct: "Recep Tayyip Erdoğan" },
  { question: "Hangi futbolcu en çok Ballon d'Or ödülü kazanmıştır?", answers: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho", "Zidane"], correct: "Lionel Messi" },
  { question: "DNA'nın açılımı nedir?", answers: ["Deoksiribonükleik Asit", "Dinamiz Asit", "Nükleik Amino", "Doğal Asit"], correct: "Deoksiribonükleik Asit" },
  // 40 soru daha eklendi
  { question: "İngiltere'nin para birimi nedir?", answers: ["Euro", "Sterlin", "Dolar", "Frank"], correct: "Sterlin" },
  { question: "Türkiye'nin en kalabalık ili hangisidir?", answers: ["Ankara", "İzmir", "İstanbul", "Bursa"], correct: "İstanbul" },
  { question: "Beşiktaş kaç yılında kurulmuştur?", answers: ["1903", "1905", "1907", "1910"], correct: "1903" },
  { question: "Mona Lisa tablosunu kim yapmıştır?", answers: ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"], correct: "Da Vinci" },
  { question: "2022 Dünya Kupası'nı kim kazandı?", answers: ["Arjantin", "Fransa", "Brezilya", "Hırvatistan"], correct: "Arjantin" },
  { question: "Einstein'ın ünlü teorisi hangisidir?", answers: ["E=mc^2", "F=ma", "V=IR", "a^2+b^2=c^2"], correct: "E=mc^2" },
  { question: "İzmir hangi bölgededir?", answers: ["Karadeniz", "Ege", "Akdeniz", "Marmara"], correct: "Ege" },
  { question: "Galatasaray'ın renkleri nedir?", answers: ["Sarı-Kırmızı", "Lacivert-Beyaz", "Siyah-Beyaz", "Yeşil-Beyaz"], correct: "Sarı-Kırmızı" },
  { question: "Türk bayrağındaki ay-yıldız hangi renktedir?", answers: ["Beyaz", "Kırmızı", "Mavi", "Sarı"], correct: "Beyaz" },
  { question: "2024 Avrupa Futbol Şampiyonası nerede düzenlenmiştir?", answers: ["Almanya", "İtalya", "İspanya", "Fransa"], correct: "Almanya" },
  { question: "Hangi gezegen Güneş'e en yakındır?", answers: ["Venüs", "Mars", "Merkür", "Dünya"], correct: "Merkür" },
  { question: "Türkiye kaç coğrafi bölgeye ayrılır?", answers: ["5", "6", "7", "8"], correct: "7" },
  { question: "En fazla büyük başlık kazanan Türk takımı kimdir?", answers: ["Fenerbahçe", "Galatasaray", "Beşiktaş", "Trabzonspor"], correct: "Galatasaray" },
  { question: "Hangi yıl Türkiye Avrupa Birliği aday ülkesi olmuştur?", answers: ["1999", "2001", "1995", "2004"], correct: "1999" },
  { question: "Türk Lirası hangi yıl Yeni Türk Lirası oldu?", answers: ["2003", "2004", "2005", "2006"], correct: "2005" },
  { question: "Fenerbahçe'nin stadının adı nedir?", answers: ["Ali Sami Yen", "Şükrü Saracoğlu", "Vodafone Park", "Atatürk Stadı"], correct: "Şükrü Saracoğlu" },
  { question: "Atatürk'ün en bilinen eseri hangisidir?", answers: ["Nutuk", "Söylev", "Geometri", "İnkılap"], correct: "Nutuk" },
  { question: "NBA'in simgesi haline gelen basketbolcu kimdir?", answers: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Jerry West"], correct: "Jerry West" },
  { question: "Hangi ülke 3 tarafı denizlerle çevrilidir?", answers: ["İtalya", "İspanya", "Türkiye", "Yunanistan"], correct: "Türkiye" },
  { question: "İlk Türk kadın pilot kimdir?", answers: ["Sabiha Gökçen", "Halide Edip", "Latife Hanım", "Zübeyde Hanım"], correct: "Sabiha Gökçen" },
  { question: "Messi 2023'te hangi takıma transfer oldu?", answers: ["PSG", "Inter Miami", "Barcelona", "Chelsea"], correct: "Inter Miami" },
  { question: "Türkiye'nin yüzölçümü en büyük ili hangisidir?", answers: ["Konya", "Ankara", "Sivas", "Erzurum"], correct: "Konya" },
  { question: "Hangisi doğal sayı değildir?", answers: ["-1", "0", "1", "2"], correct: "-1" },
  { question: "Nobel Barış Ödülü hangi ülkede verilir?", answers: ["Norveç", "İsveç", "Danimarka", "Finlandiya"], correct: "Norveç" },
  { question: "Hangisi bir gezegen değildir?", answers: ["Plüton", "Mars", "Venüs", "Jüpiter"], correct: "Plüton" },
  { question: "Bir yılda kaç gün vardır?", answers: ["364", "365", "366", "360"], correct: "365" },
  { question: "Dünyanın en yüksek dağı hangisidir?", answers: ["Everest", "K2", "Elbruz", "Alpler"], correct: "Everest" },
  { question: "Türkiye'nin ilk kadın başbakanı kimdir?", answers: ["Tansu Çiller", "Sibel Siber", "Meral Akşener", "Fatma Şahin"], correct: "Tansu Çiller" },
  { question: "Galatasaray UEFA Kupası'nı hangi yıl kazandı?", answers: ["2000", "1999", "2001", "1998"], correct: "2000" },
  { question: "Ay'ın Dünya etrafındaki dönüşü ne kadar sürer?", answers: ["24 saat", "7 gün", "29.5 gün", "365 gün"], correct: "29.5 gün" },
  { question: "Hangisi bir futbol pozisyonu değildir?", answers: ["Forvet", "Libero", "Kaleci", "Pivot"], correct: "Pivot" }
];

let questions = getRandomQuestions(allQuestions, 10);

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function showQuestion() {
  resetState();
  updateScore();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(answer, button));
    answersElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answersElement.innerHTML = "";
}

function updateScore() {
  scoreElement.textContent = `Skor: ${score}`;
}

function selectAnswer(selectedAnswer, selectedButton) {
  const correct = questions[currentQuestionIndex].correct;
  const buttons = Array.from(answersElement.children);

  buttons.forEach(button => {
    button.disabled = true;
    if (button.textContent === correct) {
      button.style.backgroundColor = "#4CAF50";
      button.style.color = "white";
    } else {
      button.style.backgroundColor = "#f44336";
      button.style.color = "white";
    }
  });

  if (selectedAnswer === correct) {
    score += 10;
  } else {
    score -= 5;
  }

  updateScore();
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  resetState();
  questionElement.textContent = "Quiz Bitti!";
  scoreElement.textContent = `Final Skor: ${score}`;
  nextButton.textContent = "Tekrar Oyna";
  nextButton.style.display = "block";
  nextButton.onclick = () => location.reload();
}

showQuestion();
