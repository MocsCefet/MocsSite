/* Small helper to load header/footer and adjust relative links depending on page location */
(function(){
    function inPagesDir(){
        return location.pathname.split('/').indexOf('pages') !== -1;
    }

    function adjustHtml(html){
        // If we're inside /pages/, we need to fix links that point to root 'index.html' and 'pages/...'
        if(inPagesDir()){
            html = html.replace(/href="index.html"/g, 'href="../index.html"');
            // replace links to pages/... -> remove pages/ prefix (they are in same folder)
            html = html.replace(/href="pages\//g, 'href="');
        }
        return html;
    }

    function loadInclude(targetId, path){
        fetch(path).then(function(r){
            if(!r.ok) throw new Error('Failed to fetch '+path);
            return r.text();
        }).then(function(text){
            document.getElementById(targetId).innerHTML = adjustHtml(text);
        }).catch(function(err){
            console.error(err);
        });
    }

    // decide paths relative to current page
    var headerPath = inPagesDir() ? '../header.html' : 'header.html';
    var footerPath = inPagesDir() ? '../footer.html' : 'footer.html';

    // expose for manual call if needed
    window.loadHeaderFooter = function(){
        var headerPlaceholder = document.getElementById('site-header');
        var footerPlaceholder = document.getElementById('site-footer');
        if(headerPlaceholder) loadInclude('site-header', headerPath);
        if(footerPlaceholder) loadInclude('site-footer', footerPath);
    };

    // automatically load on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function(){
        window.loadHeaderFooter();
    });
})();
