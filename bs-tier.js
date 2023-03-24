export function calculateBootstrapTier(resultType) {
    let documentWidth = document.body.clientWidth;
    if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-sm').replace('px', ''))) {
        return resultType == 'literal' ? 'xs' : 0;
    } else if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-md').replace('px', ''))) {
        return resultType == 'literal' ? 'sm' : 1;
    } else if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-lg').replace('px', ''))) {
        return resultType == 'literal' ? 'md' : 2;
    } else if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xl').replace('px', ''))) {
        return resultType == 'literal' ? 'lg' : 3;
    } else if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xxl').replace('px', ''))) {
        return resultType == 'literal' ? 'xl' : 4;
    } else {
        return resultType == 'literal' ? 'xxl' : 5;
    }
}
