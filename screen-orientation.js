export function screenOrientation() {
    if (document.body.clientHeight > document.body.clientWidth) {
        return 'portrait';
    } else {
        return 'landscape';
    }
}
