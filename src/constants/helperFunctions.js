 function rand() {
    return Math.random().toString(36).substr(2);
}

export function token () {
    return rand() + rand() + rand(); // to make it longer
}

