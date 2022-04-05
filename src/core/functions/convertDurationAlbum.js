function convertDurationAlbum(duration) {
    var seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let hrLabel = hours > 1 ? "hrs" : "hr";
    let minLabel = minutes > 1 ? "mins" : "min";
    let secLabel = seconds > 1 ? "seconds" : "sec";
    if(minutes === 0) return `${seconds} ${secLabel}`;
    if (hours === 0) return `${minutes} ${minLabel} ${seconds} ${secLabel}`;
    return `${hours} ${hrLabel} ${minutes} ${minLabel}`;
}

export default convertDurationAlbum;