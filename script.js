document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Definir la fecha objetivo de forma LOCAL (Argentina)
    // new Date(año, mes, día, hora, minuto, segundo)
    // NOTA: El mes en JavaScript es base 0 (Enero=0, Diciembre=11)
    const eventYear = 2025;
    const eventMonth = 11; // Diciembre es el mes 11
    const eventDay = 15;
    const eventHour = 19; 
    const eventMinute = 0;
    const eventSecond = 0;

    // Crea un objeto Date usando la hora LOCAL del sistema donde se ejecuta.
    // Como el usuario está en Argentina, esto creará un objeto Date con la zona horaria ART (UTC-3).
    const localEventDate = new Date(
        eventYear, 
        eventMonth, 
        eventDay, 
        eventHour, 
        eventMinute, 
        eventSecond
    );

    const countdownDate = localEventDate.getTime();
    
    // Obtener elementos del DOM
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Función para actualizar el contador
    const updateCountdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        // Si el conteo terminó, detener
        if (distance < 0) {
            clearInterval(updateCountdown);
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
            return;
        }
        
        // 2. Cálculo de Horas Totales Restantes (HS)
        const totalHours = Math.floor(distance / (1000 * 60 * 60));
        
        // Minutos restantes 
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Segundos restantes 
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Función de formato
        const formatTime = (time) => String(time).padStart(2, '0');
        
        // Actualizar el DOM
        // Notar que solo aplicamos padStart(2, '0') a minutos y segundos, 
        // ya que las horas pueden tener 3 o más dígitos.
        hoursElement.textContent = totalHours; // Sin padStart si son más de 99
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);

    }, 1000);
});