const welcomeScreen = document.querySelector("#welcomeScreen");
const desktop = document.querySelector("#desktop");

const enterDesktopButton = document.querySelector("#enterDesktopButton");
const welcomeWindow = document.querySelector("#welcomeWindow");
const welcomeClose = document.querySelector("#welcomeClose");
const welcomeOpen = document.querySelector("#welcomeOpen");

const timeElement = document.querySelector("#timeElement");

const journalWindow = document.querySelector("#journalWindow");
const journalOpen = document.querySelector("#journalOpen");
const journalClose = document.querySelector("#journalClose");

const weatherWindow =
  document.querySelector("#weatherWindow");

const weatherOpen =
  document.querySelector("#weatherOpen");

const weatherClose =
  document.querySelector("#weatherClose");

const weatherRefresh =
  document.querySelector("#weatherRefresh");

const weatherLocation =
  document.querySelector("#weatherLocation");

const weatherIcon =
  document.querySelector("#weatherIcon");

const weatherTemperature =
  document.querySelector("#weatherTemperature");

const weatherDescription =
  document.querySelector("#weatherDescription");

const weatherFeelsLike =
  document.querySelector("#weatherFeelsLike");

const weatherHumidity =
  document.querySelector("#weatherHumidity");

const weatherWind =
  document.querySelector("#weatherWind");

const weatherUpdated =
  document.querySelector("#weatherUpdated");

const settingsWindow =
  document.querySelector("#settingsWindow");

const settingsOpen =
  document.querySelector("#settingsOpen");

const settingsClose =
  document.querySelector("#settingsClose");

const wallpaperButtons =
  document.querySelectorAll(".wallpaper-button");

const bootProgress =
    document.querySelector("#bootProgress");

const bootPercent =
    document.querySelector("#bootPercent");

const bootStatus =
    document.querySelector("#bootStatus");

const weatherDate =
  document.querySelector("#weatherDate");

const weatherSunrise =
  document.querySelector("#weatherSunrise");

const weatherSunset =
  document.querySelector("#weatherSunset");

const hourlyForecast =
  document.querySelector("#hourlyForecast");

const languageButtons =
  document.querySelectorAll(".language-button");

