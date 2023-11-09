/* For more info, see this issue: https://github.com/mkdocs/mkdocs/issues/1794 */

<script>
        var _paq = window._paq = window._paq || [];

        _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
        _paq.push(["setCookieDomain", "*.gugulet.hu"]);
        _paq.push(["setDomains", ["*.gugulet.hu", "*.qself.gugulet.hu"]]);
        _paq.push(["enableCrossDomainLinking"]);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);

        (function () {
                var u = "https://analytics.gugulet.hu/";
        _paq.push(['setTrackerUrl', u + 'matomo.php']);
        _paq.push(['setSiteId', '1']);
        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
        })();
</script>
