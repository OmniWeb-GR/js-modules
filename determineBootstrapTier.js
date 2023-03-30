export function determineBootstrapTier(returnNumber) {
    function main() {
        const tiers = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
        let documentWidth = document.body.clientWidth, tierIndex;
        let returnNumber; // remove after testing
        tiers.forEach(function(tier, index) {
            if (!returnNumber) {
                document.body.classList.remove(tiers[index]);
            }
            if (documentWidth < parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-' + tiers[index + 1]).replace('px', ''))) {
                tierIndex = index;
            }
            if ((index - 1) == tiers.length) {
                if (documentWidth >= parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-' + tiers[index + 1]).replace('px', ''))) {
                    tierIndex = index;
                }
            }
        });
        if (typeof tierIndex !== "undefined") {
            document.body.classList.add(tiers[tierIndex]);
            if (typeof returnNumber === "undefined") {
                return tiers[tierIndex];
            }
            else {
                return tierIndex;
            }
        }
        else {
            console.log('Unable to determine Bootstrap tiers.');
        }
    }
    main();
    window.onresize = main;
}