const translations = {
  en: {
    bootInitializing: "Initializing AuroraOS...",
    enterDesktop: "Enter Desktop",
    loadingTime: "Loading time...",
    welcomeUser: "Welcome, User",

    journal: "Aurora Journal",
    settings: "Settings",
    weather: "Weather",

    welcomeWindowTitle: "✦ Aurora Welcome",
    helloUser: "Hello, User.",
    welcomeDesktop: "Welcome to your AuroraOS desktop.",
    dragInstruction: "Drag the top bar to move this window.",
    selectApplication: "Select an application to get started.",

    settingsTitle: "⚙️ Settings",
    wallpaper: "Wallpaper",
    auroraBlue: "🌌 Aurora Blue",
    auroraPurple: "💜 Aurora Purple",
    midnight: "🌙 Midnight",
    sunset: "🌅 Sunset",
    language: "Language",

    journalTitle: "📖 Aurora Journal",
    welcome: "Welcome",
    myGoals: "My Goals",
    favoriteThings: "Favorite Things",
    july2026: "July 2026",
    journalWelcomeTitle: "Welcome, User.",
    journalIntro:
      "This is Aurora Journal, a quiet space for your thoughts, ideas, and memories.",
    journalQuote:
      "Small ideas can become bright possibilities.",
    journalInstruction:
      "Select an entry from the left side to read more.",

    weatherTitle: "🌤️ Weather",
    currentLocation: "Current location",
    findingLocation: "Finding your location...",
    loadingDate: "Loading date...",
    loadingWeather: "Loading current weather...",
    feelsLike: "Feels like",
    humidity: "Humidity",
    wind: "Wind",
    sunrise: "🌅 Sunrise",
    sunsetTime: "🌇 Sunset",
    nextFiveHours: "Next 5 Hours",
    loadingForecast: "Loading forecast...",
    refreshWeather: "Refresh weather"
  },

  ko: {
    bootInitializing: "AuroraOS를 시작하는 중...",
    enterDesktop: "데스크톱으로 들어가기",
    loadingTime: "시간 불러오는 중...",
    welcomeUser: "환영합니다, User",

    journal: "Aurora 일기장",
    settings: "설정",
    weather: "날씨",

    welcomeWindowTitle: "✦ Aurora 환영",
    helloUser: "안녕하세요, User.",
    welcomeDesktop: "AuroraOS 데스크톱에 오신 것을 환영합니다.",
    dragInstruction: "상단 바를 드래그해 창을 이동하세요.",
    selectApplication: "시작할 앱을 선택하세요.",

    settingsTitle: "⚙️ 설정",
    wallpaper: "배경화면",
    auroraBlue: "🌌 오로라 블루",
    auroraPurple: "💜 오로라 퍼플",
    midnight: "🌙 미드나이트",
    sunset: "🌅 선셋",
    language: "언어",

    journalTitle: "📖 Aurora 일기장",
    welcome: "환영",
    myGoals: "나의 목표",
    favoriteThings: "좋아하는 것",
    july2026: "2026년 7월",
    journalWelcomeTitle: "환영합니다, User.",
    journalIntro:
      "Aurora 일기장은 생각과 아이디어, 추억을 기록하는 조용한 공간입니다.",
    journalQuote:
      "작은 아이디어가 밝은 가능성이 될 수 있습니다.",
    journalInstruction:
      "왼쪽 항목을 선택해 더 읽어보세요.",

    weatherTitle: "🌤️ 날씨",
    currentLocation: "현재 위치",
    findingLocation: "현재 위치를 찾는 중...",
    loadingDate: "날짜 불러오는 중...",
    loadingWeather: "현재 날씨 불러오는 중...",
    feelsLike: "체감 온도",
    humidity: "습도",
    wind: "바람",
    sunrise: "🌅 일출",
    sunsetTime: "🌇 일몰",
    nextFiveHours: "앞으로 5시간",
    loadingForecast: "예보 불러오는 중...",
    refreshWeather: "날씨 새로고침"
  },

  es: {
    bootInitializing: "Iniciando AuroraOS...",
    enterDesktop: "Entrar al escritorio",
    loadingTime: "Cargando hora...",
    welcomeUser: "Bienvenido, User",

    journal: "Diario Aurora",
    settings: "Configuración",
    weather: "Clima",

    welcomeWindowTitle: "✦ Bienvenida de Aurora",
    helloUser: "Hola, User.",
    welcomeDesktop: "Bienvenido al escritorio de AuroraOS.",
    dragInstruction: "Arrastra la barra superior para mover esta ventana.",
    selectApplication: "Selecciona una aplicación para comenzar.",

    settingsTitle: "⚙️ Configuración",
    wallpaper: "Fondo de pantalla",
    auroraBlue: "🌌 Aurora Azul",
    auroraPurple: "💜 Aurora Morado",
    midnight: "🌙 Medianoche",
    sunset: "🌅 Atardecer",
    language: "Idioma",

    journalTitle: "📖 Diario Aurora",
    welcome: "Bienvenida",
    myGoals: "Mis metas",
    favoriteThings: "Cosas favoritas",
    july2026: "Julio de 2026",
    journalWelcomeTitle: "Bienvenido, User.",
    journalIntro:
      "Aurora Journal es un espacio tranquilo para tus pensamientos, ideas y recuerdos.",
    journalQuote:
      "Las pequeñas ideas pueden convertirse en posibilidades brillantes.",
    journalInstruction:
      "Selecciona una entrada de la izquierda para leer más.",

    weatherTitle: "🌤️ Clima",
    currentLocation: "Ubicación actual",
    findingLocation: "Buscando tu ubicación...",
    loadingDate: "Cargando fecha...",
    loadingWeather: "Cargando el clima actual...",
    feelsLike: "Sensación térmica",
    humidity: "Humedad",
    wind: "Viento",
    sunrise: "🌅 Amanecer",
    sunsetTime: "🌇 Atardecer",
    nextFiveHours: "Próximas 5 horas",
    loadingForecast: "Cargando pronóstico...",
    refreshWeather: "Actualizar clima"
  },

  hi: {
    bootInitializing: "AuroraOS शुरू हो रहा है...",
    enterDesktop: "डेस्कटॉप में प्रवेश करें",
    loadingTime: "समय लोड हो रहा है...",
    welcomeUser: "स्वागत है, User",

    journal: "Aurora जर्नल",
    settings: "सेटिंग्स",
    weather: "मौसम",

    welcomeWindowTitle: "✦ Aurora स्वागत",
    helloUser: "नमस्ते, User.",
    welcomeDesktop: "AuroraOS डेस्कटॉप में आपका स्वागत है।",
    dragInstruction: "इस विंडो को स्थानांतरित करने के लिए शीर्ष बार खींचें।",
    selectApplication: "शुरू करने के लिए एक ऐप चुनें।",

    settingsTitle: "⚙️ सेटिंग्स",
    wallpaper: "वॉलपेपर",
    auroraBlue: "🌌 Aurora ब्लू",
    auroraPurple: "💜 Aurora पर्पल",
    midnight: "🌙 मिडनाइट",
    sunset: "🌅 सनसेट",
    language: "भाषा",

    journalTitle: "📖 Aurora जर्नल",
    welcome: "स्वागत",
    myGoals: "मेरे लक्ष्य",
    favoriteThings: "पसंदीदा चीजें",
    july2026: "जुलाई 2026",
    journalWelcomeTitle: "स्वागत है, User.",
    journalIntro:
      "Aurora Journal आपके विचारों, आइडिया और यादों के लिए एक शांत स्थान है।",
    journalQuote:
      "छोटे विचार उज्ज्वल संभावनाएँ बन सकते हैं।",
    journalInstruction:
      "और पढ़ने के लिए बाईं ओर से एक प्रविष्टि चुनें।",

    weatherTitle: "🌤️ मौसम",
    currentLocation: "वर्तमान स्थान",
    findingLocation: "आपका स्थान खोजा जा रहा है...",
    loadingDate: "तारीख लोड हो रही है...",
    loadingWeather: "वर्तमान मौसम लोड हो रहा है...",
    feelsLike: "महसूस होता है",
    humidity: "नमी",
    wind: "हवा",
    sunrise: "🌅 सूर्योदय",
    sunsetTime: "🌇 सूर्यास्त",
    nextFiveHours: "अगले 5 घंटे",
    loadingForecast: "पूर्वानुमान लोड हो रहा है...",
    refreshWeather: "मौसम रीफ़्रेश करें"
  }
};

