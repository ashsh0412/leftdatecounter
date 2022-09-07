const clockTitle = document.querySelector(".js-clock");

function ClockTime(){
    const diffTime = Math.abs(new Date("12/24/2022") - new Date())
    const leftDay = String(Math.floor(diffTime / (1000 * 3600 * 24))).padStart(2, "0");
    const leftHour = String(Math.floor((diffTime / (1000 * 3600 * 24) - leftDay) * 24)).padStart(2, "0");
    const leftMinute = String(Math.floor((((diffTime / (1000 * 3600 * 24) - leftDay) * 24) - leftHour)*60)).padStart(2, "0");
    const leftSecond = String(Math.floor((((((diffTime / (1000 * 3600 * 24) - leftDay) * 24) - leftHour)*60)- leftMinute)*60)).padStart(2, "0");
    clockTitle.innerText = `${leftDay}일 ${leftHour}시간 ${leftMinute}분 ${leftSecond}초 남았습니다`
}

ClockTime();
setInterval(ClockTime, 1000);