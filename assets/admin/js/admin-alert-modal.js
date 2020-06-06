function closeModalForm() {
    let md = document.querySelector('.md-modal');
    let mdOverlay = document.querySelector('.md-overlay');
    RemoveClass(md, 'md-show');
    md.parentNode.removeChild(md);
    mdOverlay.parentNode.removeChild(mdOverlay);
}

$(function () {
    document.addEventListener('click', (e)=> {
        if(e.target && (e.target.classList.contains('md-close') || e.target.classList.contains('md-cancel'))) {
            closeModalForm();
        }

        if(e.target && e.target.classList.contains('md-ok')) {
            closeModalForm();
        }
    })
});

function RemoveClass(elem, newClass) {
    elem.className = elem.className.replace(new RegExp('(\\s|^)'+newClass+'(\\s|$)'), " ").trim();
}

function alertModal(alert) {
    return `<div class="md-modal md-effect-12 md-show">
    <div class="md-content">
        <h3>${alert}</h3>
        <div>
            <button class="md-close">Close</button>
        </div>
    </div>
</div>

<div class="md-overlay"></div>`
}

function alertConfirmModal(alert) {
    return `<div class="md-modal md-effect-12 md-show">
    <div class="md-content">
        <h3>${alert}</h3>
        <div>
            <button class="md-ok">Yes</button>
        </div>
        <div>
            <button class="md-cancel">No</button>
        </div>
    </div>
</div>

<div class="md-overlay"></div>`
}