function applyLanguage(language) {
  const selectedTranslations =
    translations[language] || translations.en;

  document
    .querySelectorAll("[data-i18n]")
    .forEach(function (element) {
      const translationKey =
        element.dataset.i18n;

      const translatedText =
        selectedTranslations[translationKey];

      if (translatedText) {
        element.textContent = translatedText;
      }
    });

  document.documentElement.lang = language;

  localStorage.setItem(
    "auroraLanguage",
    language
  );
}

languageButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const language = button.dataset.language;

    applyLanguage(language);

    languageButtons.forEach(function (item) {
      item.classList.remove("active-language");
    });

    button.classList.add("active-language");
  });
});

function playBootSound() {
    const audioContext =
        new (window.AudioContext || window.webkitAudioContext)();

    const notes = [
        { frequency: 523.25, start: 0.00 }, // C5
        { frequency: 659.25, start: 0.08 }, // E5
        { frequency: 783.99, start: 0.16 }  // G5
    ];

    notes.forEach(function (note) {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = note.frequency;

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        gain.gain.setValueAtTime(
            0,
            audioContext.currentTime + note.start
        );

        gain.gain.linearRampToValueAtTime(
            0.12,
            audioContext.currentTime + note.start + 0.02
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime + note.start + 0.7
        );

        oscillator.start(
            audioContext.currentTime + note.start
        );

        oscillator.stop(
            audioContext.currentTime + note.start + 0.7
        );

    });

}




function enterDesktop() {

    playBootSound();

    setTimeout(function () {

        welcomeScreen.style.display = "none";
        desktop.style.display = "block";

    }, 250);

}
function updateTime() {
  const currentTime = new Date().toLocaleString();

  timeElement.textContent = currentTime;
}

function startBootAnimation(){

    let progress = 0;

    const timer = setInterval(function(){

        progress += Math.floor(
            Math.random()*12
        )+4;

        if(progress>100){

            progress=100;

        }

        bootProgress.style.width =
            progress+"%";

        bootPercent.textContent =
            progress+"%";

        if(progress<35){

            bootStatus.textContent=
            "Initializing AuroraOS...";

        }

        else if(progress<70){

            bootStatus.textContent=
            "Loading Modules...";

        }

        else if(progress<100){

            bootStatus.textContent=
            "Starting Desktop...";

        }

        else{

            clearInterval(timer);

            bootStatus.textContent=
            "System Ready";

            enterDesktopButton.style.display=
            "inline-block";

        }

    },180);

}

