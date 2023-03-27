export (function determineBootstrapTier(resultType) {
    let documentWidth = document.body.clientWidth;
    if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-sm').replace('px', ''))) {
        return resultType == 'number' ? 0 : 'xs';
    }
    else if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-md').replace('px', ''))) {
        return resultType == 'number' ? 1 : 'sm';
    }
    else if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-lg').replace('px', ''))) {
        return resultType == 'number' ? 2 : 'md';
    }
    else if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xl').replace('px', ''))) {
        return resultType == 'number' ? 3 : 'lg';
    }
    else if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xxl').replace('px', ''))) {
        return resultType == 'number' ? 4 : 'xl';
    }
    else if (documentWidth >= parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xxl').replace('px', ''))) {
        return resultType == 'number' ? 5 : 'xxl';
    }
    else {
        console.log('Unable to determine Bootstrap tiers.');
        return;
    }
})();
