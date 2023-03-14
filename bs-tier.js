export function calculateBootstrapTier(resultType) {
    let documentWidth = document.body.clientHeight;
    if (documentWidth < getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-sm')) {
        return resultType == 'literal' ? 'xs' : 0;
    } else if (documentWidth < getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-md')) {
        return resultType == 'literal' ? 'sm' : 1;
    } else if (documentWidth < getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-lg')) {
        return resultType == 'literal' ? 'md' : 2;
    } else if (documentWidth < getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xl')) {
        return resultType == 'literal' ? 'lg' : 3;
    } else if (documentWidth < getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xxl')) {
        return resultType == 'literal' ? 'xl' : 4;
    } else {
        return resultType == 'literal' ? 'xxl' : 5;
    }
}