function closeWindow(element) {
  element.style.display = "none";
}


function openWindow(element) {
  element.style.display = "block";
  bringToFront(element);

  element.classList.remove("window-opening");

  void element.offsetWidth;

  element.classList.add("window-opening");
}


enterDesktopButton.addEventListener("click", enterDesktop);


welcomeClose.addEventListener("click", function () {
  closeWindow(welcomeWindow);
});


welcomeOpen.addEventListener("click", function () {
  openWindow(welcomeWindow);
});


journalOpen.addEventListener("click", function () {
  openWindow(journalWindow);
});

journalClose.addEventListener("click", function () {
  closeWindow(journalWindow);
});


weatherOpen.addEventListener("click", function () {
  openWindow(weatherWindow);
  loadWeather();
});


weatherClose.addEventListener("click", function () {
  closeWindow(weatherWindow);
});


weatherRefresh.addEventListener("click", function () {
  loadWeather();
});

settingsOpen.addEventListener("click", function () {
  openWindow(settingsWindow);
});

settingsClose.addEventListener("click", function () {
  closeWindow(settingsWindow);
});


function loadWeather() {
  weatherLocation.textContent = "Finding your location...";
  weatherDescription.textContent = "Loading current weather...";

  if (!navigator.geolocation) {
    useTorontoWeather(
      "Location is unavailable. Showing Toronto weather."
    );

    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      getLocationName(latitude, longitude);
    },

    function () {
      useTorontoWeather(
        "Location permission was not allowed. Showing Toronto weather."
      );
    },

    {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 300000
    }
  );
}


function useTorontoWeather(message) {
  weatherUpdated.textContent = message;

  fetchWeather(
    43.6532,
    -79.3832,
    "Toronto"
  );
}


async function fetchWeather(
  latitude,
  longitude,
  locationName
) {
  try {
    const weatherUrl =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=" + latitude +
  "&longitude=" + longitude +
  "&current=" +
  "temperature_2m," +
  "apparent_temperature," +
  "relative_humidity_2m," +
  "weather_code," +
  "wind_speed_10m" +
  "&hourly=" +
  "temperature_2m," +
  "weather_code" +
  "&daily=" +
  "sunrise," +
  "sunset" +
  "&forecast_days=2" +
  "&temperature_unit=celsius" +
  "&wind_speed_unit=kmh" +
  "&timezone=auto";

    const response = await fetch(weatherUrl);

    if (!response.ok) {
      throw new Error("Weather request failed.");
    }

    const data = await response.json();
    const current = data.current;

    const weatherInfo =
      getWeatherInformation(current.weather_code);

    weatherLocation.textContent = locationName;
    weatherIcon.textContent = weatherInfo.icon;

    const currentDate = new Date(current.time);

weatherDate.textContent =
  currentDate.toLocaleDateString(
    undefined,
    {
      weekday: "long",
      month: "long",
      day: "numeric"
    }
  );

weatherSunrise.textContent =
  formatWeatherTime(data.daily.sunrise[0]);

weatherSunset.textContent =
  formatWeatherTime(data.daily.sunset[0]);

displayHourlyForecast(
  data.hourly,
  current.time
);

    weatherTemperature.textContent =
      Math.round(current.temperature_2m) + "°";

    weatherDescription.textContent =
      weatherInfo.description;

    weatherFeelsLike.textContent =
      Math.round(current.apparent_temperature) + "°";

    weatherHumidity.textContent =
      current.relative_humidity_2m + "%";

    weatherWind.textContent =
      Math.round(current.wind_speed_10m) + " km/h";

    weatherUpdated.textContent =
      "Updated " +
      new Date(current.time).toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      );
  } catch (error) {
    console.error(error);

    weatherLocation.textContent = "Weather unavailable";
    weatherDescription.textContent =
      "Please check your internet connection.";

    weatherTemperature.textContent = "--°";
    weatherFeelsLike.textContent = "--°";
    weatherHumidity.textContent = "--%";
    weatherWind.textContent = "-- km/h";
  }
}

