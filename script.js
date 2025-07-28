// Elementler
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const startButton = document.getElementById("start-btn");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const coinsElement = document.getElementById("coins");
const livesElement = document.getElementById("lives");

let currentQuestionIndex = 0;
let score = 0;
let coins = 0;
let lives = 3;

const messageElement = document.createElement("p");
messageElement.style.fontWeight = "bold";
messageElement.style.marginTop = "10px";
answersElement.after(messageElement);

// Market butonu (can alma)
const marketButton = document.createElement("button");
marketButton.id = "market-btn";
marketButton.innerHTML = "🛒 Market";
quizContainer.appendChild(marketButton);

marketButton.addEventListener("click", () => {
  if (coins >= 15) {
    coins -= 15;
    lives++;
    updateScore();
    alert("+1 can aldınız!");
  } else {
    alert("Yetersiz jeton!");
  }
});

// Oyuna başla butonu
startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizContainer.style.display = "block";

  // Soruları karıştırıp 15 soru seç
  questions = shuffleQuestions(questionPool);
  currentQuestionIndex = 0;
  score = 0;
  coins = 0;
  lives = 3;
  nextButton.disabled = false;

  showQuestion();
  updateScore();
});

// Skor, jeton, can güncelleme fonksiyonu
function updateScore() {
  scoreElement.textContent = `Skor: ${score}`;
  coinsElement.textContent = `🪙 Jeton: ${coins}`;
  livesElement.textContent = `❤️ Can: ${lives}`;
}

function showQuestion() {
  resetState();
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.style.fontWeight = "bold";
    button.style.fontSize = "16px";
    button.addEventListener("click", () => selectAnswer(answer, button));
    answersElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answersElement.innerHTML = "";
  messageElement.textContent = "";
}

function selectAnswer(selectedAnswer, selectedButton) {
  const correct = questions[currentQuestionIndex].correct;
  const buttons = Array.from(answersElement.children);

  buttons.forEach((button) => {
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
    coins += 5;
    messageElement.textContent = "Doğru!";
    messageElement.style.color = "#4CAF50";
  } else {
    score -= 5;
    lives -= 1;
    messageElement.textContent = "Yanlış!";
    messageElement.style.color = "#f44336";
  }

  updateScore();

  if (lives <= 0) {
    alert("Oyun bitti! Canınız kalmadı.");
    nextButton.disabled = true;
    return;
  }

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert(`Quiz bitti! Toplam skor: ${score}`);
    nextButton.disabled = true;
  }
});

// Soruları karıştır ve ilk 15 soruyu seç
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, 15);
}

// 200 soruluk soru havuzu (Örnek 5 soru, tam 200 soru eklemelisin)
const questionPool = [
  { question: "İstanbul'un fethinden sonra ilk Osmanlı padişahı kimdir?", answers: ["II. Mehmed", "I. Murad", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman"], correct: "II. Mehmed" },
  { question: "FIFA Dünya Kupası'nı en çok kazanan ülke hangisidir?", answers: ["Almanya", "Arjantin", "İtalya", "Brezilya"], correct: "Brezilya" },
  { question: "Ekvator hangi iki yarım küreyi ayırır?", answers: ["Doğu-Batı", "Kuzey-Güney", "Doğu-Kuzey", "Batı-Güney"], correct: "Kuzey-Güney" },
  { question: "Fransa İhtilali hangi yılda gerçekleşmiştir?", answers: ["1789", "1812", "1765", "1804"], correct: "1789" },
  { question: "2022 FIFA Dünya Kupası finalinde Arjantin'in rakibi kimdi?", answers: ["Fransa", "İngiltere", "Hollanda", "Portekiz"], correct: "Fransa" },
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
