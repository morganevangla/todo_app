function isSelected(day, value) {
   return value.isSame(day, "day")
}

 function beforeToday(day) {
    return day.isBefore(new Date(), "day")
}

function isToday(day) {
    return day.isSame(new Date(), "day")
}

export default function dayStyles(day, value) {
    if(isSelected(day, value)) {
        return "selected"
    } else if(beforeToday(day)) {
        return "before"
    }  else if(isToday(day)) {
        return "today"
    } else {
    return ""
}
}