function formatWeatherTime(timeString) {
  return new Date(timeString).toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );
}


function displayHourlyForecast(
  hourlyData,
  currentTime
) {
  hourlyForecast.innerHTML = "";

  const currentTimestamp =
    new Date(currentTime).getTime();

  let startIndex =
    hourlyData.time.findIndex(function (time) {
      return new Date(time).getTime() >= currentTimestamp;
    });

  if (startIndex === -1) {
    startIndex = 0;
  }

  for (
    let index = startIndex;
    index < startIndex + 5;
    index++
  ) {
    if (!hourlyData.time[index]) {
      break;
    }

    const forecastTime =
      new Date(hourlyData.time[index]);

    const forecastInfo =
      getWeatherInformation(
        hourlyData.weather_code[index]
      );

    const card =
      document.createElement("div");

    card.className = "hourly-card";

    card.innerHTML = `
      <span class="hourly-time">
        ${forecastTime.toLocaleTimeString(
          [],
          {
            hour: "numeric"
          }
        )}
      </span>

      <span class="hourly-icon">
        ${forecastInfo.icon}
      </span>

      <span class="hourly-temp">
        ${Math.round(
          hourlyData.temperature_2m[index]
        )}°
      </span>
    `;

    hourlyForecast.appendChild(card);
  }
}


function getWeatherInformation(code) {
  if (code === 0) {
    return {
      icon: "☀️",
      description: "Clear sky"
    };
  }

  if (code === 1 || code === 2) {
    return {
      icon: "🌤️",
      description: "Partly cloudy"
    };
  }

  if (code === 3) {
    return {
      icon: "☁️",
      description: "Overcast"
    };
  }

  if (code === 45 || code === 48) {
    return {
      icon: "🌫️",
      description: "Foggy"
    };
  }

  if (
    code === 51 ||
    code === 53 ||
    code === 55 ||
    code === 56 ||
    code === 57
  ) {
    return {
      icon: "🌦️",
      description: "Drizzle"
    };
  }

  if (
    code === 61 ||
    code === 63 ||
    code === 65 ||
    code === 66 ||
    code === 67 ||
    code === 80 ||
    code === 81 ||
    code === 82
  ) {
    return {
      icon: "🌧️",
      description: "Rain"
    };
  }

  if (
    code === 71 ||
    code === 73 ||
    code === 75 ||
    code === 77 ||
    code === 85 ||
    code === 86
  ) {
    return {
      icon: "❄️",
      description: "Snow"
    };
  }

  if (
    code === 95 ||
    code === 96 ||
    code === 99
  ) {
    return {
      icon: "⛈️",
      description: "Thunderstorm"
    };
  }

  return {
    icon: "🌡️",
    description: "Current conditions"
  };
}

async function getLocationName(latitude, longitude) {
  try {
    const locationUrl =
      "https://nominatim.openstreetmap.org/reverse" +
      "?format=jsonv2" +
      "&lat=" + latitude +
      "&lon=" + longitude +
      "&zoom=10" +
      "&addressdetails=1";

    const response = await fetch(locationUrl);

    if (!response.ok) {
      throw new Error("Location request failed.");
    }

    const locationData = await response.json();
    const address = locationData.address || {};

    const cityName =
      address.city ||
      address.town ||
      address.village ||
      address.municipality ||
      address.county ||
      "Current Location";

    const regionName =
      address.state ||
      address.province ||
      "";

    let displayLocation = cityName;

    if (regionName && regionName !== cityName) {
      displayLocation =
        cityName + ", " + regionName;
    }

    fetchWeather(
      latitude,
      longitude,
      displayLocation
    );
  } catch (error) {
    console.error("Location name error:", error);

    fetchWeather(
      latitude,
      longitude,
      "Current Location"
    );
  }
}

function makeDraggable(windowElement) {
  const header = document.querySelector(
    "#" + windowElement.id + "Header"
  );

  if (!header) {
    console.error(
      "Drag header not found for:",
      windowElement.id
    );
    return;
  }

  let mouseStartX = 0;
  let mouseStartY = 0;
  let windowStartX = 0;
  let windowStartY = 0;

  header.addEventListener("mousedown", startDragging);

  function startDragging(event) {
    /*
      닫기 버튼을 눌렀을 때는 드래그를 시작하지 않는다.
    */
    if (
    event.target.closest(".close-button") ||
    event.target.closest(".resize-handle")
    ) {
    return;
    }

    event.preventDefault();

    const windowPosition =
      windowElement.getBoundingClientRect();

    mouseStartX = event.clientX;
    mouseStartY = event.clientY;

    windowStartX = windowPosition.left;
    windowStartY = windowPosition.top;

    /*
      CSS의 가운데 정렬 transform을 제거하고
      실제 픽셀 위치로 바꾼다.
    */
    windowElement.style.transform = "none";
    windowElement.style.left = windowStartX + "px";
    windowElement.style.top = windowStartY + "px";

    document.addEventListener(
      "mousemove",
      moveWindow
    );

    document.addEventListener(
      "mouseup",
      stopDragging
    );
  }

  function moveWindow(event) {
    const movementX =
      event.clientX - mouseStartX;

    const movementY =
      event.clientY - mouseStartY;

    let newLeft =
      windowStartX + movementX;

    let newTop =
      windowStartY + movementY;

    /*
      창이 화면 바깥으로 완전히 빠지지 않도록 제한한다.
    */
    const maxLeft =
      window.innerWidth -
      windowElement.offsetWidth;

    const maxTop =
      window.innerHeight -
      windowElement.offsetHeight;

    newLeft = Math.max(
      0,
      Math.min(newLeft, maxLeft)
    );

    /*
      Top Bar 아래까지만 올라갈 수 있게 한다.
    */
    newTop = Math.max(
      52,
      Math.min(newTop, maxTop)
    );

    windowElement.style.left =
      newLeft + "px";

    windowElement.style.top =
      newTop + "px";
  }

  function stopDragging() {
    document.removeEventListener(
      "mousemove",
      moveWindow
    );

    document.removeEventListener(
      "mouseup",
      stopDragging
    );
  }
}

function makeResizable(windowElement) {
  const handle =
    windowElement.querySelector(".resize-handle");

  if (!handle) {
    return;
  }

  handle.addEventListener("mousedown", function (event) {
    event.preventDefault();
    event.stopPropagation();

    bringToFront(windowElement);

    const rectangle =
      windowElement.getBoundingClientRect();

    const startWidth = rectangle.width;
    const startHeight = rectangle.height;

    const startX = event.clientX;
    const startY = event.clientY;

    /*
      창 위치를 픽셀값으로 고정한다.
      이렇게 해야 크기를 바꿀 때 창 중심이나 위치가 움직이지 않는다.
    */
    windowElement.style.transform = "none";
    windowElement.style.left = rectangle.left + "px";
    windowElement.style.top = rectangle.top + "px";

    const minimumWidth =
      windowElement.classList.contains("journal-window")
        ? 520
        : 320;

    const minimumHeight =
      windowElement.classList.contains("weather-window")
        ? 500
        : 220;

    function resizeWindow(moveEvent) {
      const requestedWidth =
        startWidth + moveEvent.clientX - startX;

      const requestedHeight =
        startHeight + moveEvent.clientY - startY;

      const maximumWidth =
        window.innerWidth - rectangle.left;

      const maximumHeight =
        window.innerHeight - rectangle.top;

      const newWidth = Math.max(
        minimumWidth,
        Math.min(requestedWidth, maximumWidth)
      );

      const newHeight = Math.max(
        minimumHeight,
        Math.min(requestedHeight, maximumHeight)
      );

      windowElement.style.width = newWidth + "px";
      windowElement.style.height = newHeight + "px";
    }

    function stopResizing() {
      document.removeEventListener(
        "mousemove",
        resizeWindow
      );

      document.removeEventListener(
        "mouseup",
        stopResizing
      );

      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    }

    document.body.style.userSelect = "none";
    document.body.style.cursor = "nwse-resize";

    document.addEventListener(
      "mousemove",
      resizeWindow
    );

    document.addEventListener(
      "mouseup",
      stopResizing
    );
  });
}

makeResizable(welcomeWindow);
makeResizable(journalWindow);
makeResizable(weatherWindow);
makeResizable(settingsWindow);

makeDraggable(welcomeWindow);
makeDraggable(journalWindow);
makeDraggable(weatherWindow);
makeDraggable(settingsWindow);

let highestZIndex = 20;

function bringToFront(windowElement) {
  highestZIndex++;
  windowElement.style.zIndex = highestZIndex;
}

function enableWindowFocus(windowElement) {
  windowElement.addEventListener("mousedown", function () {
    bringToFront(windowElement);
  });
}

enableWindowFocus(welcomeWindow);
enableWindowFocus(journalWindow);
enableWindowFocus(weatherWindow);
enableWindowFocus(settingsWindow);

const journalEntries =
  document.querySelectorAll(".journal-entry");

const journalTitle =
  document.querySelector("#journalTitle");

const journalDate =
  document.querySelector("#journalDate");

const journalBody =
  document.querySelector("#journalBody");


const journalContent = {
  welcome: {
    title: "Welcome, Ditto.",
    date: "July 2026",
    body: `
      <p>
        This is Aurora Journal, a quiet space for your
        thoughts, ideas, and memories.
      </p>

      <blockquote>
        Small ideas can become bright possibilities.
      </blockquote>

      <p>
        Select an entry from the left side to read more.
      </p>
    `
  },

  goals: {
    title: "My Goals",
    date: "July 2026",
    body: `
      <p>
        My goal is to keep improving AuroraOS and learn
        more about JavaScript.
      </p>

      <p>
        I also want to build more interactive apps and
        make the desktop feel like a real operating system.
      </p>
    `
  },

  favorites: {
    title: "Favorite Things",
    date: "July 2026",
    body: `
      <p>
        I like aurora colors, calm music, creative coding,
        and building new ideas.
      </p>

      <blockquote>
        Creativity grows when ideas become interactive.
      </blockquote>
    `
  }
};


journalEntries.forEach(function (entry) {
  entry.addEventListener("click", function () {
    const entryName = entry.dataset.entry;
    const selectedContent = journalContent[entryName];

    journalEntries.forEach(function (button) {
      button.classList.remove("active-entry");
    });

    entry.classList.add("active-entry");

    journalTitle.textContent =
      selectedContent.title;

    journalDate.textContent =
      selectedContent.date;

    journalBody.innerHTML =
      selectedContent.body;
  });
});

const wallpapers = {
  blue: `
    radial-gradient(
      circle at 25% 25%,
      rgba(45, 212, 191, 0.35),
      transparent 30%
    ),
    radial-gradient(
      circle at 75% 30%,
      rgba(59, 130, 246, 0.38),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #07111f,
      #172554 55%,
      #1e3a8a
    )
  `,

  purple: `
    radial-gradient(
      circle at 20% 25%,
      rgba(192, 132, 252, 0.38),
      transparent 32%
    ),
    radial-gradient(
      circle at 80% 35%,
      rgba(99, 102, 241, 0.4),
      transparent 36%
    ),
    linear-gradient(
      135deg,
      #160b2d,
      #312e81 55%,
      #4c1d95
    )
  `,

  midnight: `
    radial-gradient(
      circle at 70% 20%,
      rgba(71, 85, 105, 0.28),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #020617,
      #0f172a 55%,
      #111827
    )
  `,

  sunset: `
    radial-gradient(
      circle at 25% 30%,
      rgba(251, 146, 60, 0.42),
      transparent 32%
    ),
    radial-gradient(
      circle at 75% 35%,
      rgba(244, 114, 182, 0.36),
      transparent 36%
    ),
    linear-gradient(
      135deg,
      #431407,
      #7c2d12 45%,
      #4c1d95
    )
  `
};


wallpaperButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const wallpaperName = button.dataset.wallpaper;
    const selectedWallpaper = wallpapers[wallpaperName];

    desktop.style.background = selectedWallpaper;

    localStorage.setItem(
      "auroraWallpaper",
      wallpaperName
    );
  });
});

const savedWallpaper =
  localStorage.getItem("auroraWallpaper");

if (savedWallpaper && wallpapers[savedWallpaper]) {
  desktop.style.background =
    wallpapers[savedWallpaper];
}

document.querySelectorAll(".app-window").forEach(function (windowElement) {
  windowElement.addEventListener("animationend", function () {
    windowElement.classList.remove("window-opening");
  });
});

const savedLanguage =
  localStorage.getItem("auroraLanguage") || "en";

languageButtons.forEach(function (button) {
  button.classList.toggle(
    "active-language",
    button.dataset.language === savedLanguage
  );
});

applyLanguage(savedLanguage);

updateTime();

setInterval(updateTime,1000);

startBootAnimation();


